import Highway from '@dogstudio/highway';

class BranchRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to branch');
	}
	onEnterCompleted() {
		console.log('enter completed to branch');
	}
}

export default BranchRenderer;