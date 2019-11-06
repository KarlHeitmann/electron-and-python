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
  console.log("Event clicked")
  const btnOpenDir = document.getElementById('openDirectory')
  console.log("Event clicked")
  //console.log(tmp)
  console.log(btnOpenDir)
  console.log("ese fue el dom")
  btnOpenDir.addEventListener('click', botonClick)
}
function botonClick() {
  console.log("Clicked!")
  var spawn = require("child_process").spawn
  console.log("1")
  var process = spawn('python', ["./hola_mundo.py",
    ""
  ]);
  console.log("2")
  /*
  var process = spawn('python', ["./hola_mundo.py",
    req.query.funds, // starting funds
    req.query.size, // (initial) wager size
    req.query.count, // wager count — number of wagers per sim
    req.query.sims // number of simulations
  ]);
  */
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
}

/*
function openDirectory() {
  const openDirectory = document.getElementById('openDirectory')
  openDirectory.addEventListener('click', () => {
    sendIpc()
  })
}
*/