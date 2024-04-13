import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Landscape from '../images/landscape.png';
import Sleep from '../images/sleep1.png';
import Walking from '../images/walking_3d.png';


const Game2 = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
    }

    return (
        <div className='bg-gradient-to-br h-screen from-yellow-400 to-white-500'>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center py-[20px]">
                Choose one of the following
            </h1>
            <div className='flex justify-center items-center bg-yellow-50 h-screen'>
                <div className='main_box grid grid-cols-2 grid-rows-2 gap-4'>
                    <div
                        className={`bg-yellow-200 h-[350px] w-[350px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                        onClick={() => { handleClick(); navigate('/activity') }}
                    >
                        <img src={Sleep} alt="Activities" className="w-full h-[180px] object-contain mb-2" />
                        <span className="text-center">Sleeping</span>
                    </div>
                    <div
                        className={`bg-blue-200 h-[350px] w-[350px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                        onClick={() => { handleClick(); navigate('/activity') }}
                    >
                        <img src={Landscape} alt="Conversation" className="w-full h-24 object-contain mb-2" />
                        <span className="text-center">Reading</span>
                    </div>
                    <div
                        className={`bg-green-200 h-[350px] w-[350px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                        onClick={() => { handleClick(); navigate('/box3') }}
                    >
                        <img src={Walking} alt="Feelings" className="w-full h-24 object-contain mb-2" />
                        <span className="text-center">Walking</span>
                    </div>
                    <div
                        className={`bg-pink-200 h-[350px] w-[350px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                        onClick={() => { handleClick(); navigate('/box4') }}
                    >
                        <img src={Landscape} alt="Food" className="w-full h-24 object-contain mb-2" />
                        <span className="text-center">Swiming</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game2;
