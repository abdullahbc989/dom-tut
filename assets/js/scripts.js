// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList = document.querySelector("#book-list");

// console.log("the parent node is:", bookList.parentNode);
// console.log("the parent element is:", bookList.parentElement);
// console.log("the children nodes are:", bookList.childNodes);

// The next sibling is a linebreak
// console.log("The next sibling of book-list is", bookList.nextSibling)
// The sibling after that is the actual form
// console.log("The next sibling of book-list>linebreak is", bookList.nextSibling.nextSibling)

// console.log("The next element sibling of book-list is", bookList.nextElementSibling)

// console.log("The previous sibling of book-list is", bookList.previousSibling)
// console.log("The previous element sibling of book-list is", bookList.previousElementSibling)

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too Cool 4 Skool'

// var h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function(e) {
//   e.target.innerHTML = "You just clicked me!";
// })

var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns);
for(i in btns) {
    btns[i].addEventListener('click', function(e){
        e.target.parentElement.remove()
    });
}