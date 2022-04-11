import Tween from 'gsap';

export const scrollToBottomComments = () => {
	const comments = document.querySelector('.comments');
	if (!!comments) {
		const scrollBox = comments.querySelector('.scroll-wrap');
		Tween.to(scrollBox, {
			scrollTo: scrollBox.getBoundingClientRect().height
		});
	}
};