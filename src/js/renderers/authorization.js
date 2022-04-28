import Highway from '@dogstudio/highway';
import {authorizationNav} from "../common/authorization/authorizationNav";
import {initRegistrationLottie} from "../common/authorization/moveLottieOnStep";
import {showPassword} from "../common/authorization/showPassword";
import {initDatepicker} from '../common/datepicker/initDatepicker';
import {inputSearchTags} from '../common/authorization/inputSearchTags';
import {authorizationPopUp} from '../common/authorization/authorizationPopup';
import {mobileTree} from '../common/authorization/mobileTree';
import {initAvatarFirstLastName} from "../common/general/initAvatarFirstLastName";
import {toggleCategoryFilters} from "../common/general/toggleCategoryFilters";
import {resetFilters} from "../common/general/resetFilters";
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {getSelectedLeaves, selectCategories} from "../common/authorization/selectCategories";
import {registrationStep3Validation} from "../common/validation/registrationStep3Validation";
import {registrationStep4Validation} from "../common/validation/registrationStep4Validation";
import {loginValidation} from "../common/validation/loginValidation";
import {inputFileUploading} from "../common/uploading/inputFileUploading";
import {passwordValidation} from "../common/validation/passwordValidation";

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        showPassword();
        initDatepicker();
        initRegistrationLottie();
        inputSearchTags();
        mobileTree();
        authorizationPopUp();
        toggleCategoryFilters();
        resetFilters();
        selectCategories();
        registrationStep3Validation();
        registrationStep4Validation();
        passwordValidation();
        loginValidation();
        inputFileUploading();
    }
    onEnterCompleted() {
        initAvatarFirstLastName();
        authorizationNav();
        setLabelsPosition();
        updatePaginationNumbers();
        getSelectedLeaves();
    }
}

export default authorizationRenderer;