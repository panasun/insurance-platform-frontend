import MetaMaskSDK from '@metamask/sdk'
import detectEthereumProvider from '@metamask/detect-provider'

const ethereum = () => {
  const MMSDK = new MetaMaskSDK({})
  return MMSDK.getProvider()
}

export const hasMetamask = () => typeof window.ethereum !== 'undefined'

export const getAccounts = async () => {
  return await ethereum().request({ method: 'eth_accounts' })
}

export const requestAccount = async () => {
  return await ethereum().request({ method: 'eth_requestAccounts', params: [] })
}
