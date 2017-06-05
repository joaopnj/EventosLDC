module.exports = function(app){

	const notifier = require('node-notifier');
	var Usuario = app.models.usuarios;

	var UsuarioController = {
		index: function(req,res){
			Usuario.find(function(err,data){
				err ? console.log(err) : res.render("usuarios/index", {lista: JSON.stringify(data)});
			});
		},
		create: function(req,res){
			res.render("usuarios/create");
		},

		insert: (req,res) => {
			var model = new Usuario(req.body);
			model.save((err) =>{
				err ? console.log(err) : res.redirect('/usuarios');
			});
		},

		edit: (req,res) => {
			Usuario.findById(req.params.id, (err, data) => {
				err ? console.log(err) : res.render('usuarios/edit', {value: data});
			});
		},

		update: (req,res) => {
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				} else{
					var model   = data;
					model.nome  = req.body.nome;
					model.login = req.body.login;
					model.save( (err) => {
						err ? console.log(err) : res.redirect('/usuarios');
					});
				}
			});
		},
		show: (req,res) => {
			Usuario.findById(req.params.id, function(err, data){
				err ? console.log(err) : res.render('usuarios/show', {value: data});
			});
		},
		notification: (req,res) => {
			notifier.notify({
        	'title'  : "Só testando pra ver",
        	'message': "Olá, minha primeira notificação",
        	'icon '  : "../imagens/Ok.png",
        	'sound'  : true,
        	'wait'   : true // Wait with callback, until user action is taken against notification 
    		}, function (err, response) {
    		// Response is response from notification 
    		});
			res.redirect('/usuarios');
		},

		share: (req,res) => {
			Usuario.find((err,data) => {
				err ? console.log(err) : res.json(data);
			});
		}
	}

	return UsuarioController;
}
