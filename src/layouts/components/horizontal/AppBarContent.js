// ** MUI Imports
import Box from '@mui/material/Box'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import ConnectWalletDropdown from 'src/@core/layouts/components/shared-components/ConnectWalletDropdown'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

const AppBarContent = props => {
  // ** Props
  const { settings, saveSettings } = props

  const auth = useAuth()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ModeToggler settings={settings} saveSettings={saveSettings} />
      {auth.user ? <UserDropdown settings={settings} /> : <ConnectWalletDropdown settings={settings} />}
    </Box>
  )
}

export default AppBarContent
