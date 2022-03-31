import Highway from '@dogstudio/highway';
import {initDatepicker} from "../common/datepicker/initDatepicker";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {setLabelsPosition} from "../common/tree/setLabelsPosition";

class BranchRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to branch');
		initDatepicker();
	}
	onEnterCompleted() {
		console.log('enter completed to branch');
		setLabelsPosition();
		updatePaginationNumbers();
	}
}

export default BranchRenderer;