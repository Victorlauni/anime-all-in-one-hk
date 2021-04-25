import { Container, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getWatchingBangumi } from '../api/common'

export default function Bangumi() {
  const [bangumiList, setBangumiList] = useState([])
  useEffect(() => {
    getWatchingBangumi().then(val => setBangumiList(val))
  }, [])
  return (
    <Container>
      {bangumiList.map(val => <Paper>
        <p>{val.title}</p>
      </Paper>)}
    </Container>
  )
}
