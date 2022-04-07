export const toggleTooltip = () => {
	const tooltips = document.querySelectorAll('.tooltip');
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