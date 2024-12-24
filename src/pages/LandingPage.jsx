import { useEffect, useState } from "react";
import image1 from "../assets/Home/image1.jpeg"; 
import image2 from "../assets/Home/image2.jpg"; 
import image3 from "../assets/Home/image3.jpeg"; 


// import image1 from "../assets/desc1.jpg"
// Replace with your actual image paths
// import image2 from "../assets/main4.webp";
import Header from "./Header";
import Footer from "./Footer";
import Landingpage2 from "./LandingPage2";

const LandingPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [image1, image2, image3]; // Array of images

  // Function to show the next slide
  const showNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to show the previous slide
  const showPrevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-play slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(showNextSlide, 5000); // 5000ms = 5s
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [showNextSlide]);

  return (
    <>
    <Header/>
      <div>
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, index) => (
              <div
                className={`slide ${index === slideIndex ? "active" : ""}`}
                key={index}
              >
                <img className="imgslider" src={slide} alt={`Slide ${index + 1}`} />
                <div className="text">
                  {/* <h1>Lorem ipsum dolor sit<br/> amet consectetur</h1>
                <p className="sub-title">

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, 
                  </p>
                  <p className="sub-title ">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fuga nisi vel accusantium voluptate hic iusto vitae esse maxime nesciunt, eveniet repellat, at error perferendis tempora repudiandae omnis nobis! Illo!
                  </p> */}
<div className="registration-section">
  <div
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      borderRadius: "10px",
      color: "#fff",
      maxWidth: "90%",
      margin: "0 auto",
      textAlign: "center",
      height: "100vh", // Set height to cover full viewport
      display: "flex", // Flexbox for centering content
      flexDirection: "column",
      justifyContent: "center", // Vertically center content
      alignItems: "center", // Horizontally center content
    }}
  >
    <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
      Registration
    </h1>
    <p
      className="sub-title"
      style={{
        fontSize: "1rem",
        lineHeight: "1.5",
        margin: "0",
      }}
    >
      Please enter your details to register for the conference. Please note
      that registration is mandatory for approval of the submitted abstract
      and also for participation in the conference. Early bird registration
      closes on 21st September, 2024.
    </p>
  </div>
</div>
                </div>
              </div>
            ))}
          </div>

          {/* Next/Prev controls */}
          <button className="prev" onClick={showPrevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={showNextSlide}>
            &#10095;
          </button>
        </div>
      <Landingpage2/>

      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
