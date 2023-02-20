const {app, BrowserWindow} = require('electron'); 

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600, 
        icon: __dirname + '/assets/bookshelf.png', 
        webPreferences:{
            nodeIntegration: true, 
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow); 
