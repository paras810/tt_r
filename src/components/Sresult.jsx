import React from 'react'
import "../App.css"

const Sresult = (props) => {
    const imgUrl = `https://source.unsplash.com/485x500?${props.Simg}`;
  return (
    <>
    <div className='img_container'>
        <img src={imgUrl} alt="notFoundImages" />
    </div>
    </>
  )
}

export default Sresult