import React, { useState, useEffect } from 'react';
import activityImage from '../images/Sleep.png';
import voice1 from '../VOICES/Activites/Sleeping/are_u_tired.mp3';
import voice2 from '../VOICES/Activites/Sleeping/i_want_to_sleep.mp3';
import voice3 from '../VOICES/Activites/Sleeping/im_tired.mp3';
import voice4 from '../VOICES/Activites/Sleeping/sleeping.mp3';
import voice5 from '../VOICES/Activites/Sleeping/when_i_am_going_to_sleep.mp3';
import Sleep from '../images/sleep1.png';

const Game2 = () => {
    const [voices] = useState([
        { name: 'Are you tired?', audio: new Audio(voice1) },
        { name: 'I want to sleep', audio: new Audio(voice2) },
        { name: 'I\'m tired', audio: new Audio(voice3) },
        { name: 'Sleeping', audio: new Audio(voice4) },
        { name: 'When I am going to sleep', audio: new Audio(voice5) }
    ]);

    useEffect(() => {
        // Cleanup function to stop audio when component unmounts
        return () => {
            voices.forEach(voice => {
                voice.audio.pause();
                voice.audio.currentTime = 0;
            });
        };
    }, []);

    const playVoice = (index) => {
        const voice = voices[index];
        voice.audio.play();
    };

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-yellow-50'>
            <div className='main_box flex flex-col justify-center items-center'>
                <div
                    className='bg-yellow-200 w-64 h-[400px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer p-4'
                >
                    <img src={Sleep} alt="Activity" className="w-full h-32 object-contain mb-2" />
                    {voices.map((voice, index) => (
                        <button key={index} className="text-center my-4 focus:outline-none text-lg font-semibold" onClick={() => playVoice(index)}>
                            {voice.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Game2;
