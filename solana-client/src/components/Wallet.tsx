import { WalletProvider, useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider, useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'


const Wallet = () => {
    const { wallet } = useWallet()
    const { setVisible } = useWalletModal()
    const connect = () => setVisible(true)
    return (
        <>{wallet ? <p></p> : <p onClick={connect}>connect wallet</p>}</>

    )
}

const WrappedWallet = () => {
    return <WalletModalProvider>
        <Wallet />
    </WalletModalProvider>
}

export default WrappedWallet