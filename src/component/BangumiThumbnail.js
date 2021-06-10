import React from 'react'
import style from '../style/BangumiThumbnail.module.scss'

export default function BangumiThumbnail(prop) {
  const {bangumi} = prop;
  return (
    <div className={style.root}>
      <img src={bangumi.visualURL}/>
      <p>{bangumi.title}</p>
    </div>
  )
}
