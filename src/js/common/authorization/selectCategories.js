export const selectCategories = () => {
	const inputs = document.querySelectorAll('.tree-checkboxes .input');
	/*
	Change event, add selected to modal list
	 */
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('change', () => {
			getSelectedCategories();
		});
	}

	/*
	Remove from modal list
	 */
};

export const getSelectedCategories = () => {
	const inputs = document.querySelectorAll('.tree-checkboxes .input:checked');
	if (inputs.length) {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked) {
				const modal = inputs[i].dataset.eventModalId;
				const value = inputs[i].value;
				const thumb = inputs[i].dataset.eventThumb;
				const category = inputs[i].dataset.eventCategory;
				console.log(category);
			}
		}
	} else {
		const lists = document.querySelectorAll('.selected-list');
		for (let j = 0; j < lists.length; j++) {
			const label = document.createElement('p');
			// lists[j].appendChild()
		}
	}
};