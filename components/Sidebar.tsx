import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Package, BrainCircuit, Settings, LogOut, Hexagon } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Clientes', path: '/clients', icon: <Users size={20} /> },
    { name: 'Produtos', path: '/products', icon: <Package size={20} /> },
    { name: 'IA Insights', path: '/ai-insights', icon: <BrainCircuit size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col fixed left-0 top-0 shadow-xl z-10">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <Hexagon className="text-indigo-500 fill-indigo-500" size={28} />
        <span className="text-xl font-bold tracking-tight">Nexus<span className="text-indigo-400">Manage</span></span>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 w-full rounded-lg transition-colors">
          <Settings size={20} />
          <span>Configurações</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 w-full rounded-lg transition-colors mt-1">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
