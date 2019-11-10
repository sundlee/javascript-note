module.exports = {
  title: 'JavaScript - 주요 개념',
  description: 'Javascript중 헷갈리는 내용을 설명하기 위해서 만든 노트입니다.',
  base: "/javascript-note/",
  head: [
    ['link', {
      rel: 'icon',
      href: '/js-logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Data Type의 특성',
        collapsable: false,
        children: [
          '/immutable',
          '/comparison',
          '/null'
        ]
      },
      {
        title: 'First',
        collapsable: false,
        children: [
          '/first_class',
        ]
      },
      {
        title: 'Promise',
        collapsable: false,
        children: [
          '/sync_async',
          '/promise',
          '/async_await'
        ]
      }
    ]
  }
}
