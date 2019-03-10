'use strict';
const Homey = require('homey');
var request = require('request');

// Build SSBv1 Host from Config (make variables single for later use as well)
const SSBv1_IP = Homey.ManagerSettings.get('SSBv1_ip');
const SSBv1_Port = Homey.ManagerSettings.get('SSBv1_port');
var SSBv1Host = SSBv1_IP + ':' + SSBv1_Port;

//Homey Requirement
class SSBv1 extends Homey.App {
	onInit() {
		this.log(Homey.__("appLogStart"));
	}
}


// Start Volume
// Function Volume Control
function VolumeControl(Volume) {
	//var volumeControl_call = ('http://' + SSBv1Host + '/web/vol?set=' + Volume);
	var volumeControl_call = ('http://' + SSBv1Host + '/UIC?cmd=%3Cname%3ESetVolume%3C/name%3E%3Cp%20type=%22dec%22%20name=%22volume%22%20val=%22' + Volume + '%22/%3E');
	//var volumeControl_call = ('http://' + SSBv1Host + '/UIC?cmd=<name>SetVolume</name><p%20type="dec"%20name="volume"%20val="' + Volume + '"/>');
	// http://10.0.0.147:55001/UIC?cmd=%3Cname%3ESetVolume%3C/name%3E%3Cp%20type=%22dec%22%20name=%22volume%22%20val=%2220%22/%3E
	var options = {
		method: 'GET',
		url: volumeControl_call,
		headers: "{ 'Content-type: text/plain' }"
		//headers: { SSBv1Host }
	};
	function callback(error, response, body) {
		if (!error && response.statusCode == 200){
			console.log('Following Call was made successfully(Volume): \n'+volumeControl_call);
		}
		else {
			console.log('Following Call was made successfully(Volume): \n'+volumeControl_call);
			//console.log('Following Error occured when Fuction VolumeControl was called: \n Call used:'+volumeControl_call+'\nError:' +!error+ '\nResponse Status Code: '+response.statusCode+ '\nBody: \n'+body+'\n');
			}
	}
	request(options, callback);
	//request(options);
	//request(options);
	//console.log('Following Call was made successfully(Volume): \n'+volumeControl_call);
}


//Set Volume Flowcard
let setVolumeAction = new Homey.FlowCardAction('vol_set');
setVolumeAction
  .register()
  .registerRunListener(( args) => {
	  var Volume = args.volume;
	VolumeControl(Volume);
    return true;
});
// End Volume

// Send Message End

module.exports = SSBv1;
