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