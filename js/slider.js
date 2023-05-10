new Swiper('.writers__swiper', {

	/*Переключение по клавиатуре слайдов*/
	keyboard:{
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	// mousewheel:{
	// 	sensetivity: 1,

	// 	eventTarget: ".writers__swiper"
	// },
	allowTouchMove: false,
	spaceBetween: 150,
	/*Адаптация слайдера*/
	breakpoints:{
		575:{
			slidesPerView: 2.8,
		},
		320:{
			slidesPerView: 1,
		}
	}
});