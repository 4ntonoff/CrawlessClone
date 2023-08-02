const { app, BrowserWindow, Menu, screen } = require("electron");
// Menu.setApplicationMenu(false)
require("@electron/remote/main").initialize();
function createWindow() {
  const currentDisplay = screen.getDisplayNearestPoint(
    screen.getCursorScreenPoint()
  );

  const win = new BrowserWindow({
    width: 1000,
    minWidth: 1000,
    height: 600,
    minHeight: 600,
    icon: __dirname + "/favicon.ico",
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  win.webContents.setZoomFactor(currentDisplay.scaleFactor);
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
