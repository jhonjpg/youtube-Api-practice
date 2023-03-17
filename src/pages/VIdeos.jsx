import React, { useEffect, useState } from 'react'
import VideoContainer from '../components/VideoContainer'
import { gettingVideos } from '../helpers/gettingVideo'

export const VIdeos = () => {

    const [videoData, setvideoData] = useState([])



useEffect(() => {


    gettingVideos().then(data =>  setvideoData(transformData(data)))
    

    



}, [])


const transformData = (data) =>{

    return data.items.map(i => {
    
    
        return i
    })



}




    return (

        <>


            <div className="DivVideos">



                <div className="w-100 d-flex gap-3 flex-wrap justify-content-center align-items-center">


                {videoData.map((videos, index) => <VideoContainer key={index} data={videos} />)
        }
                
                
          


                </div>



            </div>



        </>

    )
}
