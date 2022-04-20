export const initStaticDropdowns = () => {
	const dropdowns = document.querySelectorAll('.header .dropdown');
	switchDropdowns(dropdowns);

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

export const initInnerDropdowns = () => {
	const dropdowns = document.querySelectorAll('[data-router-view] .dropdown');
	switchDropdowns(dropdowns);
	hideAllDropdownOnMouseLeave();
};

const switchDropdowns = (dropdowns) => {
	for (let i = 0; i < dropdowns.length; i++) {
		const trigger = dropdowns[i].querySelector('.dropdown-trigger');
		if (!!trigger && !dropdowns[i].classList.contains('dropdown-static')) {
			trigger.addEventListener('click', () => {
				if (dropdowns[i].classList.contains('is-active')) {
					dropdowns[i].classList.remove('is-active');
				} else {
					dropdowns[i].classList.add('is-active');
				}
			});
		}
	}
};

export const closeAllDropdowns = () => {
	const dropdowns = document.querySelectorAll('.dropdown');
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('is-active');
	}
};

const hideAllDropdownOnMouseLeave = () => {
	const elements = document.querySelectorAll('.tree-events-item');
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('mouseleave', () => {
			closeAllDropdowns();
		});
	}
};