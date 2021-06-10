import React from 'react'
import { useHistory } from 'react-router';
import style from '../style/BangumiThumbnail.module.scss'

export default function BangumiThumbnail(prop) {
  const {bangumi} = prop;
  const history = useHistory();
  const handleClick = () => {
    history.push("/bangumi/"+bangumi.id)
  }
  return (
    <div className={style.root} onClick={handleClick}>
      <img src={bangumi.visualURL}/>
      <p>{bangumi.title}</p>
    </div>
  )
}
