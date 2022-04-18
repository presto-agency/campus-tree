import Highway from '@dogstudio/highway';
import '../sass/index.scss';
import Fade from "./router-transitions/fade";
import WithoutScrollToTop from "./router-transitions/withoutScrollToTop";
import HomeRenderer from "./renderers/home";
import BranchRenderer from "./renderers/branch";
import PeopleRenderer from "./renderers/people";
import LeafRenderer from "./renderers/leaf";
import {initInnerDropdowns, initStaticDropdowns} from "./common/dropdown/toggleDropdown";
import {checkboxChangeLabel} from "./common/checkboxes/checkboxChangeLabel";
import {closeSearchPanel, searchDropdown} from "./common/dropdown/searchDropdown";
import {treeNavigation} from "./common/tree/treeNavigation";
import InnerRenderer from "./renderers/inner";
import EditorRenderer from "./renderers/editor";
import SearchResultRenderer from "./renderers/searchResult";
import Branch from "./router-transitions/branch";
import authorizationRenderer from "./renderers/authorization";
import {headerMobileFilters} from "./common/general/headerMobileFilters";
import {resetFilters} from "./common/general/resetFilters";
import {toggleNav} from "./common/general/toggleNav";

/*
Routing
 */
const H = new Highway.Core({
	renderers: {
		home: HomeRenderer,
		branch: BranchRenderer,
		people: PeopleRenderer,
		leaf: LeafRenderer,
		inner: InnerRenderer,
		searchResult: SearchResultRenderer,
		editor: EditorRenderer,
		authorization: authorizationRenderer,
	},
	transitions: {
		default: Fade,
		contextual: {
			pagination: WithoutScrollToTop,
			branch: Branch
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
H.on('NAVIGATE_IN', ({ to, location }) => {
	initInnerDropdowns();
	checkboxChangeLabel();
	closeSearchPanel();
	treeNavigation();
	console.log('init highway');
});

/*
Init scrips on DOM loaded
 */
document.addEventListener('DOMContentLoaded', function(event) {
	initInnerDropdowns();
	initStaticDropdowns();
	checkboxChangeLabel();
	searchDropdown();
	treeNavigation();
	headerMobileFilters();
	resetFilters();
	toggleNav();
	console.log('init DOM');
});