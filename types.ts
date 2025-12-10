export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  lastOrder: string;
  totalSpent: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Em Estoque' | 'Baixo Estoque' | 'Esgotado';
}

export interface SaleData {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface KPI {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export enum AnalysisType {
  SWOT = 'SWOT',
  SALES_FORECAST = 'SALES_FORECAST',
  COST_OPTIMIZATION = 'COST_OPTIMIZATION'
}