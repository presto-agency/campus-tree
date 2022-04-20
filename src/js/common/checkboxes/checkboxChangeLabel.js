import {closeAllDropdowns} from "../dropdown/toggleDropdown";

export const checkboxChangeLabel = () => {
	const fieldsetList = document.querySelectorAll('.fieldset');
	/*
	Get all fieldset elements
	 */
	for (let i = 0; i < fieldsetList.length; i++) {
		const fieldsetId = fieldsetList[i].dataset.fieldsetList;
		const fieldsetLabel = document.querySelector(`[data-fieldset-label="${fieldsetId}"]`);
		const dropdownParent = !!fieldsetLabel ? fieldsetLabel.parentNode : null;
		const defaultLabel = !! fieldsetLabel ? fieldsetLabel.dataset.label : null;
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
					if (getCheckedCheckboxes(checkboxes).length === 0 && !!fieldsetLabel) {
						fieldsetLabel.innerHTML = defaultLabel;
					} else if (getCheckedCheckboxes(checkboxes).length === 1) {
						!!fieldsetLabel
							? fieldsetLabel.innerHTML = getCheckedCheckboxes(checkboxes)[0]
							: null;
					} else {
						!!fieldsetLabel
							? fieldsetLabel.innerHTML = `${getCheckedCheckboxes(checkboxes)[0]} +${getCheckedCheckboxes(checkboxes).length}`
							: null;
					}
					/*
					Close dropbox select after selected
					 */
					if (!!dropdownParent && dropdownParent.classList.contains('dropdown-select')) {
						dropdownParent.classList.remove('is-active');
					}
				});
			}
		}
	}

	/*
	Set checked options to dropdown trigger labels
	 */
	setCheckedOptionOnSelect();
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

const setCheckedOptionOnSelect = () => {
	const selects = document.querySelectorAll('.dropdown-select');
	if (selects.length) {
		for (let i = 0; i < selects.length; i++) {
			const fieldset = selects[i].querySelector('.fieldset');
			const selectTitle = selects[i].querySelector('.dropdown-trigger-title');
			if (!!fieldset) {
				const inputs = fieldset.querySelectorAll('input');
				for (let j = 0; j < inputs.length; j++) {
					inputs[j].checked ? selectTitle.innerHTML = inputs[j].value : null;
				}
			}
		}
	}
}