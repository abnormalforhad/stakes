
export interface EcosystemApp {
  id: string;
  name: string;
  category: 'DeFi' | 'NFTs' | 'Wallet' | 'Infrastructure' | 'Gaming';
  description: string;
  url: string;
  icon: string;
  featured?: boolean;
}

export interface StacksStat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
