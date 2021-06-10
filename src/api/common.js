import { db } from "../lib/firebase"

export const getAllSession = async () => {
  let result = db.collection('season').orderBy('order', 'desc').get().then(docs => {
    return docs.docs.map(doc => doc.id.replaceAll('_', " "))
  })
  const mock = {
    data: ["2020 Winter", "2021 Spring", "2021 Summer"].reverse()
  }
  return Promise.resolve(result)
}

export const getWatchingBangumi = async (season) => {
  let result = db.collection('bangumi').where('season','==',season).get().then(col => {
    return col.docs.map(doc => {
      return {id: doc.id, ...doc.data()}
    })
  })
  return Promise.resolve(result)
}