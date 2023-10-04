
let searchBox = document.querySelector('#search-box');
let img = document.querySelectorAll('.container .container-img .img ');

searchBox.oninput = () => {

    img.forEach(hide => hide.style.display = "none");
    let value = searchBox.value;
     
    img.forEach(filter => {

        let title = filter.getAttribute('data-title');

        if (value == title) {
            filter.style.display = 'block';
        }

        if (searchBox.value == '') {
            filter.style.display = 'block';
        }
    })
}


