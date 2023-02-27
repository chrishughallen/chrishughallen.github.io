let words = ['HTML.', 'CSS.', 'Javascript.', 'Python.', 'Ruby.']
let span = document.getElementById("tech-swap")

const typeWriter = (wordIndex, i) => {
  let word = words[wordIndex]
  span.innerHTML += word[i]
  if(i < word.length - 1) {
    setTimeout(() => {
      i++
      typeWriter(wordIndex, i)
    }, 100)
  } 
  else if(wordIndex == 4) {
    setTimeout(() => {
      span.innerHTML = ""
      typeWriter(0, 0)
    }, 2000)
  } 
  else {
    setTimeout(() => {
      span.innerHTML = ""
      wordIndex += 1
      typeWriter(wordIndex, 0)
    }, 2000)
  }
}

typeWriter(0, 0)