import Highway from '@dogstudio/highway';
import {resetFilters} from "../common/general/resetFilters";
import {toggleCategoryFilters} from "../common/general/toggleCategoryFilters";
import {initAvatarFirstLastName} from "../common/general/initAvatarFirstLastName";
import {changeView} from "../common/tree/changeView";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {switchPersonModal} from "../common/modal/switchPersonModal";
import {setListViewMode} from "../common/general/setListViewMode";
import {setBoxHeight} from "../common/box/setBoxHeight";

class PeopleRenderer extends Highway.Renderer {
	onEnter() {
		resetFilters();
		toggleCategoryFilters();
	}
	onEnterCompleted() {
		initAvatarFirstLastName();
		changeView();
		updatePaginationNumbers();
		switchPersonModal();
		setListViewMode();
		setBoxHeight();
	}
}

export default PeopleRenderer;