import { useState } from "react";

const FilterComponent = ({isFilterModalOpen}) => {

    const [filterType, setFilterType] = useState('role');
    const [filterValue, setFilterValue] = useState('');


    const ontypeChange = (newType: string) => {
        setFilterType(newType);
        setFilterValue('');
    };

    const renderInputField = () => {
        switch(filterType) {
            case 'role':
                return (
                    <select
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="w-full bg-slate-800 rounded-md px-3 py-2"
                    >
                        <option value="">Selecione um cargo</option>
                        <option value="Developer">Desenvolvedor</option>
                        <option value="Designer">Designer</option>
                        <option value="Product Owner">Gerente de produto</option>
                    </select>
                )
            case 'name':
                return (
                    <input
                        type="text"
                        placeholder="Digite o nome do usuario"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="w-full bg-slate-800 rounded-md px-3 py-2"
                    />
                )
            case 'email':
                return (
                    <input
                        type="email"
                        placeholder="Digite o email do usuario"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="w-full bg-slate-800 rounded-md px-3 py-2"
                    />
                )
            default:
                return null;
        }
    };

    return (
        <div className={`flex flex-col bg-gray-500 ${isFilterModalOpen ? 'h-60' : 'h-1 w-full overflow-hidden'} transition-all duration-200 rounded-2xl`}>
            <h1 className="m-5 font-bold text-xl">Filtrar Usuários</h1>

            <div className="flex gap-2 mx-5">
                <button 
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${filterType === 'role' ? 'bg-lime-600 text-white' : 'bg-blue-500 hover:bg-blue-600'}`}
                    onClick={() => ontypeChange('role')}
                >
                    Cargo
                </button>

                <button 
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${filterType === 'name' ? 'bg-lime-600 text-white' : 'bg-blue-500 hover:bg-blue-600'}`}
                    onClick={() => ontypeChange('name')}
                >
                    Nome
                </button>

                <button 
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${filterType === 'email' ? 'bg-lime-600 text-white' : 'bg-blue-500 hover:bg-blue-600'}`}
                    onClick={() => ontypeChange('email')}
                >
                    Email
                </button>
            </div>

            <form className="flex flex-col gap-4 mx-5 mt-4">
                {renderInputField()}

                <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer
                    "
                >
                    Filtrar
                </button>
            </form>
        </div>
    )
}

export default FilterComponent;