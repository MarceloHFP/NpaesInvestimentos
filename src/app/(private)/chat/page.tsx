'use client';

import { Menu, MoveLeft, Plus } from 'lucide-react';
import React, { useState } from 'react';

export default function ChatPage() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [searchValue, setSearchvalue] = useState<string>('');

    const chatItems = Array.from({ length: 30 }, (_, i) => `Item da Lista ${i + 1}`);

  return (
    <div className='h-screen w-screen flex'>
        <div className={` transition-all px-3 h-screen flex flex-col bg-slate-900 ${isMobile ? 'w-15' : 'w-100'}`}>
        <div className='w-full'>
            <div className={`h-20 w-full px-2 flex items-center ${isMobile ? 'justify-center' : 'justify-between'}`}>
                <h1 className={`font-bold text-2xl ${isMobile ? 'hidden' : 'block'}`}>Chat</h1>

                <button className='p-2 transition-all duration-200 rounded-4xl hover:bg-slate-800 cursor-pointer'>
                    <Menu size={25}/>
                </button>
            </div>

            <input 
            type='text'
            placeholder='Pesquisar'
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSearchvalue(e.target.value)}}
            className={` h-10 rounded-2xl bg-slate-700 border-0 ${isMobile ? 'w-0' : 'w-full px-2'} hover:cursor-pointer`}
            />
        </div>

        {/* ===== SEÇÃO ROLÁVEL (NOVA) ===== */}
        <div className='flex-1 overflow-y-auto mt-4 scrollbar-hide'>
            {/* Aqui você pode renderizar sua lista de conversas, contatos, etc. */}
            <ul className='space-y-2'>
                {chatItems.map((item, index) => (
                    <li key={index} className='w-full h-20 flex items-center px-4 bg-slate-800 rounded-lg text-white hover:bg-slate-600 cursor-pointer'>
                        <div className='p-8 bg-slate-500 rounded-2xl'>

                        </div>
                        <div className='h-full m-2 py-4'>
                            {item}
                            <p className='text-gray-500 text-sm'>Visto a 2 horas</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </div>              
    <div className='flex flex-col flex-1 h-screen bg-sky-500'> 
        <div className='w-full h-20 bg-slate-800 flex items-center p-4'>
            <div className='flex flex-1 h-full items-center'>
                <button className='p-2 rounded-2xl transition-all duration-200 hover:bg-slate-700 cursor-pointer'>
                    <MoveLeft size={25}/>
                </button>

                <div className='p-6 bg-slate-500 rounded-2xl m-2'></div>
                <h1 className='text-lg'>{chatItems[0]}</h1>
            </div>
            <button className='p-2 transition-all duration-200 rounded-4xl hover:bg-slate-700 cursor-pointer'>
                <Menu size={25}/>
            </button>
        </div>
        <div className='bg-slate-600 w-full flex flex-1 flex-col overflow-y-auto'>
            <div className='flex-1 w-full'>

            </div>
            <div className='w-full h-20 bg-transparent flex items-center justify-center'>
                <div className='w-49/50 h-15 flex items-center bg-slate-800 rounded-3xl'>
                    <button className='ml-4 p-2 rounded-3xl hover:bg-slate-700'>
                        <Plus size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}