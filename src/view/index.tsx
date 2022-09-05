import { useEffect } from 'react'
import { useSetBackground } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const setBackground = useSetBackground()

  useEffect(() => {
    setBackground({ light: '#18192f', dark: '#18192f' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={'https://friktion.fi/'}
      title="Your destination for smarter and safer returns on crypto"
      wallet={window.sentre.wallet}
    />
  )
}

export default View