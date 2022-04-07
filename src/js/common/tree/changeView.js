export const changeView = () => {
	const btn = document.querySelector('.change-view-trigger');
	const tree = document.querySelector('.tree');
	if (!!btn && !!tree) {
		btn.addEventListener('click', () => {
			if (tree.dataset.viewMode === 'default' || !tree.dataset.viewMode) {
				tree.setAttribute('data-view-mode', 'list');
			} else {
				tree.setAttribute('data-view-mode', 'default');
			}
		});
	}
};