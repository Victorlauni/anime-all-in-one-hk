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

export const getWatchingBangumi = async () => {
  const mock = {
    data: [
      {
        title: "Title",
        description: "Desc",
        visualURL: "https://m.media-amazon.com/images/M/MV5BYmJhMDYzYzMtNTVlZS00MzgwLWE3ZjAtN2FhZTBlOGQzZmFmXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episodes: {
          1: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          },
          2: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          },
          3: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          }
        }
      },
      {
        title: "Title",
        description: "Desc",
        visualURL: "https://i.imgur.com/Xsk9g.jpg",
        episodes: {
          1: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          },
          2: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          },
          3: {
            sources: {
              "Viu": "https://viu.com",
              "Youtube": "https://youtube.com"
            }
          }
        }
      }
    ]
  }
  return Promise.resolve(mock.data)
}