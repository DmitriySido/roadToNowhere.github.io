const flashlightButton = document.querySelector('.flashlight__switch')
const page = document.querySelector('body')
const backgroundImage = page.querySelector('.under-body')

/*---PICTURES---*/
const logo = document.querySelector('.logo__img'),
			sphere = document.querySelector('.sphere__pictures'),
			nature = document.querySelector('.nature__pictures'),
			brain = document.querySelector('.related__pictures'),
			world = document.querySelector('.influence__pictures'),
			woter = document.querySelector('.icon-woter'),
			tree = document.querySelector('.icon-tree'),
			plastic = document.querySelector('.icon-plastic');

flashlightButton.addEventListener('change', function(){
	page.classList.toggle('light')
	backgroundImage.classList.toggle('under-body--inactive')

	if(page.classList.contains('light')){
		logo.src = 'pictures/illustration/light-illustration/logo.png'
		sphere.src = 'pictures/illustration/light-illustration/sphere.png'
		nature.src = 'pictures/illustration/light-illustration/face.png'
		brain.src = 'pictures/illustration/light-illustration/brain.png'
		world.src = 'pictures/illustration/light-illustration/world.png'
		woter.src = 'pictures/illustration/light-illustration/woter.png'
		tree.src = 'pictures/illustration/light-illustration/destroy-tree.png'
		plastic.src = 'pictures/illustration/light-illustration/plastic.png'
		for(let book of document.querySelectorAll('.book__icon')){
			book.src = 'pictures/illustration/light-illustration/book-icon.png'
		}
	}else{
		logo.src = 'pictures/icons/logo.png'
		sphere.src = 'pictures/illustration/sphere.png'
		nature.src = 'pictures/illustration/face-1.png'
		brain.src = 'pictures/illustration/brain-1-5.png'
		world.src = 'pictures/illustration/world-1.png'
		woter.src = 'pictures/icons/woter.png'
		tree.src = 'pictures/icons/destroy-tree.png'
		plastic.src = 'pictures/icons/plastic.png'
		for(let book of document.querySelectorAll('.book__icon')){
			book.src = 'pictures/icons/book/book-icon.png'
		}
	}
})