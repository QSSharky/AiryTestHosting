require('dotenv').config()

const token = process.env.TOKEN
const url = `https://discord.com/api/v10/channels/758471672478302211/messages`

fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bot' + token,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    content: 'Тест Хостинга «GitHub Pages»!'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))