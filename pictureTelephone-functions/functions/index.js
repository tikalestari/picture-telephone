const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello world!");
});

exports.getGames = functions.https.onRequest((req, res) => {
    admin.firestore().collection('games').get()
        .then(data => {
            let games = [];
            data.forEach(doc => {
                games.push(doc.data());
            });
            return res.json(games);
        })
        .catch(err => console.error(err));
});

exports.createGame = functions.https.onRequest((req, res) => {
    const newGame = {
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
        players: req.body.players,
        roomCode: req.body.roomCode,
        roomHost: req.body.roomHost
    };

    admin.firestore()
        .collection('games')
        .add(newGame)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully`});
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err);
        });
});