export const authorizationPopUp = () => {
    let signIn = document.querySelector('.sign-in');
    let open = () =>{
        let elementsLink = document.querySelectorAll('.modal-trigger');
        elementsLink.forEach(link => link.addEventListener('click', function (e) {
        e.preventDefault();
        let attr = this.getAttribute('data-attr');
        let modalWindow = document.getElementById(attr);
        modalWindow.classList.add('active');
        // if (window.screen.width > 767){
        //     signIn.classList.add('popup');
        // }
        }))
    }
    let close = () => {
        let popupClose = document.querySelectorAll('.modal-close');
        let outside = window;
        let selectedActive = document.querySelector('.selected.active');
        popupClose.forEach(close => close.addEventListener('click', function (e) {
            e.preventDefault();
            let attr = this.getAttribute('data-close');
            let popup = document.getElementById(attr);
            popup.classList.remove('active');
            // if (window.screen.width > 1024){
            //     signIn.classList.remove('popup');
            // }
        }))
    }
    // let closeOutside = () => {
    //     window.onclick = (e) => {
    //         if(selectedActive){
    //             let select = document.querySelector('.selected-wrapper');
    //             let clickInside = select.contains(e.target);
    //             if(!clickInside){
    //                 console.log('hey')
    //             }
    //         }
    //     }
    // }
        open();
        close();
};

