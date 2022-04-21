import {closeNav} from "../general/toggleNav";

export const switchModals = () => {
	const triggers = document.querySelectorAll('[data-popup-trigger]');
	for (let i = 0; i < triggers.length; i++) {
		let modalId = triggers[i].dataset.popupTrigger;
		triggers[i].addEventListener('click', (e) => {
			e.preventDefault();
			const popup = document.querySelector(`${modalId}`);
			console.log(popup);
			if (!!popup) {
				closeNav();
				popup.classList.add('is-active');
			}
		});
	}
	/*
	Close modals
	 */
	const closeElements = document.querySelectorAll('[data-popup-close]');
	for (let j = 0; j < closeElements.length; j++) {
		closeElements[j].addEventListener('click', () => {
			const popups = document.querySelectorAll('.popup');
			for (let l = 0; l < popups.length; l++) {
				popups[l].classList.remove('is-active');
			}
		});
	}
};