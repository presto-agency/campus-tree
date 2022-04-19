import Highway from '@dogstudio/highway';
import {authorizationNav} from "../common/authorization/authorizationNav";
import {initRegistrationLottie, moveLottieToStep} from "../common/authorization/moveLottieOnStep";
import {showPassword} from "../common/authorization/showPassword";
import {initDatepicker} from '../common/datepicker/initDatepicker';
import {inputSearchTags} from '../common/authorization/inputSearchTags';
import {authorizationPopUp} from '../common/authorization/authorizationPopup';
import {scrollHeight} from '../common/authorization/scrollHeightBg';
import {mobileTree} from '../common/authorization/mobileTree';
import {initAvatarFirstLastName} from "../common/general/initAvatarFirstLastName";

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to authorization page');
        authorizationNav();
        showPassword();
        initDatepicker();
        initRegistrationLottie();
        inputSearchTags();
        mobileTree();
        authorizationPopUp();
        scrollHeight();
    }
    onEnterCompleted() {
        console.log('enter completed to authorization page');
        initAvatarFirstLastName();
    }
}

export default authorizationRenderer;