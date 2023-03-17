import React, { useEffect, useState } from 'react'

const VideoContainer = ({data}) => {





  const views= 6230


  const [isPlaying, setIsPlaying] = useState(false);



  let url = `https://www.youtube.com/embed/${data.id.videoId}`






  const playVi = `video ${isPlaying ? "videoPlay" : ""}`








  return (



    <div className="videosContainer" >

    <div className="video" >

        <iframe   width="100%" height="100%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; "  ></iframe>
    </div>

    <div className="channelStuff">

        <div className="canalLogo">

            <span className="overflow-hidden"><img src="data:image/jpeg;base64,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" alt="" width="100%" height="100%" /></span>
        </div>
        <div className="namesArea">

            <h2 className="texto">{data.snippet.title}</h2>

            <div className="canalName">{data.snippet.channelTitle}</div>


            <div className="DivVisualizaciones">
                <p className="visializaciones">  {views} Visualizaciones</p>

                <strong>.</strong>

                <p className="dias">hace 3 dias</p>
            </div>
        </div>
    </div>

</div>



  )


}

export default VideoContainer