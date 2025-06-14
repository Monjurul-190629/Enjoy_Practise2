import React from 'react';
import { useDualCounter } from '../../store/useDualCounter';


const About: React.FC = () => {

    const { counter1, counter2, increase1, increase2, decrease1, decrease2, getSum, reset1, reset2 } = useDualCounter();

    return (
        <div>
            <div className='flex justify-center py-20 gap-12'>
                <div className='font-semibold flex flex-col justify-center items-center py-5'>
                    <p className='pb-5 text-xl'>For Counter1</p>
                    <p className='text-2xl'>{counter1}</p>
                    <div className='flex gap-5'>
                        <button onClick={() => increase1()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-green-500 hover:text-white'>Increase</button>
                        <button onClick={() => decrease1()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-red-500 hover:text-white'>Decrease</button>
                        <button onClick={() => reset1()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-red-500 hover:text-white'>Reset</button>
                    </div>
                </div>
                <div className='font-semibold flex flex-col justify-center items-center py-5'>
                    <p className='pb-5 text-xl'>For Counter2</p>
                    <p className='text-2xl'>{counter2}</p>
                    <div className='flex gap-5'>
                        <button onClick={() => increase2()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-green-500 hover:text-white'>Increase</button>
                        <button onClick={() => decrease2()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-red-500 hover:text-white'>Decrease</button>
                        <button onClick={() => reset2()} className='border-2 border-gray-400 my-5 px-5 rounded-md py-2 hover:bg-red-500 hover:text-white'>Reset</button>
                    </div>
                </div>

            </div>
            <div className='font-semibold text-xl flex justify-center'>
                <p>Now the Total Sum : <span className='text-2xl'>{getSum()}</span></p>
            </div>
        </div>
    );
};

export default About;
