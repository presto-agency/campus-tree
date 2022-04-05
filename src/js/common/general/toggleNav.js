import Tween from 'gsap';
import {transition} from "../../constants/transitions";

export const toggleNav = () => {
	const burger = document.querySelector('.burger');
	if (!!burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('is-active') ? closeNav() : openNav();
		});
	}
};

const openNav = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header-nav');
	Tween.set(nav, {
		display: 'block',
		onComplete: () => {
			burger.classList.add('is-active');
			Tween.to(nav, {
				opacity: 1,
				duration: transition.opacity.duration,
				ease: transition.opacity.ease,
			});
		},
	})
};

export const closeNav = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header-nav');
	burger.classList.remove('is-active');
	Tween.set(nav, {
		opacity: 1,
		onComplete: () => {
			Tween.set(nav, {
				display: 'none'
			});
		},
	})
};