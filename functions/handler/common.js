const { default: Axios, default: axios } = require("axios")
const { youtubeAPI } = require("../cred/youtubeAPI")
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

const getViuAPI = (id) => {
  return `https://www.viu.com/ott/hk/index.php?area_id=1&language_flag_id=1&r=vod/ajax-detail&platform_flag_label=web&area_id=1&language_flag_id=1&product_id=${id}&ut=0`
}

const getViuURL = (id) => {
  return `https://www.viu.com/ott/hk/zh-hk/vod/${id}/`
}

exports.YoutubeAPITest = async (req, res) => {
  Axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'id',
      key: youtubeAPI,
      playlistId: 'PLxSscENEp7Jj1KDCcoLBqT6tpeSjzbFN9'
    }
  }).then(val => res.json(val.data))
}

exports.FirestoreTest = async (req, res) => {
  db.collection('season').get().then(val => val.docs.map(doc => doc.data())).then(val => res.json(val))
}

exports.fetchViuById = async (req, res) => {
  const {id} = req.body;
  console.log(req.body)
  let docRef = db.collection('bangumi').doc(id)
  let docSnapshot = undefined;
  let viuURL = undefined;
  docRef.get()
    .then(doc => {
      docSnapshot = doc;
      return doc.get('viuId');
    }) // get viuId
    .then(viuId => {
      viuURL = getViuURL(viuId)
      return axios.get(getViuAPI(viuId)).then(data => data.data)
    }) // use viu api to get released episode
    .then(data => data.data.series.product.length) // get released episode number
    .then(val => {
      let epi = docSnapshot.get('episodes');
      for (let i = 0; i < val; i++) {
        if (!epi[i]) epi[i] = {
          "source": {
            "viu": viuURL
          },
          "title": i+1
        }
        else if (epi[i].source) epi[i].source.viu = viuURL;
        else epi[i].source = {"viu": viuURL}
      }
      return docRef.update({
        'episodes': epi
      })
    })
    .then(() => res.status(200).end())
}