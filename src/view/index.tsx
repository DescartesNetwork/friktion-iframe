import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
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
