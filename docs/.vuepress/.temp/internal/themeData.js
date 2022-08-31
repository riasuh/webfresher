export const themeData = JSON.parse("{\"repo\":\"riasuh/webproject\",\"docsDir\":\"docs\",\"docsBranch\":\"master\",\"editLink\":true,\"contributors\":true,\"locales\":{\"/\":{\"selectLanguageText\":\"🌐 English\",\"selectLanguageName\":\"English\",\"selectLanguageAriaLabel\":\"Languages\",\"editLinkText\":\"Help improve this page!\",\"lastUpdatedText\":\"Last Updated\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"riasuh Discord\",\"link\":\"https://discord.com/invite/6PRt4Ph\"}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
