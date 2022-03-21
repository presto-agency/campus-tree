export const treeNavigation = () => {
	if (document.querySelector('.tree') &&
		document.querySelectorAll('.tree .branch').length &&
		document.querySelectorAll('.tree .leaf').length) {
		/*
		Branches
		 */
		const branches = document.querySelectorAll('.tree .branch');
		const branchLink = document.querySelector('#branch-link');
		const branchLinkHref = branchLink.getAttribute('href');
		for (let i = 0; i < branches.length; i++) {
			branches[i].addEventListener('click', () => {
				const branchUrlParam = branches[i].getAttribute('data-url-param');
				if (!!branchUrlParam) {
					branchLink.setAttribute('href', `${branchLinkHref}?${branchUrlParam}`);
					branchLink.click();
				}
			});
		}

		/*
		Leaf
		 */
		const leaf = document.querySelectorAll('.tree .leaf');
		const leafLink = document.querySelector('#leaf-link');
		for (let i = 0; i < leaf.length; i++) {
			leaf[i].addEventListener('click', () => {
				leafLink.click();
			});
		}
	}
};