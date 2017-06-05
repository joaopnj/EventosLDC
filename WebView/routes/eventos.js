module.exports = (app) => {

    var eventos = app.controllers.eventos;

    // methods de HTTP, GET, POST, PUT , DELETE
	app.get ("/eventos",          eventos.index);
	app.get ("/eventos/create",   eventos.create);
	app.post("/eventos",          eventos.insert);
	app.get ("/eventos/edit/:id", eventos.edit);
	app.get ("/shareEvent"		, eventos.share);
	app.post("/eventos/edit/:id", eventos.update);
	app.get ("/eventos/show/:id", eventos.show);
    
}