const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();


app.get('/games', (req, res) => {
    admin
        .firestore()
        .collection('games')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let games = [];
            data.forEach(doc => {
                games.push({
                    gameId: doc.id,
                    createdAt: doc.data().createdAt,
                    players: doc.data().players,
                    roomCode: doc.data().roomCode,
                    roomHost: doc.data().roomHost
                });
            });
            return res.json(games);
        })
        .catch(err => console.error(err));
});

app.post('/games', (req, res) => {
    const newGame = {
        createdAt: new Date().toISOString(),
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

exports.api = functions.https.onRequest(app);