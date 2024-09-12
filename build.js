const convertToWindowsStore = require("electron-windows-store");

convertToWindowsStore({
  makePri: true,
  identityName: "36696Dysperse.318114851B57C",
  publisher: "CN=05A5E870-040E-4832-AE11-60DF88D43653",
  packageName: "Dysperse",
  packageDisplayName: "Dysperse",
  publisherDisplayName: "Dysperse",

  packageVersion: "1.0.9.0",
  packageBackgroundColor: "transparent",

  inputDirectory: "./out/Dysperse-win32-x64",
  outputDirectory: "./out/installer",
  packageDescription: "Dysperse is minimalist productivity, built for humans.",
  assets: "./assets",
  makeVersionWinStoreCompatible: true,
  manifest:
    "./manifest.xml",
});
