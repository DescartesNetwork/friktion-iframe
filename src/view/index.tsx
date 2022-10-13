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
    setBackground({ light: '#020103', dark: '#020103' })
  }, [setBackground])

  console.log('1')

  return (
    <EmbededView
      appId={appId}
      src={'https://friktion.fi/'}
      title="Your destination for smarter and safer returns on crypto"
      wallet={window.sentre.solana}
    />
  )
}

export default View
