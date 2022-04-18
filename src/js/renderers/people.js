import Highway from '@dogstudio/highway';
import {resetFilters} from "../common/general/resetFilters";
import {toggleCategoryFilters} from "../common/general/toggleCategoryFilters";
import {initAvatarFirstLastName} from "../common/general/initAvatarFirstLastName";
import {changeView} from "../common/tree/changeView";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {switchPersonModal} from "../common/modal/switchPersonModal";
import {setListViewMode} from "../common/general/setListViewMode";

class PeopleRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to people');
		resetFilters();
		toggleCategoryFilters();
	}
	onEnterCompleted() {
		console.log('enter completed to people');
		initAvatarFirstLastName();
		changeView();
		updatePaginationNumbers();
		switchPersonModal();
		setListViewMode();
	}
}

export default PeopleRenderer;