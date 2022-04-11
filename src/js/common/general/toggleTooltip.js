export const toggleTooltip = () => {
	const tooltips = document.querySelectorAll('.tooltip-click');
	for (let i = 0; i < tooltips.length; i++) {
		tooltips[i].addEventListener('click', () => {
			if (tooltips[i].classList.contains('is-active')) {
				tooltips[i].classList.remove('is-active');
			} else {
				tooltips[i].classList.add('is-active');
				setTimeout(() => {
					closeAllTooltips();
				}, 3000);
			}
		});
	}

	/*
	Close current tooltip
	 */
	const closeButtons = document.querySelectorAll('.tooltip-body-close');
	for (let i = 0; i < closeButtons.length; i++) {
		closeButtons[i].addEventListener('click', () => {
			closeButtons[i].parentNode.parentNode.classList.remove('is-active');
		});
	}

	/*
	Close all tooltips by click anywhere
	 */
	document.addEventListener('mouseup', function(e) {
		let container = document.querySelector('.tooltip.is-active');
		if (!!container && !container.contains(e.target)) {
			closeAllTooltips();
		}
	});
};

const closeAllTooltips = () => {
	const tooltips = document.querySelectorAll('.tooltip');
	for (let i = 0; i < tooltips.length; i++) {
		tooltips[i].classList.remove('is-active');
	}
}