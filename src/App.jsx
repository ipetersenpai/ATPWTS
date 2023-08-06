import React, { useState, useRef } from "react";
import letter from "./assets/letter.gif";
import Typed from "react-typed";
import animedance from "./assets/anime-dance.gif";
import musicbg from "./assets/music-bg.mp3";
import video from "./assets/videofile.mp4";

function App() {
  const [navigation, setNavigation] = useState("page1");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoPlayer = videoRef.current;
    if (videoPlayer.paused || videoPlayer.ended) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const messages = [
    "My Dearest Girlfriend",
    "Joephine N. Calapiz",
    "On this enchanting day",
    " August 7",
    "a wondrous event took place—the universe gifted your parents with a beautiful soul",
    "and the world became brighter with your presence.",
    "As the sun rose, painting the skies with hues of pink and gold",
    "your arrival brought infinite joy and love to your parents' hearts.",
    "Your birth marked a moment of sheer bliss, forever etched in their souls.",
    "Today....",
    "as you mark your 22nd journey around the sun",
    "I want to take a moment to celebrate not just the passing of another year but the profound impact you've had on our lives.",
    "Every day since has been a symphony of love",
    "and we are endlessly grateful for the blessing of knowing you.",
    "So, on this special day",
    "as you celebrate your birthday, know that our hearts are filled with an abundance of love for you.",
    "We wish for you a lifetime of happiness",
    "love",
    "and success",
    "and we promise to be by your side through every joy and challenge that life may bring.",
    "Happy Birthday, my love.",
    "May this day and every day that follows be as extraordinary as you are",
    "and may our love continue to bloom and flourish like the most exquisite of roses.",
    "You are and will always be the source of my greatest joy and the beating of my hearts.",
    "With all my love and adoration",
    "Happy Birthday once again! 💕🎂🎉",
  ];

  const handleTypingComplete = () => {
    if (currentMessageIndex < messages.length - 1) {
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }, 700); // 5 seconds delay (5000 milliseconds)
    }
  };

  return (
    <div className="flex justify-center h-[100vh] w-full items-center flex-col">
      <audio id="bg-music" hidden loop controlsList="nodownload">
        <source src={musicbg} type="audio/mpeg" />
      </audio>
      {navigation === "page1" ? (
        <>
          <img
            src={letter}
            alt="letter"
            className="w-[350px] h-[350px] ml-[-4rem] cursor-pointer"
            onClick={() => {
              setNavigation("page2"),
                document.getElementById("bg-music").play();
            }}
          />

          <h1 className="text-[24px] animate-bounce">Click the Envelope</h1>
        </>
      ) : navigation === "page2" ? (
        <>
          <Typed
            className="text-[24px] w-[70%] text-center"
            key={currentMessageIndex}
            strings={[messages[currentMessageIndex]]}
            typeSpeed={40}
            onComplete={handleTypingComplete}
          />
          {currentMessageIndex === 25 && (
            <h1
              className="mt-20 animate-pulse cursor-pointer hover:underline 
            hover:text-blue-600"
              onClick={() => {
                setNavigation("page3"),
                  document.getElementById("bg-music").pause();
              }}
            >
              Click to proceed
            </h1>
          )}
        </>
      ) : navigation === "page3" ? (
        <>
          <div className="flex bg-red h-[500px] justify-center items-center w-[400px] flex-row">
            <img
              src={animedance}
              alt="animedance"
              className="md:flex w-[350px] h-[350px] mr-[5rem] bg-pink-400 rounded-[60px] hidden"
            />
            <video
              ref={videoRef}
              src={video}
              type="video/mp4"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
            />
            {!isPlaying && (
              <div className="play-button" onClick={handlePlayPause} />
            )}
            <img
              src={animedance}
              alt="animedance"
              className="md:flex w-[350px] h-[350px] ml-[5rem] bg-blue-400 rounded-[60px] hidden"
            />
          </div>
        </>
      ) : undefined}
    </div>
  );
}

export default App;
