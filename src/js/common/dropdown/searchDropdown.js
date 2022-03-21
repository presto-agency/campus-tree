export const searchDropdown = () => {
	const searchInput = document.querySelector('.search .input');
	const header = document.querySelector('.header');
	const closeBtn = header.querySelector('.close-filters');
	const activeClassName = 'is-filters-active';
	if (!!searchInput && !!header) {
		/*
		Show search result on dropdown
		 */
		searchInput.addEventListener('keypress', () => {
			if (!!searchInput.value) {
				setTimeout(() => {
					searchInput.parentElement.classList.contains('dropdown') ? searchInput.parentElement.classList.add('is-active') : null;
				}, 1000);
			}
		});

		/*
		Show header filters
		 */
		searchInput.addEventListener('focus', () => {
			header.classList.add(activeClassName);
		});
		/*
		Hide header filters
		 */
		searchInput.addEventListener('blur', () => {
			!searchInput.value ? header.classList.remove(activeClassName) : null;
		});
		/*
		Close filters on click
		 */
		if (!!closeBtn) {
			closeBtn.addEventListener('click', () => {
				header.classList.remove(activeClassName);
				searchInput.value = '';
			});
		}
	}
}