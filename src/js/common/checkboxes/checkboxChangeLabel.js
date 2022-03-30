export const checkboxChangeLabel = () => {
	const fieldsetList = document.querySelectorAll('.fieldset');
	/*
	Get all fieldset elements
	 */
	for (let i = 0; i < fieldsetList.length; i++) {
		const fieldsetId = fieldsetList[i].dataset.fieldsetList;
		const fieldsetLabel = document.querySelector(`[data-fieldset-label="${fieldsetId}"]`);
		const defaultLabel = fieldsetLabel.dataset.label;
		if (!!fieldsetId) {
			const checkboxes = fieldsetList[i].querySelectorAll('.input-checkbox');
			/*
			Get checkboxes in each fieldset
			 */
			for (let j = 0; j < checkboxes.length; j++) {
				checkboxes[j].addEventListener('change', (e) => {
					const value = e.target.value;
					/*
					Detect All checkbox
					 */
					if (value.toLocaleString() === 'all') {
						switchAllCheckboxes(checkboxes, e.target.checked);
					} else {
						let checkboxAll = [...checkboxes].filter(checkbox => checkbox.value.toLocaleString() === 'all');
						!!checkboxAll.length ? checkboxAll[0].checked = false : null;
					}
					/*
					Set checked checkbox to label
					 */
					if (getCheckedCheckboxes(checkboxes).length === 0) {
						fieldsetLabel.innerHTML = defaultLabel;
					} else if (getCheckedCheckboxes(checkboxes).length === 1) {
						fieldsetLabel.innerHTML = getCheckedCheckboxes(checkboxes)[0];
					} else {
						fieldsetLabel.innerHTML = `${getCheckedCheckboxes(checkboxes)[0]} +${getCheckedCheckboxes(checkboxes).length}`;
					}
				});
			}
		}
	}
}

const switchAllCheckboxes = (checkboxes, status) => {
	for (let j = 0; j < checkboxes.length; j++) {
		checkboxes[j].checked = status;
	}
}

const getCheckedCheckboxes = (checkboxes) => {
	let arr = [];
	for (let j = 0; j < checkboxes.length; j++) {
		checkboxes[j].checked ? arr.push(checkboxes[j].value) : null;
	}
	return arr.filter(checkbox => checkbox.toLocaleString() !== 'all');
}