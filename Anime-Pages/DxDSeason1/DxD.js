let lol = confirm('Внимание, это аниме является 18+! Если вы хотите продолжить, нажмите OK!')
if(lol) {
function changingColorOfButtons() {
    //Кнопка назад
    if(this.id === 'main-button-opacity') {
        window.location = '../../index.html'
    }
    //Смена серии
    let iframe = document.querySelector('iframe')
    let episodeName = document.getElementById('HighSchoolDxDEpisodeName')
    let episodeOutDate = document.getElementById('HighSchoolDxDEpisodeOutDate')
    //Кнопки
    if(this.id === 'btn1') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047512'
        episodeName.textContent = 'Название серии: I Got a Girlfriend!'
        episodeOutDate.textContent = 'Дата выхода: 06.01.2012'
    }
    if(this.id === 'btn2') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047513'
        episodeName.textContent = 'Название серии: I Stopped Being a Human!'
        episodeOutDate.textContent = 'Дата выхода: 13.01.2012'
    }
    if(this.id === 'btn3') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047514'
        episodeName.textContent = 'Название серии: I Made A New Friend!'
        episodeOutDate.textContent = 'Дата выхода: 20.01.2012'
    }
    if(this.id === 'btn4') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047515'
        episodeName.textContent = 'Название серии: Save My Friend!'
        episodeOutDate.textContent = 'Дата выхода: 27.01.2012'
    }
    if(this.id === 'btn5') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047516'
        episodeName.textContent = `Название серии: I'm Going to Overthrow my Ex-Girlfriend!`
        episodeOutDate.textContent = 'Дата выхода: 03.02.2012'
    }
    if(this.id === 'btn6') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047517'
        episodeName.textContent = 'Название серии: My Job as a Devil!'
        episodeOutDate.textContent = 'Дата выхода: 10.02.2012'
    }
    if(this.id === 'btn7') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047524'
        episodeName.textContent = `Название серии: I'll Get a Familiar!`
        episodeOutDate.textContent = 'Дата выхода: 17.02.2012'
    }
    if(this.id === 'btn8') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047525'
        episodeName.textContent = 'Название серии: I Pick a Fight!'
        episodeOutDate.textContent = 'Дата выхода: 24.02.2012'
    }
    if(this.id === 'btn9') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047526'
        episodeName.textContent = 'Название серии: My Training Begins!'
        episodeOutDate.textContent = 'Дата выхода: 02.03.2012'
    }
    if(this.id === 'btn10') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047527'
        episodeName.textContent = 'Название серии: Beginning of the Decisive Battle!'
        episodeOutDate.textContent = 'Дата выхода: 09.03.2012'
    }
    if(this.id === 'btn11') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047528'
        episodeName.textContent = `Название серии: High Praises During the Decisive Battle!`
        episodeOutDate.textContent = 'Дата выхода: 16.03.2012'
    }
    if(this.id === 'btn12') {
        iframe.src = 'https://video.sibnet.ru/shell.php?videoid=4047529'
        episodeName.textContent = 'Название серии: I Came to Carry Out My Promise!'
        episodeOutDate.textContent = 'Дата выхода: 23.03.2012'
}

    //Сброс цвета на #2C2F33
    document.querySelectorAll('.btn').forEach((button) => {
        if(button.style.background === '#2C2F33') return
        button.style.background = '#2C2F33'
    })
    document.querySelectorAll('.btn1').forEach((button) => {
        if(button.style.background === '#2C2F33') return
        button.style.background = '#2C2F33'
    })
    this.style.background = 'fuchsia'
}
let btn = document.querySelectorAll('button')
btn.forEach(function(button) {
    if(button.id === 'soc-button') return false
    button.onclick = changingColorOfButtons
})

//Показ выполнения загрузки скрипта
setTimeout(() => {
    console.log(`Скрипт сайта загружен!`)
}, 1000)
} else {
    window.location = '../../index.html'
}