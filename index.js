const token = 'NzkxMTA1NTQwMzUxOTgzNjI2.X-KUcg.8EGLw_SiGqNOJZlcd8niE_xE2K4'
const url = `https://discord.com/api/v9/channels/channel-id/messages`
fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bot' + token,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    content: 'Тест GitHub Pages!'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))