import Tween from 'gsap';
import {transition} from "../../constants/transitions";

export const setLabelsPosition = () => {
	const tree = document.querySelectorAll('.tree');
	/*
	Branches (categories)
	 */
	if (tree.length) {
		for (let j = 0; j < tree.length; j++) {
			const branches = tree[j].querySelectorAll('.branch');
			const categories = tree[j].querySelectorAll('.tree-categories-item');
			for (let i = 0; i < branches.length; i++) {
				let branchId = branches[i].getAttribute('id');
				!!categories[i] ? categories[i].setAttribute('data-branch-id', branchId) : null;
			}
			/*
			Leaves (events)
			 */
			const leaves = tree[j].querySelectorAll('.leaf');
			const events = tree[j].querySelectorAll('.tree-events-item');
			const checkboxes = tree[j].querySelectorAll('.tree-checkboxes-item');
			/*
			Get trees coordinates
			 */
			const treeX = tree[j].getBoundingClientRect().x;
			const treeY = tree[j].getBoundingClientRect().y;
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
								leaves[i].style.display = 'block';
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
				/*
				Checkboxes
				 */
				if (!!checkboxes[i]) {
					Tween.fromTo(checkboxes[i],
						{
							x: 0,
							width: 0,
							opacity: 0,
						},
						{
							x: x - treeX,
							width,
							duration: 0.1,
							ease: 'none',
							onComplete: () => {
								Tween.to(checkboxes[i], {
									opacity: 1,
									duration: transition.opacity.duration,
									ease: transition.opacity.ease,
								});
							}
						});
				}
			}
		}
	}
}