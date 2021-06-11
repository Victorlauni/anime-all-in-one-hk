import { Button, Card, CardContent, CardMedia, Collapse } from '@material-ui/core'
import transitions from '@material-ui/core/styles/transitions'
import React, { useState } from 'react'

export default function Bangumi(props) {
  const {bangumi: val} = props
  const [selectedEpisode, setSelectedEpisode] = useState(undefined)
  return (
    <Card style={{margin: '15px 0px', display: 'flex'}}>
      <CardContent style={{flexGrow: 1}}>
        <h1>{val.title}</h1>
        <p>{val.description}</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {Object.entries(val.episodes).map(([key, val]) => <Button 
            variant='outlined' 
            color={selectedEpisode === key? 'secondary': undefined} 
            onClick={() => {setSelectedEpisode(selectedEpisode === key? undefined: key)}}
            style={{marginRight: 5, marginBottom: 10}}>{key}</Button>)}
        </div>
        <Collapse in={selectedEpisode}>
          <div style={{marginTop: 15, minHeight: 40}}>
            {selectedEpisode && Object.entries(val.episodes[selectedEpisode]?.source).map(([key, val]) => <Button
              onClick={() => window.open(val, '_black')}>{key}</Button>)}
          </div>
        </Collapse>
        
      </CardContent>
      <CardMedia
        style={{width: 300, minWidth: 100}}
        image={val.visualURL}
      />
    </Card>
  )
}
