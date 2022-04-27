import Highway from '@dogstudio/highway';

class InnerRenderer extends Highway.Renderer {
    onEnter() {

    }
    onEnterCompleted() {
        (function turnCross() {
            let items = document.querySelectorAll('.faq-list');
            items.forEach(item => {
                item.onclick = () => {
                    let activeBtn = document.querySelector('.faq-list.active')
                    item.classList.toggle('active')
                    if (activeBtn) {
                        activeBtn.classList.remove('active')
                    }
                }
            })
        }());
    }
}

export default InnerRenderer;