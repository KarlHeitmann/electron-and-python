'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import devtools from './devtools'

if (process.env.NODE_ENV === 'development') {
  devtools()
}

app.on('before-quit', () => {
  console.log('Saliendo...')
})

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Hola Mundo',
    center: true,
    maximizable: false,
    show: false,
  })

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('move', () => {
    const position = win.getPosition()
    console.log(`La posicion es ${position}`)
  })

  win.on('closed', () => {
    win = null
    app.quit()
  })

  win.loadURL('https://devdocs.io')
  // win.loadURL(`file://${__dirname}/renderer/index.html`)
})

ipcMain.on('ping', (event, arg) => {
  console.log(`Se recibió ping - ${arg}`)
  event.sender.send('pong', new Date())
})

