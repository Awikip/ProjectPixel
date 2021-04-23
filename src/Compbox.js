import React, {useState, useEffect} from 'react';
import './Compbox.css';

export default function Compselect({images=[]}){
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
    <h4>Select your companion</h4>
    <div style={currentSlideStyle} className="comp-slide-holder" />
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
