import { Content, isContent } from '@vtex/gatsby-transformer-vtex-cms'

interface CMSEvent {
  action: 'cmsUpdate'
  currentVariant: Content
}

const isSafeOrigin = (origin: string) =>
  origin === `https://${process.env.GATSBY_VTEX_TENANT}.myvtex.com`

const isCMSData = (data: any): data is CMSEvent =>
  data && data.action === 'cmsUpdate' && isContent(data.currentVariant)

export const CMS_CONTENT = 'cms-content'

export const setupIframeListener = () => {
  window.addEventListener(
    'message',
    (event) => {
      const { data, origin } = event
      if (isSafeOrigin(origin) && isCMSData(data)) {
        const { currentVariant } = data
        localStorage.setItem(CMS_CONTENT, JSON.stringify(currentVariant))
      }
    },
    false
  )
}
