export const scrollHeight = () => {
    function resize() {
        let leftSideHeight = document.querySelector('.sign-in-content').scrollHeight;
        let signWrapper = document.querySelector('.sign-in');
        let rightSide = document.querySelector('.steps-content.active');
        let greenBg = document.querySelector('.sign-in-green-bg');
        if(rightSide){
            let rightSideHeight = rightSide.scrollHeight;
            if (leftSideHeight > rightSideHeight){
                greenBg.style.height = leftSideHeight + 'px';
            }
            else{
                greenBg.style.height = rightSideHeight + 'px';
            }
        }
        else {
            let signWrapperHeight = signWrapper.scrollHeight;
            greenBg.style.height = signWrapperHeight + 'px';
        }
    }
    resize();
    window.onresize = function() {
    resize();
    };
}