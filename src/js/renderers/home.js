import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
		setLabelsPosition();
	}
	onEnterCompleted() {
		console.log('enter completed to home');
	}
}

export default HomeRenderer;