import Highway from '@dogstudio/highway';

class PeopleRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to people');
	}
	onEnterCompleted() {
		console.log('enter completed to people');
	}
}

export default PeopleRenderer;