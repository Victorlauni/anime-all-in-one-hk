import { Backdrop, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getWatchingBangumi } from '../api/common'
import Bangumi from '../component/Bangumi'
import BangumiThumbnail from '../component/BangumiThumbnail';
import style from '../style/BangumiList.module.scss'
import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

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
      </div>
    </Container>
  )
}
