import Highway from '@dogstudio/highway';
import '../sass/index.scss';
import HomeRenderer from "./renderers/home";
import Fade from "./router-transitions/fade";

/*
Routing
 */
const H = new Highway.Core({
	renderers: {
		home: HomeRenderer,
	},
	transitions: {
		default: Fade,
	}
});