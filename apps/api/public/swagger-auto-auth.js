// 自动填充 Swagger 认证 Token
window.addEventListener('load', () => {
  // 轮询检查 ui 是否准备好
  const check = setInterval(() => {
    const ui = window.ui
    if (ui && ui.authActions) {
      clearInterval(check)
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0IiwiY3J5cHRvIjoiNTJmNTJkMWU2OTVlY2ViZDM1N2U2MzdlZTY5NGIwNDE6OGIzYTExMGZkZjExMjY3YzdlYjgwOGIyNmI1OTAyZmE5OGI0OWNkYjgyYWZkMjBmMmRiNjBkYzM3ZTAzOTAxNWRjN2E5NjRjYmNkYjcxYTQ1MTRiNmQwNDk3MTc4ZTVlOTY0NWZhMWI2ZGYyMjk3N2Q2YTRlMGQ5ZjUzMDdjMDAiLCJpYXQiOjE3NjY2NjU5MDUsImV4cCI6MTc2Njc1MjMwNX0.miRUu2HNwirE-dthrMWbmd9F0m9HVKMZffnbVRIlry8'

      ui.authActions.authorize({
        Authorization: {
          name: 'Authorization',
          schema: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          value: token,
        },
      })
      console.log('Swagger Auto Auth: Token injected')
    }
  }, 500)
})
