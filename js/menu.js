const menuPopup = document.querySelector('.popup-menu')
const closeMenuButton = menuPopup.querySelector('.close__menu-button')

const toggleScroll = () =>{
	document.body.classList.remove('body-scroll')
}

closeMenuButton.addEventListener('click', function(){
	menuPopup.classList.remove('popup-menu--active')
	toggleScroll()
})

window.addEventListener('keydown', function(event){
	if(event.keyCode === 9){
		menuPopup.classList.add('popup-menu--active')
		document.body.classList.add('body-scroll')
	}
	if(event.keyCode === 27){
		menuPopup.classList.remove('popup-menu--active')
		toggleScroll()
	}
})