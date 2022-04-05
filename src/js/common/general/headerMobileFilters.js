export const headerMobileFilters = () => {
	const trigger = document.querySelector('#toggle-header-mobile-filters');
	const header = document.querySelector('.header');
	if (!!trigger && !!header) {
		trigger.addEventListener('click', () => {
			header.classList.add('is-mobile-filters-active');
		});
	}
};