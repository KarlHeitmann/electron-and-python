/*
import url from 'url'
import path from 'path'
import applyFilter from './filters'
import { setIpc, sendIpc } from './ipcRendererEvents'
*/



window.addEventListener('load', () => {
  console.log('VA a mandar IPC')
  botonClick()
  /*
  setIpc()
  addImagesEvents()
  searchImagesEvent()
  selectEvent()
  openDirectory()
  */
})
function addClickEvent() {
  console.log("Event clicked")
}
function botonClick() {
  console.log("Clicked!")
}

function openDirectory() {
  const openDirectory = document.getElementById('openDirectory')
  openDirectory.addEventListener('click', () => {
    sendIpc()
  })
}

function addImagesEvents () {
  const thumbs = document.querySelectorAll('li.list-group-item')

  for (let i = 0, length1 = thumbs.length; i < length1; i++) {
    thumbs[i].addEventListener('click', function () {
      changeImage(this)
    })
  }
}

function selectEvent () {
  const select = document.getElementById('filters')
  const tmp = document.getElementById('image-displayed')
  console.log(tmp)
  select.addEventListener('change', function () {
    applyFilter(this.value, tmp)
  })
}

function changeImage (node) {
  if (node) {
    document.querySelector('li.selected').classList.remove('selected')
    node.classList.add('selected')
    document.getElementById('image-displayed').src = node.querySelector('img').src
  } else {
    document.getElementById('image-displayed').src = ''
  }
}

function searchImagesEvent() {
  const searchBox = document.getElementById('search-box')

  searchBox.addEventListener('keyup', function () {
    const regex = new RegExp(this.value.toLowerCase(), 'gi')
    const val = this.value;
    const thumbs = document.querySelectorAll('li.list-group-item img')
    if (val.length > 0 ) {
      for (let i = 0, length1 = thumbs.length; i < length1; i++) {
        const fileUrl = url.parse(thumbs[i].src)
        const fileName = path.basename(fileUrl.pathname)
        if (fileName.match(regex)) {
          thumbs[i].parentNode.classList.remove('hidden')
        } else {
          thumbs[i].parentNode.classList.add('hidden')
        }
      }
    } else {
      const hidden = document.querySelectorAll('li.hidden')
      for (let i = 0, length1 = hidden.length; i < length1; i++) {
        hidden[i].classList.remove('hidden')
      }
    }
    selectFirstImage()
  })
}

function selectFirstImage() {
  const image = document.querySelector('li.list-group-item:not(.hidden)')
  changeImage(image)
}
