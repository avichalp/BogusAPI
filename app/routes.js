const Promise = require('bluebird');
const MongoClient = require('mongodb');

function routes (app){
    var mongoClient = Promise.promisifyAll(MongoClient).MongoClient;
    var responseGenerator = function (req, res) {
	mongoClient.connectAsync('mongodb://localhost:27017/mean-dev')
	    .then(function(db) {
		return db.collection('Response').findAsync({
		    url: req.url,
		    method: req.method
		})
	    })
	    .then(function(cursor) {
		return cursor.toArrayAsync();
	    })
	    .then(function(content) {
		if (content.length > 0){
		    res.status(200).json(content[0].response);
		}else{
		    res.status(404).json({message: 'not found'});
		}
		
	    })
	    .catch(function(err) {
		throw err;
	    });
    }
    app.get('*', responseGenerator);
    app.post('*', responseGenerator);
    app.put('*', responseGenerator);
    app.delete('*', responseGenerator);
    app.patch('*', responseGenerator);
};

module.exports = routes
