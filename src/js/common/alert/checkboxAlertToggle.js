export const checkboxAlertToggle = () => {
	/*
	Checkbox list toggle
	 */
	const boxes = document.querySelectorAll('[data-alert-trigger]');
	for (let i = 0; i < boxes.length; i++) {
		const alertTriggerId = boxes[i].dataset.alertTrigger;
		const checkboxInputs = boxes[i].querySelectorAll('input[type="checkbox"]');
		const triggerInput = document.querySelector(`[data-alert-checkbox="${alertTriggerId}"]`);

		if (!!triggerInput) {
			const triggerInputTitle = triggerInput.parentNode.querySelector('.input-checkbox-title');

			for (let j = 0; j < checkboxInputs.length; j++) {
				checkboxInputs[j].addEventListener('change', () => {
					triggerInput.checked = false;
					updateLabel(boxes[i], triggerInputTitle, checkboxInputs, triggerInput);
				});
			}

			/*
			Alert checkbox
			 */
			if (!!triggerInput) {
				triggerInput.addEventListener('change', () => {
					for (let j = 0; j < checkboxInputs.length; j++) {
						checkboxInputs[j].checked = triggerInput.checked;
					}
					updateLabel(boxes[i], triggerInputTitle, checkboxInputs, triggerInput);
				});
			}
		}
	}
};

const getChecked = (checkboxInputs) => {
	const checked = [];
	for (let i = 0; i < checkboxInputs.length; i++) {
		checkboxInputs[i].checked ? checked.push(checkboxInputs[i]) : null;
	}
	return checked.length;
}

const updateLabel = (box, triggerInputTitle, checkboxInputs, triggerInput) => {

	const alertTriggerLabel = box.dataset.alertLabel;
	const alertTriggerLabelSingle = box.dataset.alertLabelSingle;
	const tooltip = triggerInput.parentNode.parentNode;
	const tooltipDefaultLabel = tooltip.dataset.defaultLabel;
	const tooltipActiveLabel = tooltip.dataset.activeLabel;
	const tooltipLabel = tooltip.querySelector('.tooltip-body-item');
	const alert = document.querySelector('.alert');

	/*
	Update label
	 */
	triggerInputTitle.innerHTML = `${getChecked(checkboxInputs)} ${getChecked(checkboxInputs) > 1
		? alertTriggerLabel
		: alertTriggerLabelSingle}`;

	/*
	Update trigger tooltip label
	 */
	triggerInput.checked
		? tooltipLabel.innerHTML = tooltipActiveLabel
		: tooltipLabel.innerHTML = tooltipDefaultLabel;

	if (!!alert) {
		getChecked(checkboxInputs) >= 1 ? alert.classList.add('is-active') : alert.classList.remove('is-active');
	}
}

export const closeAlert = () => {
	const alert = document.querySelector('.alert');
	!!alert ? alert.classList.remove('is-active') : null;
};