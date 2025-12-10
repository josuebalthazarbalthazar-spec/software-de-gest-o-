import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import Products from './components/Products';
import AIAssistant from './components/AIAssistant';
import { Bell, User } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 font-sans">
        <Sidebar />
        
        {/* Main Content Wrapper */}
        <div className="flex-1 ml-64 flex flex-col">
          
          {/* Header */}
          <header className="h-16 bg-white shadow-sm flex items-center justify-end px-8 gap-6 sticky top-0 z-20">
            <button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-700">Administrador</p>
                <p className="text-xs text-slate-400">admin@nexus.com</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-200">
                <User size={20} />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-8 flex-1 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/products" element={<Products />} />
                <Route path="/ai-insights" element={<AIAssistant />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
