import Highway from '@dogstudio/highway';
import {initDatepicker} from "../common/datepicker/initDatepicker";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {resetFilters} from "../common/general/resetFilters";
import {toggleCategoryFilters} from "../common/general/toggleCategoryFilters";
import {changeView} from "../common/tree/changeView";

class BranchRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to branch');
		initDatepicker();
		resetFilters();
		toggleCategoryFilters();
	}
	onEnterCompleted() {
		console.log('enter completed to branch');
		setLabelsPosition();
		updatePaginationNumbers();
		changeView();
	}
}

export default BranchRenderer;