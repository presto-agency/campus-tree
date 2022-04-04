import Splide from '@splidejs/splide';

export let leavesCarousel;

export const leavesTabletCarousel = () => {
	const box = document.querySelector('.leaves .box-body.splide');
	if (!!box && window.innerWidth < 1200) {
		leavesCarousel = new Splide(box, {
			type: 'slide',
			perPage: 1,
			pagination: false,
			arrows: false,
			autoWidth: true,
			speed: 800,
			easing: 'ease',
		});

		leavesCarousel.mount();
	}
}