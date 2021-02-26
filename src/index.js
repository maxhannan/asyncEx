import './styles/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
import getGif from './tester'

const srchBtn = document.querySelector('#srchBtn')
console.log(srchBtn)
const srchInp = document.querySelector('input')

const handleSrch = (e) => {
  const newSrch = srchInp.value
  srchInp.value = ''
  getGif(newSrch)
}

srchBtn.addEventListener('click', handleSrch)
