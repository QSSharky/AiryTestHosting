function main() {
    if(this.id === 'main-button-opacity') {
        window.location = './index.html'
    }
    if(this.id === 'kodik-test') {
        fetch('https://kodikapi.com/list?token=c8dfbb613111e61c11377c9566291b5b&limit=1&year=2018&types=anime-serial&not_blocked_in=RU&translation_type=subtitles')
        .then(res => res.json())
        .then(response => {
            console.log(response.results[0].title)
        })
    }
}
let btn = document.querySelectorAll('button')
btn.forEach(function(button) {
    if(button.id === 'soc-button') return false
    button.onclick = main
})
const lazyImages = document.querySelectorAll('img[data-src]')
const windowHeight = document.documentElement.clientHeight

let lazyImagesPosition = []
if(lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if(img.dataset.src) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset)
            lazyScrollCheck()
        }
    })
}

window.addEventListener('scroll', lazyScroll)

function lazyScroll() {
    if(document.querySelectorAll('img[data-src]').length > 0) {
        lazyScrollCheck()
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesPosition.findIndex(item => pageYOffset > item - windowHeight)
    if(imgIndex >= 0) {
        if(lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
            lazyImages[imgIndex].removeAttribute('data-src')
        }
        delete lazyImagesPosition[imgIndex]
    }
}