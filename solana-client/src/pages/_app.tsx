import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from 'next/dynamic';

import { ContextProvider } from '../contexts/ContextProvider';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const rpc = 'https://solana-devnet.g.alchemy.com/v2/sbsV9nZINjbsE9ok0x0A4KtsyZYnP2am'
export default function App({ Component, pageProps }: AppProps) {
  return <ContextProvider>
    <header className="flex justify-between	">
      First solana repo
      <WalletMultiButtonDynamic />
      <button className="px-3 bg-white text-black border-radius-2" onClick={() => { }}>Connect</button>
    </header>
    <Component {...pageProps} />
  </ContextProvider>
}
