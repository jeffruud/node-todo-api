//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 	if (err) return console.log('Unable to connect');
 	console.log('Connected to MongoDB server');
 	
 	// db.collection('Todos').findOneAndUpdate({
 	// 	_id: new ObjectID('58237c950758c56ebf3d5d99')
 	// }, {
 	// 	$set: {
 	// 		completed: true
 	// 	}
 	// }, {
 	// 	returnOriginal: false
 	// }).then((result) => {
 	// 	console.log(result);
 	// });

 	db.collection('Users').findOneAndUpdate({
 		_id: new ObjectID('582257f63afc0225f0995477')
 	}, {
 		$inc: {
 			age: 1
 		}
 	}, {
 		returnOriginal: false
 	}).then((result) => {
 		console.log(result);
 	});
	//db.close();
});