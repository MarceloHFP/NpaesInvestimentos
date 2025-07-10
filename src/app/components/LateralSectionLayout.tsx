"use client"

import { ChartNoAxesCombined, ChevronLeft, CircleUserRound, FolderCog, House, Users } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react"; // Importe o React para usar React.ReactNode

// Modifique a função para aceitar 'children' como uma prop
export default function LateralSectionLayout({ children }: { children: React.ReactNode }) {
    
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(true); // Deixei 'true' como padrão para ver o estado expandido

    return (
        <div className="flex text-white">
            <section className={`flex flex-col h-screen bg-slate-800 transition-all
                duration-300 ${isExpanded ? 'w-80' : 'w-24'}`}>
                <div className={`h-1/9 w-full flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
                    <h1 className={`overflow-hidden whitespace-nowrap transition-all text-xl ${isExpanded ? 'w-auto ml-8 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                        Npaes Investimentos
                    </h1>
                    <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 ml-4 rounded-full hover:bg-gray-700 mr-4">
                        <ChevronLeft className={`transition-transform duration-300 ${!isExpanded && 'rotate-180'}`} />
                    </button>
                </div>
                <div className="mt-4 px-4 grid grid-cols-1 gap-2">
                    <a href="/usuarios" className={`flex items-center gap-3 p-4 rounded-md transition-colors duration-200 hover:bg-gray-600 ${pathname === "/usuarios" 
                        ? 'bg-slate-600 text-white'
                        : 'text-gray-400 hover:bg-slate-700'
                    }`}>
                        <Users size={30} className="flex-shrink-0"/>
                        <h2 className={`whitespace-nowrap transition-all duration-200 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'}`}>Usuarios</h2>
                    </a>
                    <a href="/vendas" className={`flex items-center gap-3 p-4 rounded-md transition-colors duration-200 hover:bg-gray-600 ${pathname === "/vendas" 
                        ? 'bg-slate-600 text-white' // Estilo para o link ATIVO
                        : 'text-gray-400 hover:bg-slate-700' // Estilo para os links INATIVOS
                    }`}>
                        <ChartNoAxesCombined size={30} className="flex-shrink-0"/>
                        <h2 className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'}`}>Vendas</h2>
                    </a>
                    
                    <a href="/imoveis" className={`flex items-center gap-3 p-4 rounded-md transition-colors duration-200 hover:bg-gray-600 ${pathname === "/imoveis" 
                        ? 'bg-slate-600 text-white' // Estilo para o link ATIVO
                        : 'text-gray-400 hover:bg-slate-700' // Estilo para os links INATIVOS
                    }`}>
                        <House size={30} className="flex-shrink-0"/>
                        <h2 className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'}`}>Imoveis</h2>
                    </a>
                    <a href="/administracao" className={`flex items-center gap-3 p-4 rounded-md transition-colors duration-200 hover:bg-gray-600 ${pathname === "/administracao" 
                        ? 'bg-slate-600 text-white' // Estilo para o link ATIVO
                        : 'text-gray-400 hover:bg-slate-700' // Estilo para os links INATIVOS
                    }`}>
                        <FolderCog size={30} className="flex-shrink-0"/>
                        <h2 className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'}`}>Administração</h2>
                    </a>
                </div>
                <div className="flex w-full mt-auto mb-4 justify-center">
                    <a className="flex gap-1 items-center hover:text-gray-400 cursor-pointer">
                        <CircleUserRound size={30} className="flex-shrink-0"/>
                        <h2 className={`whitespace-nowrap transition-all duration-200 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'}`}>Conta</h2>
                    </a>
                </div>
            </section>
            
            {/* AQUI É A MÁGICA: O conteúdo da página será renderizado aqui */}
            <main className="w-full bg-slate-900">
                {children}
            </main>
        </div>
    )
}