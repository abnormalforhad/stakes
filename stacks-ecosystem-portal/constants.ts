
import { EcosystemApp, BlogPost, StacksStat } from './types';

export const ECOSYSTEM_APPS: EcosystemApp[] = [
  {
    id: 'alex',
    name: 'ALEX',
    category: 'DeFi',
    description: 'The premier DeFi platform on Stacks, bringing full financial services to Bitcoin.',
    url: 'https://alexlab.co',
    icon: 'https://picsum.photos/seed/alex/100/100',
    featured: true
  },
  {
    id: 'gamma',
    name: 'Gamma',
    category: 'NFTs',
    description: 'The home for digital artifacts and NFTs on Bitcoin. Explore, create, and collect.',
    url: 'https://gamma.io',
    icon: 'https://picsum.photos/seed/gamma/100/100',
    featured: true
  },
  {
    id: 'leather',
    name: 'Leather',
    category: 'Wallet',
    description: 'A Bitcoin wallet for the Stacks ecosystem. Secure your assets and explore apps.',
    url: 'https://leather.io',
    icon: 'https://picsum.photos/seed/leather/100/100'
  },
  {
    id: 'xverse',
    name: 'Xverse',
    category: 'Wallet',
    description: 'The most advanced Bitcoin wallet for Web3. Support for Ordinals and Stacks.',
    url: 'https://xverse.app',
    icon: 'https://picsum.photos/seed/xverse/100/100'
  },
  {
    id: 'velar',
    name: 'Velar',
    category: 'DeFi',
    description: 'DeFi protocol on Stacks focusing on liquidity and yield for Bitcoiners.',
    url: 'https://velar.co',
    icon: 'https://picsum.photos/seed/velar/100/100'
  },
  {
    id: 'zest',
    name: 'Zest Protocol',
    category: 'DeFi',
    description: 'Bitcoin-native lending protocol built for institutional and retail users.',
    url: 'https://zestprotocol.com',
    icon: 'https://picsum.photos/seed/zest/100/100'
  },
  {
    id: 'stackssnacks',
    name: 'Stacks Snacks',
    category: 'Infrastructure',
    description: 'Your weekly bite-sized news update on the Stacks ecosystem.',
    url: 'https://stackssnacks.com',
    icon: 'https://picsum.photos/seed/snacks/100/100'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Nakamoto Upgrade: A New Era for Bitcoin',
    excerpt: 'Deep dive into how the Nakamoto release transforms Stacks speed and security.',
    date: 'Oct 24, 2024',
    author: 'Muneeb Ali',
    category: 'Protocol',
    image: 'https://picsum.photos/seed/post1/800/400'
  },
  {
    id: '2',
    title: 'Building Clarity: Smart Contracts on Bitcoin',
    excerpt: 'Learn why Clarity is the superior language for predictable smart contracts.',
    date: 'Oct 20, 2024',
    author: 'Clarity Team',
    category: 'Development',
    image: 'https://picsum.photos/seed/post2/800/400'
  }
];

export const NETWORK_STATS: StacksStat[] = [
  { label: 'BTC Price', value: '$96,420', change: '+2.4%', isPositive: true },
  { label: 'STX Price', value: '$2.84', change: '+5.1%', isPositive: true },
  { label: 'Locked in Stacking', value: '420M STX', change: '-0.2%', isPositive: false },
  { label: 'Active Developers', value: '1,240', change: '+12%', isPositive: true }
];
