const white = document.getElementById('white')
const black = document.getElementById('black')
const beige = document.getElementById('beige')
const img = document.querySelector('img')


white.onclick = () => {
    img.src="./img/wht_interior.png"
    black.style.border = 'none'
    beige.style.border = 'none'
    white.style.border = '3px solid #2196F3'
}
black.onclick = () => {
    img.src="./img/black_interior.png"
    white.style.border = 'none'
    beige.style.border = 'none'
    black.style.border = '3px solid #2196F3'

}
beige.onclick = () => {
    img.src="./img/beige_interior.png"
    white.style.border = 'none'
    black.style.border = 'none'
    beige.style.border = '3px solid #2196F3'
}