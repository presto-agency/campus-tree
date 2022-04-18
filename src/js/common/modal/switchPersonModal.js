import Tween from 'gsap';
import {transition} from "../../constants/transitions";

export const switchPersonModal = () => {
	const triggers = document.querySelectorAll('.person-toggle-modal');
	if (triggers.length) {
		for (let i = 0; i < triggers.length; i++) {
			triggers[i].addEventListener('click', () => {
				let modalId = triggers[i].dataset.modalId;
				const modal = document.querySelector(modalId);
				const isClose = triggers[i].classList.contains('__close');
				if (!!modalId && !!modal) {
					showModal(modal);
				}
				if (!!modalId && !!modal && isClose) {
					hideModal(modal);
				}
			});
		}

		/*
		Close all dropdowns on click anywhere, exclude active trigger
	 	*/
		document.addEventListener('mouseup', function(e) {
			let container = document.querySelector('.people-row.is-active');
			if (!!container && !container.contains(e.target)) {
				hideAllModals();
			}
		});
	}
};

const showModal = (modal) => {
	modal.parentNode.classList.add('is-active');
	const windowWidth = window.innerWidth;
	Tween.set(modal, {
		display: 'block',
		onComplete: () => {
			let { left, width } = modal.getBoundingClientRect();
			Tween.set(modal, {
				left: left + width > windowWidth ? 'auto' : 0,
				right: left + width > windowWidth ? 0 : 'auto',
				onComplete: () => {
					Tween.fromTo(modal,
						{
							opacity: 0,
						},
						{
							opacity: 1,
							duration: transition.opacity.duration,
							ease: transition.opacity.ease,
						});
				}
			});
		}
	});
};

const hideModal = (modal) => {
	Tween.to(modal, {
		opacity: 0,
		duration: transition.opacity.duration,
		ease: transition.opacity.ease,
		onComplete: () => {
			Tween.set(modal, {
				display: 'none',
			});
			modal.parentNode.classList.remove('is-active');
		}
	});
};

const hideAllModals = () => {
	let modal = document.querySelector('.people-row.is-active').querySelector('.people-row-modal');
	Tween.to(modal, {
		opacity: 0,
		duration: transition.opacity.duration,
		ease: transition.opacity.ease,
		onComplete: () => {
			Tween.set(modal, {
				display: 'none',
			});
			document.querySelector('.people-row.is-active').classList.remove('is-active');
		}
	});
};