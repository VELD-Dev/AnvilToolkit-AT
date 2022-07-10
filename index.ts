const config = require('./config');
const fs = require('node:fs');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        maximizable: true,
        movable: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

function loadCleanerPage() {
    document.querySelector("#viewport-handler")?.innerHTML
}