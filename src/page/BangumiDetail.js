import { Container, Button, Collapse } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBangumiByID } from '../api/common';
import style from '../style/BangumiDetail.module.scss';

export default function BangumiDetail(prop) {
  const {bangumiId} = useParams();
  const [bangumiData, setBangumiData] = useState(undefined)
  const [selectedEpisode, setSelectedEpisode] = useState(undefined)
  useEffect(() => {
    if (bangumiId) getBangumiByID(bangumiId).then(res => setBangumiData(res))
  }, [bangumiId])
  return (
    <Container>
      <div className={style.root}>
        <div className={style.section1}>
          <img src={bangumiData?.visualURL}/>
          <h1>{bangumiData?.title}</h1>
          <p>{bangumiData?.description}</p>
        </div>
        <div className={style.section2}>
          {bangumiData && Object.entries(bangumiData?.episodes).map(([key, val]) => <Button 
            variant='outlined' 
            color={selectedEpisode === key? 'secondary': undefined} 
            onClick={() => {setSelectedEpisode(selectedEpisode === key? undefined: key)}}
            style={{marginRight: 5, marginBottom: 10}}>{val.title}</Button>)}
        </div>
        <Collapse in={selectedEpisode}>
          <div className={style.collapse}>
            {selectedEpisode && Object.entries(bangumiData?.episodes[selectedEpisode]?.source).map(([key, val]) => <Button
              onClick={() => window.open(val, '_black')}>{key}</Button>)}
          </div>
        </Collapse>

      </div>
    </Container>
  )
}
