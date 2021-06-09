import { Button, Card, CardContent, Container, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getWatchingBangumi } from '../api/common'
import { db } from '../lib/firebase'
import Bangumi from './Bangumi'

export default function BangumiList() {
  const [selectedEpisode, setSelectedEpisode] = useState(undefined)
  const [bangumiList, setBangumiList] = useState([])
  useEffect(() => {
    console.log("HIHI")
    db.collection('bangumi').get().then((val) => {
      console.log(val)
    })
    getWatchingBangumi().then(val => setBangumiList(val))
  }, [])
  return (
    <Container>
      {bangumiList.map(val => <Bangumi bangumi={val}/>)}
    </Container>
  )
}
