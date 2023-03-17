import React from 'react'

const Carousel = () => {
    return (



<>

<div id="carouselExample" className="carousel slide w-100">
  <div className="carousel-inner w-100 p-2 bg-warning h-100">


    <div className="carousel-item active bg-danger d-flex w-100 h-100">


<li>Todo</li>   
<li>Javascript</li>   
<li>Videojuegos</li>   
  
<li>Mixes</li>   


<li>Musica</li>    
  

<li>Culturismo</li>    

<li>Entrevista de periodista</li>    
</div>



<div className="carousel-item w-100 h-100 d-flex">

  
<li>En directo</li>    



<li>Sitio Web</li>   



<li>Telefono Moviles</li>    



        <li>Bitcoin</li>   
        






<li>Freestyle Rap</li>  



<li>Videos</li>    



<li>Baloncesto</li>  

</div>

</div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</>

    )
}

export default Carousel