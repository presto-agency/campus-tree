export const checkboxAlertToggle = () => {
	/*
	Checkbox list toggle
	 */
	const boxes = document.querySelectorAll('[data-alert-trigger]');
	for (let i = 0; i < boxes.length; i++) {
		const alertTriggerId = boxes[i].dataset.alertTrigger;
		const alertTriggerLabel = boxes[i].dataset.alertLabel;
		const alertTriggerLabelSingle = boxes[i].dataset.alertLabelSingle;
		const checkboxInputs = boxes[i].querySelectorAll('input[type="checkbox"]');
		const triggerInput = document.querySelector(`[data-alert-checkbox="${alertTriggerId}"]`);
		const triggerInputTitle = triggerInput.parentNode.querySelector('.input-checkbox-title');
		for (let j = 0; j < checkboxInputs.length; j++) {
			checkboxInputs[j].addEventListener('change', () => {
				triggerInputTitle.innerHTML = `${getChecked(checkboxInputs)} ${getChecked(checkboxInputs) > 1 
					? alertTriggerLabel 
					: alertTriggerLabelSingle}`
			});
		}
	}

	/*
	Alert checkbox
	 */
};

const getChecked = (checkboxInputs) => {
	const checked = [];
	for (let i = 0; i < checkboxInputs.length; i++) {
		checkboxInputs[i].checked ? checked.push(checkboxInputs[i]) : null;
	}
	return checked.length;
}

