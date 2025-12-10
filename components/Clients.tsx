import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Mail, Phone, Building } from 'lucide-react';
import { MOCK_CLIENTS } from '../constants';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = MOCK_CLIENTS.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Clientes</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-indigo-200">
          + Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nome ou empresa..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
            <Filter size={16} />
            Filtros
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                <th className="p-4">Cliente</th>
                <th className="p-4">Contato</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total Gasto</th>
                <th className="p-4">Último Pedido</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                        {client.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{client.name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <Building size={10} />
                          {client.company}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm text-slate-600 flex flex-col gap-1">
                      <span className="flex items-center gap-1"><Mail size={12} className="text-slate-400"/> {client.email}</span>
                      <span className="flex items-center gap-1"><Phone size={12} className="text-slate-400"/> (11) 99999-9999</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${client.status === 'Ativo' ? 'bg-emerald-100 text-emerald-800' : 
                        client.status === 'Inativo' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium">
                    R$ {client.totalSpent.toLocaleString('pt-BR')}
                  </td>
                  <td className="p-4 text-slate-500 text-sm">
                    {client.lastOrder}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredClients.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            Nenhum cliente encontrado para "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
