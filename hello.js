const div = document.createElement('div')
div.innerHTML = 'hello ya1234567890121'

document.body.appendChild(div)

if (module.hot) {
  module.hot.accept();
}