import Tween from 'gsap';
import {transition} from "../../constants/transitions";

export const setLabelsPosition = () => {
	const tree = document.querySelector('.tree');
	/*
	Branches (categories)
	 */
	if (!!tree) {
		const branches = document.querySelectorAll('.branch');
		const categories = document.querySelectorAll('.tree-categories-item');
		for (let i = 0; i < branches.length; i++) {
			let branchId = branches[i].getAttribute('id');
			!!categories[i] ? categories[i].setAttribute('data-branch-id', branchId) : null;
		}
		/*
		Leaves (events)
		 */
		const leaves = document.querySelectorAll('.leaf');
		const events = document.querySelectorAll('.tree-events-item');
		/*
		Get trees coordinates
		 */
		const treeX = document.querySelector('.tree').getBoundingClientRect().x;
		const treeY = document.querySelector('.tree').getBoundingClientRect().y;
		/*
		Set each leaf coordinates
		 */
		for (let i = 0; i < leaves.length; i++) {
			let x = leaves[i].getBoundingClientRect().x;
			let y = leaves[i].getBoundingClientRect().y;
			let width = leaves[i].getBoundingClientRect().width;
			let height = leaves[i].getBoundingClientRect().height;
			if (!!events[i]) {
				Tween.fromTo(events[i],
					{
						x: 0,
						y: 0,
						width: 0,
						height: 0,
						opacity: 0,
					},
					{
						x: x - treeX,
						y: y - treeY,
						width,
						height,
						duration: 0.1,
						ease: 'none',
						onComplete: () => {
							Tween.to(events, {
								opacity: 1,
								duration: transition.opacity.duration,
								ease: transition.opacity.ease,
							});
							Tween.to(categories, {
								opacity: 1,
								duration: transition.opacity.duration,
								ease: transition.opacity.ease,
							});
						}
					});
			} else {
				leaves[i].style.display = 'none';
			}
		}
	}
}