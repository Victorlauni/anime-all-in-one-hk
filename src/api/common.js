export const getAllSession = async () => {
  const mock = {
    data: ["2020 Winter", "2021 Spring", "2021 Summer"].reverse()
  }
  return Promise.resolve(mock.data)
}

export const getWatchingBangumi = async () => {
  const mock = {
    data: [
      {
        title: "Title",
        description: "Desc",
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