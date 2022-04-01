export const resetFilters = () => {
	const btn = document.querySelector('#reset-btn');
	if (!!btn) {
		btn.addEventListener('click', () => {
			let boxId = btn.dataset.resetBox;
			const box = document.querySelector(boxId);
			if (!!box) {
				let inputs = box.querySelectorAll('input');
				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].type === 'checkbox' || inputs[i].type === 'radio') {
						inputs[i].checked = false;
					} else {
						inputs[i].value = '';
					}
				}
			}
		});
	}
};