function main() {
    if(this.id === 'main-button-opacity') {
        window.location = './index.html'
    }
}
let btn = document.querySelectorAll('button')
btn.forEach(function(button) {
    if(button.id === 'soc-button') return false
    button.onclick = main
})