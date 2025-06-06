import React from 'react'
import { LazyYouTubePlayer } from './VideoBlock/LazyYouTubePlayer'


const Video = () => {
  return (
    <div className="video-block">
      <LazyYouTubePlayer youTubeID="4gpTco1KyMA" />
    </div>
  )
}

export default Video