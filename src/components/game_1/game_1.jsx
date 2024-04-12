import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conversation from '../images/conversation.jpeg';
import feelings from '../images/Feeling.png';
import Food from '../images/Apple.jpeg';
import Activities from '../images/Activity.jpeg';

const Game1 = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
    }

    return (
        <div className='flex justify-center items-center w-[500px] bg-yellow-50 h-[500px]'>
            <div className='main_box grid grid-cols-2 grid-rows-2 gap-4'>
                <div
                    className={`bg-yellow-200 h-[200px] w-[200px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                    onClick={() => {handleClick(); navigate('/game_2')}}
                >
                    <img src={Activities} alt="Activities" className="w-full h-24 object-contain mb-2" />
                    <span className="text-center">Activities</span>
                </div>
                <div
                    className={`bg-blue-200 h-[200px] w-[200px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                    onClick={() => {handleClick(); navigate('/box2')}}
                >
                    <img src={conversation} alt="Conversation" className="w-full h-24 object-contain mb-2" />
                    <span className="text-center">Conversation</span>
                </div>
                <div
                    className={`bg-green-200 h-[200px] w-[200px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                    onClick={() => {handleClick(); navigate('/box3')}}
                >
                    <img src={feelings} alt="Feelings" className="w-full h-24 object-contain mb-2" />
                    <span className="text-center">Feelings</span>
                </div>
                <div
                    className={`bg-pink-200 h-[200px] w-[200px] rounded-md border border-gray-400 flex flex-col justify-center items-center cursor-pointer transform ${clicked ? 'scale-105' : ''}`}
                    onClick={() => {handleClick(); navigate('/box4')}}
                >
                    <img src={Food} alt="Food" className="w-full h-24 object-contain mb-2" />
                    <span className="text-center">Food</span>
                </div>
            </div>
        </div>
    );
}

export default Game1;
