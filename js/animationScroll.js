const animItems = document.querySelectorAll('.animation-item')
const pages = document.querySelector('body')

const animation = () =>{ //Чтобы при скорле добавлялся класс nimation-class и к нему пременялись стили из CSS
	windowCenter = (window.innerHeight / 1.5) + window.scrollY
	animItems.forEach(el => {
		scrollOffset = el.offsetTop + (el.offsetHeight / 1.5)
		if(windowCenter >= scrollOffset && pages.classList.contains('light')){
			el.classList.add('scroll-animation')
		}else{
			el.classList.remove('scroll-animation');
		}
	})
}

//Вызов функций
animation()

window.addEventListener('scroll', () => {
	animation()
})

