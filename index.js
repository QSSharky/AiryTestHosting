const token = process.env.TOKEN
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