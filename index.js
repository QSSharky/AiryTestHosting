const token = process.env.DISCORD_TOKEN
const url = 'https://discord.com/api/v10/channels/758471672478302211/messages'

const request = new XMLHttpRequest()
request.open('POST', url)
request.setRequestHeader('Authorization', 'Bot ' + token)
request.setRequestHeader('Content-Type', 'application/json')
request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            console.log(request.responseText)
        } else {
            console.error('Error:', request.status, request.statusText)
        }
    }
}
const data = { content: 'Тест Хостинга «GitHub Pages»!' }
request.send(JSON.stringify(data))