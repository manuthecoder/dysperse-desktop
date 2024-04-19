const createDMG = require("electron-installer-dmg");

createDMG({
  appPath: "./out/Dysperse-darwin-x64",
  name: "Dysperse",
  icon: "./src/icon.icns",
});
