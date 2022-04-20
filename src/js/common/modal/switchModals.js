import {closeNav} from "../general/toggleNav";

export const switchModals = () => {
	const triggers = document.querySelectorAll('[data-popup-trigger]');
	for (let i = 0; i < triggers.length; i++) {
		let modalId = triggers[i].dataset.popupTrigger;
		triggers[i].addEventListener('click', (e) => {
			e.preventDefault();
			const popup = document.querySelector(modalId);
			if (!!popup) {
				closeNav();
				popup.classList.contains('is-active') ? popup.classList.remove('is-active') : popup.classList.add('is-active');
			}
		});
	}
};