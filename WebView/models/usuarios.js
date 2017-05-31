module.exports = function(){
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;

	var usuarios  = new Schema({
		nome: String,
		login: String,
		senha: String,
		data_cad: {type: Date, default: Date.now}
	});

	return mongoose.model('usuarios',usuarios);
}
