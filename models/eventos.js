module.exports = () => {
	var mongoose     = require('mongoose');
	var Schema       = mongoose.Schema;

	var eventos  = new Schema({
		titulo	  :   String,
        subtitulo :   String,
		dataEvento:   String,
		descricao :   String,
		cadastro  :   {type: Date, default: Date.now}
	});

	return mongoose.model('eventos', eventos);
}
