import React, { useState } from 'react'
import "./Slider.scss"
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
     const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const prevSlide = ()=>{
      setCurrentSlide(currentSlide=== 0 ? 2 : (prev)=>prev - 1)
  }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide=== 2 ? 0 : (prev)=>prev + 1)
        
    }
  return (
   <>
   <div className="slider">
    <div className="container" style={{transform:`translatex(-${currentSlide * 100}vw)`}}>
        
        {data.map((img)=>{
            return(
                <img src={img} alt=''/>
            )
        })}
    </div>
    <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <NavigateBeforeOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <NavigateNextOutlinedIcon/>
        </div>
    </div>
  

   </div>
   </>
  )
}
