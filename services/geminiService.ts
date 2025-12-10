import { GoogleGenAI } from "@google/genai";
import { AnalysisType, SaleData, Client } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBusinessAnalysis = async (
  type: AnalysisType,
  salesData: SaleData[],
  clients: Client[]
): Promise<string> => {
  const model = "gemini-2.5-flash";
  
  let prompt = "";
  const dataContext = JSON.stringify({ salesData, clients });

  switch (type) {
    case AnalysisType.SWOT:
      prompt = `
        Atue como um consultor de negócios sênior. Analise os seguintes dados JSON da empresa:
        ${dataContext}
        
        Realize uma análise SWOT (Forças, Fraquezas, Oportunidades, Ameaças) concisa e formatada em Markdown.
        Foque em insights acionáveis baseados nos números de receita e comportamento dos clientes.
      `;
      break;
    case AnalysisType.SALES_FORECAST:
      prompt = `
        Analise os dados financeiros JSON abaixo:
        ${dataContext}
        
        Gere uma previsão de vendas para os próximos 3 meses. 
        Explique a lógica baseada na tendência dos meses anteriores (especialmente o crescimento recente de Ago-Out).
        Formate a resposta em Markdown com tópicos claros.
      `;
      break;
    case AnalysisType.COST_OPTIMIZATION:
      prompt = `
        Com base nestes dados JSON:
        ${dataContext}
        
        Identifique áreas onde as despesas parecem altas em relação à receita.
        Sugira 3 estratégias concretas de redução de custos.
        Formate em Markdown.
      `;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || "Não foi possível gerar a análise no momento.";
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return "Erro ao conectar com o serviço de IA. Verifique sua chave de API.";
  }
};
