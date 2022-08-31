export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"riasuh Docs\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/icon_32x32.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#fa002a\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"riasuh Docs\"}}}")

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
