import {getDataFromLocalStorage} from "../../localStorage/getDataFromLocalStorage";

export const setListViewMode = () => {
	const mode = getDataFromLocalStorage('viewMode');
	const boxes = document.querySelectorAll('[data-view-mode]');
	for (let i = 0; i < boxes.length; i++) {
		if (!!mode) {
			boxes[i].setAttribute('data-view-mode', mode);
			document.querySelector(`[data-view-trigger="${mode}"]`).classList.add('is-active');
		} else {
			document.querySelector('[data-view-trigger="list"]').classList.add('is-active');
		}
	}
};