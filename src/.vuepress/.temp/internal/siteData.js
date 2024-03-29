export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"ToramDocs\",\"description\":\"Toram Online 遊戲資訊站\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-TW\"},\"https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=zh-TW&tl=zh-CN&op=websites\":{\"lang\":\"zh-CN\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
