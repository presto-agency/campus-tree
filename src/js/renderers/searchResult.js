import Highway from '@dogstudio/highway';
import {closeAllDropdowns} from "../common/dropdown/toggleDropdown";
import {loadImages} from "../common/general/loadImages";
import {changeView} from "../common/tree/changeView";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {setListViewMode} from "../common/general/setListViewMode";

class SearchResultRenderer extends Highway.Renderer {
	onEnter() {
		closeAllDropdowns();
	}
	onEnterCompleted() {
		loadImages();
		changeView();
		updatePaginationNumbers();
		setListViewMode();
	}
}

export default SearchResultRenderer;