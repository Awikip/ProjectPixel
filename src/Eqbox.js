import React, {useState, useEffect} from 'react';
import './Eqbox.css';

export default function Eqselect({images=[]}){
  const [currentImage, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(()=>{
    setImage(images);
    setCurrentSlideStyle({
      backgroundImage: "url('"+images[currentSlide]+"')"
    });
  }, [images, currentSlide]);

  function previous(){
    if (currentSlide > 0){
      setCurrentSlide(currentSlide-1);
    }
    else {
      setCurrentSlide(images.length-1);
    }
  }

  function next(){
    if (currentSlide === images.length-1){
      setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide+1);
    }
  }

  return (
  <div>
    <h4>Select your equipment</h4>
    <div style={currentSlideStyle} className="eq-slide-holder" />
    <div className="slideshow-controller">
      <button onClick={previous}>
        &lt;
      </button>
      <button onClick={next}>
        &gt;
      </button>
    </div>
  </div>
  )
}
