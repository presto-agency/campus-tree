export const resetFilters = () => {
	const btn = document.querySelectorAll('.reset-btn');
	if (!!btn.length) {
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', () => {
				let boxId = btn[i].dataset.resetBox;
				const box = document.querySelector(boxId);
				if (!!box) {
					let inputs = box.querySelectorAll('input');
					let triggers = box.querySelectorAll('.dropdown-trigger');
					/*
					Inputs
					 */
					for (let i = 0; i < inputs.length; i++) {
						if (inputs[i].type === 'checkbox' || inputs[i].type === 'radio') {
							inputs[i].checked = false;
						} else {
							inputs[i].value = '';
						}
					}
					/*
					Triggers
					 */
					for (let i = 0; i < triggers.length; i++) {
						triggers[i].innerHTML = triggers[i].dataset.label;
					}
				}
			});
		}
	}
};