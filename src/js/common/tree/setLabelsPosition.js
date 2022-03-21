export const setLabelsPosition = () => {
	const branches = document.querySelectorAll('.branch');
	const categories = document.querySelectorAll('.tree-categories-item');
	for (let i = 0; i < branches.length; i++) {
		let branchId = branches[i].getAttribute('id');
		!!categories[i] ? categories[i].setAttribute('data-branch-id', branchId) : null;
	}
}