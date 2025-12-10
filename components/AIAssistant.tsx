import React, { useState } from 'react';
import { Sparkles, BarChart2, TrendingUp, Scissors, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateBusinessAnalysis } from '../services/geminiService';
import { SALES_DATA, MOCK_CLIENTS } from '../constants';
import { AnalysisType } from '../types';

const AIAssistant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisType | null>(null);

  const handleAnalysis = async (type: AnalysisType) => {
    setLoading(true);
    setActiveAnalysis(type);
    setResult(null);

    try {
      const response = await generateBusinessAnalysis(type, SALES_DATA, MOCK_CLIENTS);
      setResult(response);
    } catch (error) {
      setResult("Ocorreu um erro ao processar sua solicitação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 h-[calc(100vh-140px)] flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="text-indigo-600" />
          Consultor Inteligente Nexus
        </h1>
        <p className="text-slate-500">
          Utilize a Inteligência Artificial Gemini para analisar os dados da sua empresa e obter insights estratégicos em tempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleAnalysis(AnalysisType.SWOT)}
          disabled={loading}
          className={`p-6 rounded-xl border transition-all duration-200 text-left relative overflow-hidden group
            ${activeAnalysis === AnalysisType.SWOT 
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg' 
              : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${activeAnalysis === AnalysisType.SWOT ? 'bg-indigo-500' : 'bg-indigo-50'}`}>
              <BarChart2 size={24} className={activeAnalysis === AnalysisType.SWOT ? 'text-white' : 'text-indigo-600'} />
            </div>
            <h3 className={`font-bold ${activeAnalysis === AnalysisType.SWOT ? 'text-white' : 'text-slate-800'}`}>Análise SWOT</h3>
          </div>
          <p className={`text-sm ${activeAnalysis === AnalysisType.SWOT ? 'text-indigo-100' : 'text-slate-500'}`}>
            Identifique forças, fraquezas, oportunidades e ameaças baseado nos seus dados.
          </p>
        </button>

        <button
          onClick={() => handleAnalysis(AnalysisType.SALES_FORECAST)}
          disabled={loading}
          className={`p-6 rounded-xl border transition-all duration-200 text-left relative overflow-hidden group
            ${activeAnalysis === AnalysisType.SALES_FORECAST 
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg' 
              : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md'}`}
        >
          <div className="flex items-center gap-3 mb-2">
             <div className={`p-2 rounded-lg ${activeAnalysis === AnalysisType.SALES_FORECAST ? 'bg-emerald-500' : 'bg-emerald-50'}`}>
              <TrendingUp size={24} className={activeAnalysis === AnalysisType.SALES_FORECAST ? 'text-white' : 'text-emerald-600'} />
            </div>
            <h3 className={`font-bold ${activeAnalysis === AnalysisType.SALES_FORECAST ? 'text-white' : 'text-slate-800'}`}>Previsão de Vendas</h3>
          </div>
          <p className={`text-sm ${activeAnalysis === AnalysisType.SALES_FORECAST ? 'text-emerald-100' : 'text-slate-500'}`}>
            Projete o crescimento futuro com base no histórico financeiro dos últimos meses.
          </p>
        </button>

        <button
          onClick={() => handleAnalysis(AnalysisType.COST_OPTIMIZATION)}
          disabled={loading}
          className={`p-6 rounded-xl border transition-all duration-200 text-left relative overflow-hidden group
            ${activeAnalysis === AnalysisType.COST_OPTIMIZATION 
              ? 'bg-rose-600 text-white border-rose-600 shadow-lg' 
              : 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-md'}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${activeAnalysis === AnalysisType.COST_OPTIMIZATION ? 'bg-rose-500' : 'bg-rose-50'}`}>
              <Scissors size={24} className={activeAnalysis === AnalysisType.COST_OPTIMIZATION ? 'text-white' : 'text-rose-600'} />
            </div>
            <h3 className={`font-bold ${activeAnalysis === AnalysisType.COST_OPTIMIZATION ? 'text-white' : 'text-slate-800'}`}>Otimização de Custos</h3>
          </div>
          <p className={`text-sm ${activeAnalysis === AnalysisType.COST_OPTIMIZATION ? 'text-rose-100' : 'text-slate-500'}`}>
            Descubra onde cortar gastos desnecessários para maximizar o lucro operacional.
          </p>
        </button>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-8 overflow-y-auto min-h-[400px]">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
            <Loader2 size={48} className="animate-spin text-indigo-500" />
            <p className="animate-pulse">A Inteligência Artificial está analisando seus dados...</p>
          </div>
        ) : result ? (
          <div className="prose prose-indigo max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-indigo-700 prose-li:text-slate-600">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
            <Sparkles size={64} />
            <p>Selecione uma análise acima para começar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;