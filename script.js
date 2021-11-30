const toggles = document.querySelectorAll('.toggle')
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active')
    console.log('hi')
  })
})
