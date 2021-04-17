import React, {useState, useEffect} from 'react';
import './Charbox.css';

export default function Charselect({images=[]}){
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
    <div style={currentSlideStyle} className="slide-holder" />
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
