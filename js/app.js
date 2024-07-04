const leftImage = document.getElementById('array-left')
const rightImage = document.getElementById('array-right')
const forest = document.querySelector('.forest')
const forest__inner = document.querySelector('.forest__inner')
const forest_color = document.querySelector('.forest-color')
const forest_color_p = document.querySelector('#forest-color')

const images = [
	'../img/forest/intro.jpg',
	'../img/forest/intro-two.jpg',
	'../img/forest/intro-three.jpg',
	'../img/forest/intro-for.jpg',
]

let currentImageIndex = 0

function changeBackground(index) {
	forest.style.backgroundImage = `url(${images[index]})`

	const introImage = images[index] === '../img/forest/intro-for.jpg'
	forest_color.style.color = introImage ? '#000' : '#fff'
	forest_color_p.style.color = introImage ? '#000' : '#fff'
}

changeBackground(currentImageIndex)

leftImage.addEventListener('click', () => {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
	changeBackground(currentImageIndex)
})

rightImage.addEventListener('click', () => {
	currentImageIndex = (currentImageIndex + 1) % images.length
	changeBackground(currentImageIndex)
})
