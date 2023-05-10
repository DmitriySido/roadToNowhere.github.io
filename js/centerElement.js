const scrollItems = document.querySelectorAll('.prompt-item')
const writers = document.querySelector('.writers')

const promptButtonLeft = document.querySelector('.prompt__left-button')
const promptButtonRight = document.querySelector('.prompt__right-button')

/*Чтобы при скорле добавлялся класс prompt-class и к нему пременялись стили из CSS*/
const promptAnimation = () =>{ 
	let windowCenter = (window.innerHeight / 1) + window.scrollY
	scrollItems.forEach(el => {
		let scrollOffset = el.offsetTop + (el.offsetHeight / 1)
		if(windowCenter >= scrollOffset){
			el.classList.add('prompt-class')
			setTimeout(()=>{
				playSound('music/prompt-music.mp3')
			}, 200)
		}else{
			el.classList.remove('prompt-class')
		}
	})
}

/*Audio*/
function playSound(path){
	let audio = new Audio() // Создаём новый элемент Audio
 	audio.src = path // Указываем путь к звуку "клика"
 	audio.autoplay = true // Автоматически запускаем
 	playSound = () => {}
}

let soundButtonInMenu = document.querySelector('.chk1')
let audioBg = document.querySelector('.audio-bg')

soundButtonInMenu.addEventListener('click', e =>{
	soundButtonInMenu.classList.toggle('paused')
	audioBg.paused ? audioBg.play() : audioBg.pause()
})

/*Нажатие на кнопки при скролле*/
window.addEventListener('keydown', function(event){
	if(event.keyCode === 37){
		promptButtonLeft.classList.add('prompt__button--active')
		setTimeout(() => {
			promptButtonLeft.classList.remove('prompt__button--active')
		}, 200)
	}

	if(event.keyCode === 37 || event.keyCode === 39){
		if(writers.classList.contains('prompt-class')){
			writers.classList.remove('prompt-class')
		}
	}

	if(event.keyCode === 39){
		promptButtonRight.classList.add('prompt__button--active')
		setTimeout(() => {
			promptButtonRight.classList.remove('prompt__button--active')
		}, 100)
	}	
})

/*Плавный скролл страницы*/
SmoothScroll({
    animationTime: 800,
    stepSize: 75,
    accelerationDelta: 30,
    accelerationMax: 2,   
    keyboardSupport: true,  
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
})

/*Вызов функций*/
promptAnimation()
window.addEventListener('scroll', () => {
	promptAnimation()
})
