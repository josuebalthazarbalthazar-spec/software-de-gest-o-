import { Client, Product, SaleData, KPI } from './types';

export const MOCK_CLIENTS: Client[] = [
  { id: '1', name: 'Ana Silva', email: 'ana@techsol.com', company: 'TechSolutions', status: 'Ativo', lastOrder: '2023-10-15', totalSpent: 12500 },
  { id: '2', name: 'Roberto Costa', email: 'roberto@construct.com', company: 'Construct Ltda', status: 'Inativo', lastOrder: '2023-08-20', totalSpent: 3400 },
  { id: '3', name: 'Carla Dias', email: 'carla@marketing.org', company: 'Agência Criativa', status: 'Ativo', lastOrder: '2023-10-22', totalSpent: 8900 },
  { id: '4', name: 'Fernando Souza', email: 'fernando@logistica.net', company: 'LogiFast', status: 'Pendente', lastOrder: '-', totalSpent: 0 },
  { id: '5', name: 'Mariana Lima', email: 'mariana@health.com', company: 'Vida Saudável', status: 'Ativo', lastOrder: '2023-10-25', totalSpent: 5600 },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '101', name: 'Licença Enterprise Anual', category: 'Software', price: 2500, stock: 999, status: 'Em Estoque' },
  { id: '102', name: 'Consultoria Premium (Hora)', category: 'Serviços', price: 350, stock: 40, status: 'Baixo Estoque' },
  { id: '103', name: 'Servidor Dedicado v2', category: 'Hardware', price: 12000, stock: 5, status: 'Baixo Estoque' },
  { id: '104', name: 'Manutenção Mensal', category: 'Serviços', price: 150, stock: 999, status: 'Em Estoque' },
  { id: '105', name: 'Roteador Industrial X5', category: 'Hardware', price: 850, stock: 0, status: 'Esgotado' },
];

export const SALES_DATA: SaleData[] = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Fev', revenue: 3000, expenses: 1398, profit: 1602 },
  { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { month: 'Abr', revenue: 2780, expenses: 3908, profit: -1128 },
  { month: 'Mai', revenue: 1890, expenses: 4800, profit: -2910 },
  { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { month: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
  { month: 'Ago', revenue: 5600, expenses: 2400, profit: 3200 },
  { month: 'Set', revenue: 6700, expenses: 2800, profit: 3900 },
  { month: 'Out', revenue: 8900, expenses: 3100, profit: 5800 },
];

export const KPIS: KPI[] = [
  { title: 'Receita Total', value: 'R$ 145.230', change: '+12.5%', trend: 'up', icon: 'DollarSign' },
  { title: 'Novos Clientes', value: '34', change: '+4.2%', trend: 'up', icon: 'Users' },
  { title: 'Taxa de Churn', value: '2.4%', change: '-0.5%', trend: 'down', icon: 'Activity' }, // Down is good for churn
  { title: 'Produtos Vendidos', value: '1,203', change: '-1.2%', trend: 'down', icon: 'Package' },
];
