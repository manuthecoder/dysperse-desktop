const createDMG = require("electron-installer-dmg");

createDMG({
  appPath: "/path/to/app.app",
  name: "Dysperse",
  icon: "./src/icon.icns",
});
