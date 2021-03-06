export const inputSearchTags = () =>{
    const input = document.querySelector('#objects');
    const suggestions = document.querySelector('.input-tags-suggestions ul');
    const objects = [];

    let clubs = document.querySelectorAll('.input-tags-suggestions>ul>li');
    clubs.forEach(el => {
        objects.push(el.innerHTML)
    })

    !!suggestions ? suggestions.innerHTML = '' : null;

    function search(str) {
        let results = [];
        const val = str.toLowerCase();

        for (let i = 0; i < objects.length; i++) {
            if (objects[i].toLowerCase().indexOf(val) > -1) {
                results.push(objects[i]);
            }
        }

        return results;
    }

    function searchHandler(e) {
        const inputVal = e.currentTarget.value;
        let results = [];
        if (inputVal.length > 0) {
            results = search(inputVal);
        }
        showSuggestions(results, inputVal);
    }

    function showSuggestions(results, inputVal) {

        suggestions.innerHTML = '';

        if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                let item = results[i];
                const match = item.match(new RegExp(inputVal, 'i'));
                item = item.replace(match[0], match[0]);
                suggestions.innerHTML += `<li>${item}</li>`;
            }
            suggestions.classList.add('has-suggestions');
        } else {
            results = [];
            suggestions.innerHTML = '';
            suggestions.classList.remove('has-suggestions');
        }

    }

    function createDiv(current) {
        if(checkoutTag(current)){
            suggestions.innerHTML = '';
            suggestions.classList.remove('has-suggestions');
            input.value = '';
            return;
        }
        else{
            let newEl = document.createElement('li');
            let result = document.querySelector('.input-tags-results');
            newEl.innerHTML =  `<span></span>${current}`;
            result.appendChild(newEl);
            suggestions.innerHTML = '';
            suggestions.classList.remove('has-suggestions');
            input.value = '';
        }
    }

    function useSuggestion(e) {
        createDiv(e.target.innerText)
        removeTag();
    }

    function removeTag() {
        let existTags = document.querySelectorAll('.input-tags-results>li>span');
        if (existTags.length > 0){
            for (let existTag of existTags){
                existTag.onclick = () => {
                    existTag.parentNode.remove()
                }
            }
        }
    }

    function createTag(e) {
        if (e.keyCode === 32){
            e.preventDefault();
            createDiv(input.value);
            removeTag();
        }
    }

    function checkoutTag(value) {
        let existTags = document.querySelectorAll('.input-tags-results>li');
        for(let exist of existTags){
            if(value == exist.textContent){
                return(value == exist.textContent)
            }
        }
    }

    if (!!input && !!suggestions) {
        input.addEventListener('keyup', searchHandler);
        input.addEventListener('keydown', createTag);
        suggestions.addEventListener('click', useSuggestion);
        removeTag();
    }

};