import Tween from 'gsap';

export const toggleCategoryFilters = () => {
	const toggleTriggers = document.querySelectorAll('.toggle-filters');
	for (let i = 0; i < toggleTriggers.length; i++) {
		toggleTriggers[i].addEventListener('click', (e) => {
			e.preventDefault();
			let filtersId = toggleTriggers[i].dataset.filterId;
			const triggerFilter = document.querySelector(filtersId);
			if (triggerFilter.classList.contains('is-visible')) {
				Tween.set(triggerFilter, {
					display: 'none',
					onComplete: () => {
						triggerFilter.classList.remove('is-visible');
					},
				});
			} else {
				Tween.set(triggerFilter, {
					display: 'block',
					onComplete: () => {
						triggerFilter.classList.add('is-visible');
					}
				})
			}
		});
	}
};