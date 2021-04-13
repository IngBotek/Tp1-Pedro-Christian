var mqtt = require('mqtt');
var postgreClient = require('../postgreSQL/postgreHandler')

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://192.168.100.25';
    this.username = 'USER';
    this.password = 'PASSWORD';
  }
  
  connect() {
    
    this.mqttClient = mqtt.connect(this.host);

    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    this.mqttClient.subscribe(['esp32/dht/temperature','esp32/dht/humidity'], {qos: 1});
    var id=2;

    this.mqttClient.on('message', function (topic, message) {
      console.log(message.toString());
      if(topic == 'esp32/dht/temperature'){
        id++;
        console.log("mensaje de temperatura");
        postgreClient.query('INSERT INTO temperatura (id,valor) VALUES ($1,$2)',[id,Number(message)]).then(
          (response)=>{console.log(response)}
        ).catch(
          (error)=>{console.log(error)}
        )
      }
      else{
          console.log("mensaje de humedad");
      }
      
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

}

module.exports = MqttHandler;