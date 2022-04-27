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