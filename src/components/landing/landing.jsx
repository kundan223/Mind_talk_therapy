import React, { useState } from 'react';
import audioFile from '../audio/hello.mp3'; // Make sure to replace 'audio.mp3' with your actual audio file path

const Homepage = () => {
  const [audio] = useState(new Audio(audioFile));

  const playAudio = () => {
    audio.play();
  };

  return (
    <div className="flex justify-center items-center bg-yellow-50 h-72 w-72">
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-60 h-60">
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 1 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 2 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 3 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 4 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 5 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 6 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 7 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 8 */}
        <div className="bg-gray-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          onClick={playAudio}></div> {/* Image 9 */}
      </div>
    </div>
  );
};

export default Homepage;
