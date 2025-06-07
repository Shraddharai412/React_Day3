import React, { useEffect, useState } from 'react';

const ImageSliders = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=15')
      .then((res) => res.json())
      .then((data) => {
        const imageUrls = data.map((item) => item.download_url);
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <div style={styles.sliderContainer}>
        <h1 style={{justifyContent:'center', textAlign:'center',alignContent:'center',alignItems:'center',color:'purple'}}>IMAGE SLIDERS USING API Fetching</h1>
      <img
        src={images[current]}
        alt={`slide-${current}`}
        style={styles.image}
      />

      <button onClick={prevSlide} style={{ ...styles.button, left: '10px' }}>
        &#10094;
      </button>
      <button onClick={nextSlide} style={{ ...styles.button, right: '10px' }}>
        &#10095;
      </button>

      <div style={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...styles.dot,
              backgroundColor: current === index ? '#333' : '#bbb',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    
    height: '700px',
    margin: '40px auto',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease-in-out',
    borderRadius: '12px',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    padding: '10px 15px',
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'background-color 0.3s',
  },
  dots: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ImageSliders;
