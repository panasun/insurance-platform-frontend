// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Lib
import * as Metamask from 'src/@core/blockchain/metamask'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      await handleLogin(null, null)
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleLogin = (params, errorCallback) => {
  //   axios
  //     .post(authConfig.loginEndpoint, params)
  //     .then(async response => {
  //       params.rememberMe
  //         ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
  //         : null
  //       const returnUrl = router.query.returnUrl
  //       setUser({ ...response.data.userData })
  //       params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
  //       const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
  //       router.replace(redirectURL)
  //     })
  //     .catch(err => {
  //       if (errorCallback) errorCallback(err)
  //     })
  // }

  const handleLogin = async (params, errorCallback) => {
    const hasMetamask = Metamask.hasMetamask()
    if (hasMetamask) {
      const accounts = await Metamask.getAccounts()

      setUser({
        account: accounts[0],
        chain: 'POLYGON',
        wallet: 'METAMASK'
      })
    } else {
      setUser(null)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
