// if script tag is in head
// document.addEventListener('DOMContentLoaded'. function() { put code in hee });

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

// Search books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();

    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) !== -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

/* Deletion: Inefficient for event bubbling
var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns);
for(i in btns) {
    btns[i].addEventListener('click', function(e){
        e.target.parentElement.remove()
    });
}
*/

// Deletion: Efficient for event bubbling
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // Create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // Add classes
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');

    // Append to doc
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

// Hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});

// Tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});