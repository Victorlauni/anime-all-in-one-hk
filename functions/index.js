const functions = require('firebase-functions');
const express = require('express');
const { YoutubeAPITest, FirestoreTest, fetchViuById } = require('./handler/common');
const app = express()

app.use(express.json())

app.get('/youtubeAPITest', YoutubeAPITest)
app.get('/firestoreTest', FirestoreTest)
app.post('/fetchViuById', fetchViuById)

exports.api = functions.https.onRequest(app)