// let btns = document.querySelectorAll('#book-list .delete')

// Array.from(btns).forEach(function(btn){
//  btn.addEventListener('click', function(e){

//     const li = e.target.parentElement
//     li.parentNode.removeChild(li)
//  })
// })


// let list = document.querySelector('#book-list ul')

// list.addEventListener('click', function(e){
//     if(e.target.className === "delete"){
//         const li = e.target.parentElement
//         list.removeChild(li)
//     }
// })


// let list = document.querySelector('#book-list ul')

// list.addEventListener('click', function(e){
  
//    if(e.target.className == 'delete'){

//     const li = e.target.parentElement
//     list.removeChild(li)
//    }
// })


// let list = document.querySelector('#book-list ul')

// list.addEventListener('click', function(e){
//    if(e.target.className == 'delete'){

//     const li = e.target.parentElement
//     list.removeChild(li)

//    }


// })


//delete books

let list = document.querySelector('#book-list ul')

list.addEventListener('click', function(e){

  if(e.target.className == 'delete'){

    const li = e.target.parentElement
    list.removeChild(li)
  }
})

//add books


// let addform = document.forms['add-book'];

// addform.addEventListener('submit', function(e){
//   e.preventDefault()

//   const value= addform.querySelector('input[type="text"]').value



//   //create elements

//   const li = document.createElement('li')
//   const bookName = document.createElement('span')
//   const deleteBtn = document.createElement('span')

//   deleteBtn.textContent = 'delete'
//   bookName.textContent = value;


//   li.appendChild(bookName);
//   li.appendChild(deleteBtn);
//   list.appendChild(li);

// })


let addform =document.forms['add-book']

addform.addEventListener('submit', function(e){

 e.preventDefault()

 const value = addform.querySelector('input[type="text"]').value


 const li = document.createElement('li')
 const bookName = document.createElement('span')
 const deleteBtn = document.createElement('span')

  deleteBtn.textContent = 'delete'
 bookName.textContent = value;


 bookName.classList.add('name')
 deleteBtn.classList.add('delete')



 li.appendChild(bookName)
 li.append(deleteBtn)
 list.appendChild(li)
})


let hidebook = document.querySelector('#hide')

hidebook.addEventListener('change' , function(e){


    if(hidebook.checked){
        list.style.display ='none'

    }else{
        list.style.display ='block'
    }
})


let searchBar = document.forms['search-books'].querySelector('input')

searchBar.addEventListener('keyup' , function(e){
   const term = e.target.value.toLowerCase()
   const books = list.getElementsByTagName('li')

   Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;

    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block'
    }else{
      book.style.display = 'none'
    }
   })
})