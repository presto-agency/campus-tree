import Highway from '@dogstudio/highway';
import '../sass/index.scss';
import Fade from "./router-transitions/fade";
import WithoutScrollToTop from "./router-transitions/withoutScrollToTop";
import HomeRenderer from "./renderers/home";
import BranchRenderer from "./renderers/branch";
import PeopleRenderer from "./renderers/people";
import LeafRenderer from "./renderers/leaf";
import {initDropdowns} from "./common/dropdown/toggleDropdown";
import {checkboxChangeLabel} from "./common/checkboxes/checkboxChangeLabel";
import {searchDropdown} from "./common/dropdown/searchDropdown";
import {treeNavigation} from "./common/tree/treeNavigation";
import SearchResultRenderer from "./renderers/searchResult";

/*
Routing
 */
const H = new Highway.Core({
	renderers: {
		home: HomeRenderer,
		branch: BranchRenderer,
		people: PeopleRenderer,
		leaf: LeafRenderer,
		searchResult: SearchResultRenderer,
	},
	transitions: {
		default: Fade,
		contextual: {
			pagination: WithoutScrollToTop,
		}
	}
});

/*
Require svg icons to stripe
 */
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../images/icons/', true, /\.svg$/));

/*
Init scripts on Highway enter
 */
H.on('NAVIGATE_IN', () => {
	// initDropdowns();
	checkboxChangeLabel();
	// searchDropdown();
	treeNavigation();
	console.log('init highway');
});

/*
Init scrips on DOM loaded
 */
document.addEventListener('DOMContentLoaded', function(event) {
	initDropdowns();
	checkboxChangeLabel();
	searchDropdown();
	treeNavigation();
	console.log('init DOM');
});