export const setBoxHeight = () => {
	const tree = document.querySelector('.tree');
	const box = document.querySelector('.box');
	if (!!tree && !!box) {
		const treeHeight = tree.getBoundingClientRect().height;
		console.log(treeHeight);
	//	33 51 82
		box.style.height = ( treeHeight - 33 - 37 ) + 'px';
	}
}