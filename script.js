// Appear on scroll
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}


// Filter highliting
let age = document.querySelectorAll('.age')
for (let i = 0; i < age.length; i++) {
  age[i].addEventListener('click', () => {
    if (age[i].classList.contains('selected')) {
      age[i].classList.remove('selected')
    } else {
      for (let j = 0; j < age.length; j++) {
        age[j].classList.remove('selected')
      }
      age[i].classList.add('selected')
    }
  })
}

let year = document.querySelectorAll('.year')
for (let i = 0; i < year.length; i++) {
  year[i].addEventListener('click', () => {
    if (year[i].classList.contains('selected')) {
      year[i].classList.remove('selected')
    } else {
      for (let j = 0; j < year.length; j++) {
        year[j].classList.remove('selected')
      }
      year[i].classList.add('selected')
    }
  })
}

let pub = document.querySelectorAll('.pub')
for (let i = 0; i < pub.length; i++) {
  pub[i].addEventListener('click', () => {
    if (pub[i].classList.contains('selected')) {
      pub[i].classList.remove('selected')
    } else {
      for (let j = 0; j < pub.length; j++) {
        pub[j].classList.remove('selected')
      }
      pub[i].classList.add('selected')
    }
  })
}


// Popup
const openBtn = document.getElementById('open-modal')
const closeBtn = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const modalInner = document.getElementById('modal-inner')
const modalImage = document.getElementById('modal-image')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')
const modalPrice = document.getElementById('modal-price')



closeBtn.addEventListener('click', () => {
  modal.classList.remove('open')
})

function populateModal(book) {
  modalImage.setAttribute('src', `${book.image}`)
  modalTitle.textContent = `${book.title}`
  modalText.textContent = `${book.text}`
  modalPrice.textContent = `${book.price}`
}

/*document.addEventListener('click', (e) => {
  if (e.target != modalInner && e.target != openBtn) modal.classList.remove('open')
})
*/





// Books click
const bookBza = document.querySelector("[data-key='0']");
bookBza.addEventListener('click', () => {
  populateModal(bookBzaInfo)
  modal.classList.add('open')
})
const book1 = document.querySelector("[data-key='1']");
book1.addEventListener('click', () => {
  populateModal(book1Info)
  modal.classList.add('open')
})
const book2 = document.querySelector("[data-key='2']");
book2.addEventListener('click', () => {
  populateModal(book2Info)
  modal.classList.add('open')
})
const book3 = document.querySelector("[data-key='3']");
book3.addEventListener('click', () => {
  populateModal(book3Info)
  modal.classList.add('open')
})
const book4 = document.querySelector("[data-key='4']");
book4.addEventListener('click', () => {
  populateModal(book4Info)
  modal.classList.add('open')
})
const book5 = document.querySelector("[data-key='5']");
book5.addEventListener('click', () => {
  populateModal(book5Info)
  modal.classList.add('open')
})
const book6 = document.querySelector("[data-key='6']");
book6.addEventListener('click', () => {
  populateModal(book6Info)
  modal.classList.add('open')
})
const book7 = document.querySelector("[data-key='7']");
book7.addEventListener('click', () => {
  populateModal(book7Info)
  modal.classList.add('open')
})
const book8 = document.querySelector("[data-key='8']");
book8.addEventListener('click', () => {
  populateModal(book8Info)
  modal.classList.add('open')
})
const book9 = document.querySelector("[data-key='9']");
book9.addEventListener('click', () => {
  populateModal(book9Info)
  modal.classList.add('open')
})
const book10 = document.querySelector("[data-key='10']");
book10.addEventListener('click', () => {
  populateModal(book10Info)
  modal.classList.add('open')
})
const book11 = document.querySelector("[data-key='11']");
book11.addEventListener('click', () => {
  populateModal(book11Info)
  modal.classList.add('open')
})
const book12 = document.querySelector("[data-key='12']");
book12.addEventListener('click', () => {
  populateModal(book12Info)
  modal.classList.add('open')
})
const book13 = document.querySelector("[data-key='13']");
book13.addEventListener('click', () => {
  populateModal(book13Info)
  modal.classList.add('open')
})
const book14 = document.querySelector("[data-key='14']");
book14.addEventListener('click', () => {
  populateModal(book14Info)
  modal.classList.add('open')
})
const book15 = document.querySelector("[data-key='15']");
book15.addEventListener('click', () => {
  populateModal(book15Info)
  modal.classList.add('open')
})


// Books info
const bookBzaInfo = {
  image: './images/book-covers/bza.jpg',
  title: 'Қаңтар оқиғасы: Ақорда үшін күрес',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '2 500 тг.'
}
const book1Info = {
  image: './images/book-covers/1.jpg',
  title: 'Балықтар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 000 тг.'
}
const book2Info = {
  image: './images/book-covers/2.jpg',
  title: '100 животных в фотографиях',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 200 тг.'
}
const book3Info = {
  image: './images/book-covers/3.jpg',
  title: '100 важных слов',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 100 тг.'
}
const book4Info = {
  image: './images/book-covers/4.jpg',
  title: 'Құралдың атауы',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '900 тг.'
}
const book5Info = {
  image: './images/book-covers/5.jpg',
  title: 'Қимыл атауы',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 100 тг.'
}
const book6Info = {
  image: './images/book-covers/6.jpg',
  title: 'Үй жануарлары',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '800 тг.'
}
const book7Info = {
  image: './images/book-covers/7.jpg',
  title: 'Туыстар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 400 тг.'
}
const book8Info = {
  image: './images/book-covers/8.jpg',
  title: 'Жануарлар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 200 тг.'
}
const book9Info = {
  image: './images/book-covers/9.jpg',
  title: 'Тустер',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '700 тг.'
}
const book10Info = {
  image: './images/book-covers/10.jpg',
  title: 'ТуыМенің денемстар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '900 тг.'
}
const book11Info = {
  image: './images/book-covers/11.jpg',
  title: 'Құстар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 000 тг.'
}
const book12Info = {
  image: './images/book-covers/12.jpg',
  title: 'Көкөністер',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 100 тг.'
}
const book13Info = {
  image: './images/book-covers/13.jpg',
  title: 'Жемiс-жидектер',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '900 тг.'
}
const book14Info = {
  image: './images/book-covers/14.jpg',
  title: 'Ағаштар',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 200 тг.'
}
const book15Info = {
  image: './images/book-covers/15.jpg',
  title: 'Жәндіктер',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque repellat, aspernatur nulla perspiciatis illo adipisci alias, labore sapiente cumque corrupti optio distinctio perferendis voluptas beatae recusandae autem, at dolore.',
  price: '1 000 тг.'
}