const section = document.querySelector('section')
const slides = section.querySelectorAll('div')

let index = 0

let pattern = [
  [4, 5, 2, 0, 0, 0],
  [4, 5, 2, 2, 0, 0],
  [0, 3, 2, 3, 0, 0],
  [0, 2, 1, 2, 1, 0],
  [0, 0, 2, 4, 3, 2],
  [0, 0, 0, 1, 1, 1],
]

let timeout

const nextSlide = () => {
  index += 1
  index %= pattern.length

  section.style.gridTemplateColumns = pattern[index]
    .map((p) => {
      return `${p}fr`
    })
    .join(' ')

  slides.forEach((slide, slideIndex) => {
    if (pattern[index][slideIndex] === 0) {
      slide.classList.add('hide')
    } else {
      slide.classList.remove('hide')
    }
  })

  clearTimeout(timeout)
  timeout = setTimeout(nextSlide, 2000)
}

const previousSlide = () => {
  index -= 1
  index %= pattern.length

  section.style.gridTemplateColumns = pattern[index]
    .map((p) => {
      return `${p}fr`
    })
    .join(' ')

  slides.forEach((slide, slideIndex) => {
    if (pattern[index][slideIndex] === 0) {
      slide.classList.add('hide')
    } else {
      slide.classList.remove('hide')
    }
  })

  clearTimeout(timeout)
  timeout = setTimeout(nextSlide, 2000)
}
section.addEventListener('click', nextSlide)
window.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", , "ArrowUp", or "ArrowDown"

    if (key === 'ArrowLeft') {
      previousSlide();
    }
    else if (key === 'ArrowRight') {
      nextSlide();
    }
});
timeout = setTimeout(nextSlide, 2000)
