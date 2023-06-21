// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

const ConnectWalletDropdown = props => {
  const [openChain, setOpenChain] = useState(false)
  const [openWallet, setOpenWallet] = useState(false)

  const auth = useAuth()

  const connectMetamask = async () => {
    auth.login()
    setOpenWallet(!openWallet)
  }

  return (
    <Fragment>
      <Stack spacing={2} direction='row' sx={{ ml: 2 }}>
        <Button variant='outlined' onClick={() => setOpenChain(!openChain)}>
          [x] <Icon icon={openChain ? 'iconamoon:arrow-up-2-bold' : 'iconamoon:arrow-down-2-bold'} />
        </Button>
        <Button variant='contained' onClick={() => connectMetamask()}>
          Connect Wallet
          {/* <Icon icon={openWallet ? 'iconamoon:arrow-up-2-bold' : 'iconamoon:arrow-down-2-bold'} /> */}
        </Button>
      </Stack>
    </Fragment>
  )
}

export default ConnectWalletDropdown
