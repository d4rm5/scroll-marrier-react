import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { scrollSepolia } from 'wagmi/chains';
import { http } from 'wagmi';


export const config = getDefaultConfig({
    appName: 'Scroll Marrier',
    projectId: import.meta.env.VITE_REOWN_CLOUD_ID,
    chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(`https://scroll-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_KEY}`),
    }
});