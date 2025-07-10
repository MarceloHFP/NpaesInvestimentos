"use client"

// Importe o ícone 'X' para o botão de fechar
import { CircleUserRound, FolderCog, MessageSquare, Settings, User, Users, X } from "lucide-react";
import { useState } from "react";

// --- Dados Fictícios (Mock Data) ---
// Em uma aplicação real, isso viria de uma API.
const mockUsers = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@example.com', role: 'Admin', description: 'Líder de equipe com 5 anos de experiência em gerenciamento de projetos ágeis.' },
    { id: 2, name: 'Bruno Costa', email: 'bruno.costa@example.com', role: 'Developer', description: 'Desenvolvedor Full-Stack especializado em React e Node.js.' },
    { id: 3, name: 'Carla Dias', email: 'carla.dias@example.com', role: 'Developer', description: 'Focada em desenvolvimento front-end e apaixonada por UI/UX.' },
    { id: 4, name: 'Daniel Martins', email: 'daniel.martins@example.com', role: 'Designer', description: 'Designer de produto com foco em sistemas de design e experiência do usuário.' },
    { id: 5, name: 'Eduarda Farias', email: 'eduarda.farias@example.com', role: 'Product Manager', description: 'Gerente de Produto com background em análise de negócios e estratégia de mercado.' },
];


export default function Usuarios() {

    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="w-full h-screen flex p-6 gap-6 bg-slate-900 text-white">
            <div className="
                h-full flex-1 flex flex-col gap-6 overflow-y-auto pr-2 
                scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800
            ">
                <h1 className="font-bold text-3xl p-5">Lista de Usuarios</h1>
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
                <div className="h-full flex flex-col bg-slate-800 min-w-50 max-w-90 rounded-2xl relative">
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
                        <button className="w-full p-4 flex items-center justify-center gap-2 rounded-xl bg-slate-600">
                            <MessageSquare size={20} />
                            <span>Enviar Mensagem</span>
                        </button>
                        <button className="w-full p-4 flex items-center justify-center gap-2 rounded-xl bg-slate-500">
                            <Settings size={20} />
                            <span>Configurações</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
