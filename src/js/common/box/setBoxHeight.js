import Tween from 'gsap';

export const setBoxHeight = () => {
	const tree = document.querySelector('.tree');
	const box = document.querySelector('.box');
	const peoplePage = document.querySelector('[data-router-view="people"]');
	if (!!tree && !!box) {
		const treeHeight = tree.getBoundingClientRect().height;
		Tween.fromTo(box,
			{
				opacity: 0,
				height: '100%',
			},
			{
				opacity: 1,
				height: window.innerWidth >= 1200 ? ( treeHeight - 33 - 37 ) : 'auto',
				duration: 0,
				ease: 'none'
			});
		if(!!peoplePage) {
			box.classList.add('static-height');
			Tween.to(box, {
					opacity: 1,
					height: treeHeight,
					duration: 0,
					ease: 'none'
				});
		}
	}
}