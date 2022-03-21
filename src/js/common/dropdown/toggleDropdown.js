export const initDropdowns = () => {
	const dropdowns = document.querySelectorAll('.dropdown');
	for (let i = 0; i < dropdowns.length; i++) {
		const trigger = dropdowns[i].querySelector('.dropdown-trigger');
		if (!!trigger) {
			trigger.addEventListener('click', () => {
				dropdowns[i].classList.contains('is-active') ? closeDropdown(dropdowns[i]) : openDropdown(dropdowns[i]);
			});
		}
	}

	/*
	Close all dropdowns on click anywhere, exclude active trigger
	 */
	document.addEventListener('mouseup', function(e) {
		let container = document.querySelector('.dropdown.is-active');
		if (!!container && !container.contains(e.target)) {
			closeAllDropdowns();
		}
	});

	/*
	Close dropdown by click
	 */
	const closeBtn = document.querySelector('.dropdown-btn-close');
	if (!!closeBtn) {
		closeBtn.addEventListener('click', () => {
			closeAllDropdowns();
		});
	}
};

const openDropdown = (dropdown) => {
	dropdown.classList.add('is-active');
};

const closeDropdown = (dropdown) => {
	dropdown.classList.remove('is-active');
};

export const closeAllDropdowns = () => {
	const dropdowns = document.querySelectorAll('.dropdown');
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('is-active');
	}
};