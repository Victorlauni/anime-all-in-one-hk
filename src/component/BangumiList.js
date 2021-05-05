import { Button, Card, CardContent, Container, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getWatchingBangumi } from '../api/common'
import Bangumi from './Bangumi'

export default function BangumiList() {
  const [selectedEpisode, setSelectedEpisode] = useState(undefined)
  const [bangumiList, setBangumiList] = useState([])
  useEffect(() => {
    getWatchingBangumi().then(val => setBangumiList(val))
  }, [])
  return (
    <Container>
      {bangumiList.map(val => <Bangumi bangumi={val}/>)}
    </Container>
  )
}
