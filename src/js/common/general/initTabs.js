export const initTabs = () => {
	const tabs = document.querySelectorAll('.tabs');
	if (!!tabs.length) {
		for (let i = 0; i < tabs.length; i++) {
			let tabsButtons = tabs[i].querySelectorAll('.tabs-item');
			for (let j = 0; j < tabsButtons.length; j++) {
				tabsButtons[j].addEventListener('click', () => {
					resetActiveClasses(tabsButtons);
					tabsButtons[j].classList.add('is-active');
				});
			}
		}
	}
};

const resetActiveClasses = (buttons) => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('is-active');
	}
};