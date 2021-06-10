import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBangumiByID } from '../api/common';

export default function BangumiDetail(prop) {
  const {bangumiId} = useParams();
  const [bangumiData, setBangumiData] = useState(null)
  useEffect(() => {
    if (bangumiId) getBangumiByID(bangumiId).then(res => setBangumiData(res))
  }, [bangumiId])
  return (
    <Container>
      <div>
        <h1>{bangumiData?.title}</h1>
      </div>
    </Container>
  )
}
