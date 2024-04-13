import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Landscape from '../images/landscape.png';
import Bg from '../images/bg.jpg';
import Navbar from '../navbar/navbar';
import Feel from '../images/feel.png';
import Convo from '../images/convo.png';
import Caryons from '../images/caryons.png';
import burger from '../images/burger.png';
const Game1 = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
    }

    return (
        <div className=' bg-gradient-to-br h-screen from-yellow-400 to-white-500'>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center py-[20px]">
                Choose one of the following
            </h1>
            <div className='full-screen flex justify-center items-center top-0'>
                <div className='main_box grid grid-cols-2 grid-rows-2 gap-4'>
                    <div
                        className={`bg-white bg-opacity-50 h-[250px] w-[250px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110`}
                        onClick={() => { handleClick(); navigate('/game_2') }}
                    >
                        <img src={Caryons} alt="Activities" className="w-full h-[90px] object-contain mb-2" />
                        <span className="text-center">Activities</span>
                    </div>
                    <div
                        className={`bg-blue-200 h-[250px] w-[250px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110`}
                        onClick={() => { handleClick(); navigate('/box2') }}
                    >
                        <img src={Convo} alt="Conversation" className="w-full h-[100px] object-contain mb-2" />
                        <span className="text-center">Conversation</span>
                    </div>
                    <div
                        className={`bg-green-200 h-[250px] w-[250px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110`}
                        onClick={() => { handleClick(); navigate('/box3') }}
                    >
                        <img src={Feel} alt="Feelings" className="w-full h-[80px] object-contain mb-2" />
                        <span className="text-center">Feelings</span>
                    </div>
                    <div
                        className={`bg-pink-200 h-[250px] w-[250px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110`}
                        onClick={() => { handleClick(); navigate('/box4') }}
                    >
                        <img src={burger} alt="Food" className="w-full h-[90px] object-contain mb-2" />
                        <span className="text-center">Food</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game1;
