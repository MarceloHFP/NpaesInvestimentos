"use client"

// Importando os ícones necessários
import { CircleUserRound, Settings, MessageSquare, X } from "lucide-react";
import { useState } from "react";

// --- Dados Fictícios (Mock Data) ---
const mockUsers = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@example.com', role: 'Admin', description: 'Líder de equipe com 5 anos de experiência em gerenciamento de projetos ágeis.' },
    { id: 2, name: 'Bruno Costa', email: 'bruno.costa@example.com', role: 'Developer', description: 'Desenvolvedor Full-Stack especializado em React e Node.js.' },
    { id: 3, name: 'Carla Dias', email: 'carla.dias@example.com', role: 'Developer', description: 'Focada em desenvolvimento front-end e apaixonada por UI/UX.' },
    { id: 4, name: 'Daniel Martins', email: 'daniel.martins@example.com', role: 'Designer', description: 'Designer de produto com foco em sistemas de design e experiência do usuário.' },
    { id: 5, name: 'Eduarda Farias', email: 'eduarda.farias@example.com', role: 'Product Manager', description: 'Gerente de Produto com background em análise de negócios e estratégia de mercado.' },
];

export default function Usuarios() {
    const [selectedUser, setSelectedUser] = useState(mockUsers[0]); // Inicia com o primeiro usuário selecionado

    return (
        <div className="w-full h-screen flex p-6 gap-6 bg-slate-900 text-slate-200">
            {/* Coluna da Lista de Usuários */}
            <div className="
                h-full flex-1 flex flex-col gap-4 overflow-y-auto pr-2
                scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900
            ">
                {mockUsers.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        // Muda o estilo se o card estiver selecionado
                        className={`
                            flex bg-slate-800 h-28 flex-shrink-0 items-center gap-4 rounded-xl p-4 cursor-pointer transition-all duration-200 border-2
                            ${selectedUser && selectedUser.id === user.id ? 'border-sky-500' : 'border-transparent hover:border-slate-700'}
                        `}
                    >
                        <div className="bg-slate-500 rounded-lg w-16 h-16"></div>
                        <div className="flex-1">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-slate-400">{user.email}</p>
                        </div>
                        <span className="text-xs font-medium bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap">
                            {user.role}
                        </span>
                    </div>
                ))}
            </div>

            {/* Coluna do Perfil do Usuário Selecionado */}
            {selectedUser && (
                <div className="h-full flex flex-col bg-slate-800 w-96 rounded-2xl p-6 relative">
                    {/* Botão de Fechar no canto superior esquerdo */}
                    <button
                        onClick={() => setSelectedUser(null)}
                        className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-700 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Informações do Usuário */}
                    <div className="w-full pt-10 flex flex-col items-center text-center">
                        <CircleUserRound size={80} className="text-sky-400" />
                        <p className="text-xl font-bold mt-4">{selectedUser.name}</p>
                        <p className="text-sm text-slate-400">{selectedUser.email}</p>
                    </div>

                    {/* Linha Divisória */}
                    <hr className="border-slate-700 my-6" />

                    {/* Descrição */}
                    <div>
                        <h3 className="font-semibold mb-2">Sobre</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {selectedUser.description}
                        </p>
                    </div>

                    {/* Linha Divisória */}
                    <hr className="border-slate-700 my-6" />

                    {/* Botões de Ação */}
                    <div className="mt-auto flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors">
                            <MessageSquare size={16} />
                            <span>Enviar Mensagem</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                            <Settings size={16} />
                            <span>Configurações</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}