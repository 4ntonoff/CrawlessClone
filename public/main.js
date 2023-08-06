const { app, BrowserWindow, Menu } = require("electron");
Menu.setApplicationMenu(false)
require("@electron/remote/main").initialize();
function createWindow() {

  const win = new BrowserWindow({
    width: 1280,
    minWidth: 1000,
    height: 720,
    minHeight: 600,
    icon: __dirname + "/logo192.png",
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
