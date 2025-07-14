"use client"

import FilterComponent from "@/app/components/userComponents/FilterComponent";
// Importe o ícone 'X' para o botão de fechar
import { CircleUserRound, FilterX, FolderCog, FunnelPlus, FunnelX, MessageSquare, Plus, Settings, SlidersHorizontal, User, Users, X } from "lucide-react";
import { useState } from "react";

const mockUsers = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@example.com', role: 'Admin', description: 'Líder de equipe com 5 anos de experiência em gerenciamento de projetos ágeis.' },
    { id: 2, name: 'Bruno Costa', email: 'bruno.costa@example.com', role: 'Developer', description: 'Desenvolvedor Full-Stack especializado em React e Node.js.' },
    { id: 3, name: 'Carla Dias', email: 'carla.dias@example.com', role: 'Developer', description: 'Focada em desenvolvimento front-end e apaixonada por UI/UX.' },
    { id: 4, name: 'Daniel Martins', email: 'daniel.martins@example.com', role: 'Designer', description: 'Designer de produto com foco em sistemas de design e experiência do usuário.' },
    { id: 5, name: 'Eduarda Farias', email: 'eduarda.farias@example.com', role: 'Product Manager', description: 'Gerente de Produto com background em análise de negócios e estratégia de mercado.' },
];


export default function Usuarios() {

    const [selectedUser, setSelectedUser] = useState(null);
    // 1. NOVO ESTADO PARA CONTROLAR O MODAL
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    return (
        <div className="w-full h-screen flex p-6 gap-6 bg-slate-900 text-white">
            <div className="
                h-full flex-1 flex flex-col gap-6 overflow-y-auto pr-2 
                scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800
            ">
                <div className="flex items-center gap-4">
                    <h1 className='font-bold text-3xl p-5 flex-1'>Lista de Usuarios</h1>

                    <button 
                        onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                        className={`p-4 rounded-sm bg-gray-500 hover:bg-gray-600 cursor-pointer transition-colors ${isFilterModalOpen ? 'bg-red-800 hover:bg-red-900' : 'bg-gray-500'}`}>
                        {isFilterModalOpen ? (<FunnelX size={24}/>) : (<FunnelPlus size={24}/>)}
                    </button>

                    {/* 2. ADICIONADO ONCLICK PARA ABRIR O MODAL */}
                    <button
                        onClick={() => setIsUserModalOpen(true)}
                        className="p-4 rounded-sm bg-blue-400 mr-5 hover:bg-blue-500 cursor-pointer transition-colors">
                        <Plus size={24}/>
                    </button>
                </div>

                <div className="h-auto">
                    <FilterComponent isFilterModalOpen={isFilterModalOpen}/>
                </div>
                

                {mockUsers.map((user) => (
                    <div
                    key={user.id}
                        // Ao clicar, atualiza o estado com o usuário selecionado
                    onClick={() => setSelectedUser(user)}
                    className={`flex bg-slate-800 h-28 flex-shrink-0 items-center gap-3 rounded-2xl p-4 transition-all duration-200 border-2 ${selectedUser && selectedUser.id === user.id ? 'border-sky-500' : 'border-transparent hover:border-slate-700'} hover:bg-slate-700 cursor-pointer`}
                    >
                        <div className="bg-slate-500 rounded-2xl w-20 h-20 ml-2"></div>
                        <div className="flex-1">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-slate-400">{user.email}</p>
                        </div>
                        <span className="text-xs font-medium bg-slate-600 px-2 py-1 rounded-full whitespace-nowrap">
                            {user.role}
                        </span>
                    </div>
                ))}
            </div>

            {selectedUser && (
                <div className="h-full flex flex-col bg-slate-800 min-w-50 max-w-90 rounded-2xl relative transition-all duration-200">
                    <button
                        onClick={() => setSelectedUser(null)}
                        className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-700 transition-colors"
                    >
                        <X size={25} />
                    </button>
                    <div className="w-full p-4 pt-10 flex flex-col items-center ">
                        <CircleUserRound size={90} className="text-sky-400 mb-4"/>
                        <p className="font-semibold">{selectedUser.name}</p>
                        <p className="text-sm text-slate-400">{selectedUser.email}</p>
                    </div>

                    <hr className="border-slate-700 my-6" />

                    <div className="flex flex-col mx-4">
                        <h3 className="font-semibold mb-2">Sobre</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {selectedUser.description}
                        </p>
                    </div>

                    <hr className="border-slate-700 my-6" />

                    <div className="mt-auto flex m-6 flex-col gap-3">
                        <button className="w-full p-4 flex items-center justify-center gap-2 rounded-xl bg-slate-600 hover:bg-slate-700 transition-colors cursor-pointer">
                            <MessageSquare size={20} />
                            <span>Enviar Mensagem</span>
                        </button>
                        <button className="w-full p-4 flex items-center justify-center gap-2 rounded-xl bg-slate-500 hover:bg-slate-600 transition-colors cursor-pointer">
                            <Settings size={20} />
                            <span>Configurações</span>
                        </button>
                    </div>
                </div>
            )}

            {/* 3. ESTRUTURA DO MODAL DE ADICIONAR USUÁRIO */}
            {isUserModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-slate-800 rounded-lg shadow-xl p-8 w-full max-w-md relative text-white">
                        {/* Botão para fechar o modal */}
                        <button
                            onClick={() => setIsUserModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6">Adicionar Novo Usuário</h2>

                        {/* Formulário de exemplo */}
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                                <input type="text" id="name" placeholder="Ex: João da Silva" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input type="email" id="email" placeholder="Ex: joao.silva@example.com" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">Função</label>
                                <input type="text" id="role" placeholder="Ex: Developer" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none" />
                            </div>

                            {/* Botões de ação do formulário */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsUserModalOpen(false)}
                                    className="px-5 py-2 rounded-md bg-slate-600 hover:bg-slate-700 transition-colors font-semibold cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors font-semibold cursor-pointer"
                                >
                                    Salvar Usuário
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}                                              