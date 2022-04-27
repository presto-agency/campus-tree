import {getDataFromLocalStorage} from "../../localStorage/getDataFromLocalStorage";

export const selectCategories = () => {
	const steps = document.querySelectorAll('.sign-in .steps-content');

	for (let i = 0; i < steps.length; i++) {
		const inputs = steps[i].querySelectorAll('.tree-checkboxes .input');
		console.log(inputs);
	}
	// const selectedLeavesLocal = getDataFromLocalStorage('')
	/*
	Change event, add selected to modal list
	 */
	// for (let i = 0; i < inputs.length; i++) {
	// 	inputs[i].addEventListener('change', () => {
	//
	// 	});
	// }

	/*
	Remove from modal list
	 */
};

export const getSelectedCategories = () => {
	const inputs = document.querySelectorAll('.tree-checkboxes .input:checked');
	if (inputs.length) {
		for (let i = 0; i < inputs.length; i++) {
			const modal = document.querySelector(inputs[i].dataset.eventModalId);
			const modalList = modal.querySelector('.selected-list');
			const value = inputs[i].value;
			const thumb = inputs[i].dataset.eventThumb;
			const category = inputs[i].dataset.eventCategory;
			const inputId = inputs[i].getAttribute('id');
			const template = `<li class="selected-link">
                            <div class="selected-link-club">
                              <div class="selected-link-img">
                                <img src="${thumb}" alt="${value}">
                              </div>
                              <div class="selected-link-name">
                                <div class="section-title">
                                  <h4 class="h-4">${value}</h4>
                                </div>
                                <p class="tag tag-clubs">${category}</p>
                              </div>
                            </div>
                            <label for="${inputId}" class="selected-link-remove">
                              <div class="link color-alumni-hover">
																<span class="link-icon">
																	<svg class="svg svg__24 color-alumni">
																		<use xlink:href="../images/sprite/sprite.svg#remove-circle"></use>
																	</svg>
																</span>
																<span class="link-title">Delete from selected</span>
															</div>
                            </label>
                          </li>`;

			modalList.insertAdjacentHTML('beforeend', template);
		}
	}
};