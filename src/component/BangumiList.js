import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getWatchingBangumi } from '../api/common'
import Bangumi from './Bangumi'
import BangumiThumbnail from './BangumiThumbnail';
import style from '../style/BangumiList.module.scss'

export default function BangumiList(prop) {
  const {session} = prop;
  const [bangumiList, setBangumiList] = useState([])
  useEffect(() => {
    session && getWatchingBangumi(session).then(val => setBangumiList(val))
  }, [session])
  return (
    <Container>
      <div className={style.root}>
        {bangumiList.map(val => <BangumiThumbnail bangumi={val}/>)}
        {bangumiList.map(val => <BangumiThumbnail bangumi={val}/>)}
        {bangumiList.map(val => <BangumiThumbnail bangumi={val}/>)}
        {bangumiList.map(val => <BangumiThumbnail bangumi={val}/>)}

      </div>
    </Container>
  )
}
