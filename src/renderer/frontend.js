/*
import url from 'url'
import path from 'path'
import applyFilter from './filters'
import { setIpc, sendIpc } from './ipcRendererEvents'
*/



window.addEventListener('load', () => {
  console.log('VA a mandar IPC')
  addClickEvent()
  //botonClick()
  /*
  setIpc()
  addImagesEvents()
  searchImagesEvent()
  selectEvent()
  openDirectory()
  */
})
function addClickEvent() {
  debugger
  console.log("Event clicked")
  const btnOpenDir = document.getElementById('openDirectory')
  console.log("Event clicked")
  //console.log(tmp)
  console.log(btnOpenDir)
  console.log("ese fue el dom")
  btnOpenDir.addEventListener('click', function () {
    console.log("clicked!!!")
  })
}
function botonClick() {
  console.log("Clicked!")
}

/*
function openDirectory() {
  const openDirectory = document.getElementById('openDirectory')
  openDirectory.addEventListener('click', () => {
    sendIpc()
  })
}
*/