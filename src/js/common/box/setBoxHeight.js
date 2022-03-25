import Tween from 'gsap';

export const setBoxHeight = () => {
	const tree = document.querySelector('.tree');
	const box = document.querySelector('.box');
	if (!!tree && !!box) {
		const treeHeight = tree.getBoundingClientRect().height;
		Tween.fromTo(box,
			{
				opacity: 0,
				height: '100%',
			},
			{
				opacity: 1,
				height: ( treeHeight - 33 - 37 ),
				duration: 0,
				ease: 'none'
			});
	}
}