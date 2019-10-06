module.exports = {
  title: 'JavaScript - 주요 개념',
  description: 'Javascript중 헷갈리는 내용을 설명하기 위해서 만든 노트입니다.',
  base: "/javascript-note/",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Data Type의 특성',
        collapsable: false,
        children: [
          '/immutability',
          '/comparison'
        ]
      },
      {
        title: 'Promise',
        collapsable: false,
        children: [
          '/promise',
          '/async_await'
        ]
      }
    ]
  }
}
