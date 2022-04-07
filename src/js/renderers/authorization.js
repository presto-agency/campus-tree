import Highway from '@dogstudio/highway';
import {authorizationNav} from "../common/authorization/authorizationNav";
import {initRegistrationLottie, moveLottieToStep} from "../common/authorization/moveLottieOnStep";
import {showPassword} from "../common/authorization/showPassword";
import {moveLottieOnStep, moveLottieToStep} from "../common/authorization/moveLottieOnStep";
import {initDatepicker} from '../common/datepicker/initDatepicker';

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to authorization page');
        authorizationNav();
        showPassword();
        moveLottieOnStep();
        moveLottieToStep(20);
        initDatepicker();
        initRegistrationLottie();
    }
    onEnterCompleted() {
        console.log('enter completed to authorization page');
    }
}

export default authorizationRenderer;