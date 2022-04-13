export const changeView = () => {
	const btn = document.querySelector('.change-view-trigger');
	const tree = document.querySelector('.tree');
	const switcher = document.querySelector('.view-switcher');
	if (!!btn && !!tree) {
		btn.addEventListener('click', () => {
			if (tree.dataset.viewMode === 'default' || !tree.dataset.viewMode) {
				tree.setAttribute('data-view-mode', 'list');
			} else {
				tree.setAttribute('data-view-mode', 'default');
			}
		});
	}
	if (!!switcher && !!tree) {
		const switcherTriggers = switcher.querySelectorAll('.view-mode');
		for (let i = 0; i < switcherTriggers.length; i++) {
			switcherTriggers[i].addEventListener('click', () => {
				switcher.querySelector('.view-mode.is-active').classList.remove('is-active');
				let viewMode = switcherTriggers[i].dataset.viewTrigger;
				tree.setAttribute('data-view-mode', viewMode);
				switcherTriggers[i].classList.add('is-active');
			});
		}
	}
};