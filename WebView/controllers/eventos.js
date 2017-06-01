module.exports = (app) => {

	var Evento 		 	 = app.models.eventos;

	var EventosController = {

        index: (req,res) => {
			Evento.find( (err,data) => {
				err ? console.log(err) : res.render("eventos/index", {lista: data});
			});
		},

		create: (req,res) => {
			res.render("eventos/create");
		},

		insert: (req,res) => {
			model = new Evento();
			model.titulo     = req.body.titulo;
			model.subtitulo  = req.body.subtitulo;
			model.dataEvento = req.body.dataEvento;
			model.descricao  = req.body.descricao;
			model.save( (err) => {
                err ? console.log(err) : res.redirect('/eventos');
			});
		},

		edit: (req,res) => {
			Evento.findById(req.params.id, (err, data) => {
				err ? console.log(err) : res.render('eventos/edit', {value: data});
			});
		},

		update: (req,res) => {
			Evento.findById(req.params.id, (err, data) => {
				if(err){
					console.log(err);
				} else{
					var model   = data;
					model.titulo     = req.body.titulo;
					model.subtitulo  = req.body.subtitulo;
					model.dataEvento = req.body.dataEvento;
					model.descricao  = req.body.descricao;
					model.save( (err) => {
					    err ? console.log(err) : res.redirect('/eventos');
					});
				}
			});
		},

		show: (req,res) => {
			Evento.findById(req.params.id, (err, data) => {
				err ? console.log(err) : res.render('eventos/show', {value: data});
			});
		}
    }

    return EventosController;
}