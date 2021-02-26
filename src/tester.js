// GIPHY API KEY
const apiKey = 'at7Ih9RH6qiwV2dMbssJLo8hhVnDMdgd'
// GIF CONTAINER
const imgContainer = document.querySelector('#imgContainer')

const getGif = async (srch) => {
  imgContainer.innerHTML = ''
  const url = `
  https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${srch}
  `
  const img = new Image()
  try {
    const response = await fetch(url, {
      mode: 'cors'
    })
    const imgdata = await response.json()
    img.src = imgdata.data.images.original.url
    imgContainer.appendChild(img)
  } catch (error) {
    console.log(error)
    getGif('Cant Find')
  }
}

export default getGif
