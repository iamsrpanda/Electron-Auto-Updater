const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })