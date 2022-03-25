import Highway from '@dogstudio/highway';
import {closeAllDropdowns} from "../common/dropdown/toggleDropdown";

class SearchResultRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to search result');
		closeAllDropdowns();
	}
	onEnterCompleted() {
		console.log('enter completed to search result');
	}
}

export default SearchResultRenderer;