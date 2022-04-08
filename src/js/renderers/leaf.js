import Highway from '@dogstudio/highway';
import {toggleTooltip} from "../common/general/toggleTooltip";
import {copyToClipboard} from "../common/general/copyToClipboard";
import {initTabs} from "../common/general/initTabs";

class LeafRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to leaf');
		toggleTooltip();
		copyToClipboard();
		initTabs();
	}
	onEnterCompleted() {
		console.log('enter completed to leaf');
	}
}

export default LeafRenderer;