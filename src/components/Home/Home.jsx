import React from 'react';
import ActionAreaCard from './Card';
import ButtonAppBar from './AppBar';
import videoSrc from './assets/video.mp4'; // Import the video file

const Home = () => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh', 
      overflow: 'hidden' 
    }} className="background-video">
      <ButtonAppBar />
      <ActionAreaCard />
      <video autoPlay loop muted className="video-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        opacity: 0.3, // Set the opacity to your desired level
      }}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
