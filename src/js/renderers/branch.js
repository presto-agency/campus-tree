import Highway from '@dogstudio/highway';
import {initDatepicker} from "../common/datepicker/initDatepicker";

class BranchRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to branch');
		initDatepicker();
	}
	onEnterCompleted() {
		console.log('enter completed to branch');
	}
}

export default BranchRenderer;