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