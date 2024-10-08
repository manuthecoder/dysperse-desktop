const convertToWindowsStore = require("electron-windows-store");
const package = require('./package.json');
const fs = require('fs');
const { execSync } = require('child_process');

console.log("⏳ Generating manifest...")
const manifest = fs.readFileSync('./manifest.template.xml', 'utf8');
fs.writeFileSync('./manifest.xml', manifest.replace('PACKAGE_JSON_VERSION', package.version));

console.log("✅ Manifest generated!");
console.log("⏳ Building package (electorn-forge package)...")
execSync("electron-forge package", { stdio: 'inherit' });
console.log("✅ Package built!");
console.log("⏳ Converting package to Windows Store format...")
convertToWindowsStore({
  makePri: true,
  identityName: "36696Dysperse.318114851B57C",
  publisher: "CN=05A5E870-040E-4832-AE11-60DF88D43653",
  packageName: "Dysperse",
  packageDisplayName: "Dysperse",
  publisherDisplayName: "Dysperse",

  packageVersion: package.version,
  packageBackgroundColor: "transparent",

  inputDirectory: "./out/Dysperse-win32-x64",
  outputDirectory: "./out/installer",
  packageDescription: "Dysperse is minimalist productivity, built for humans.",
  assets: "./assets",
  makeVersionWinStoreCompatible: true,
  manifest: "./manifest.xml",
});
console.log("✅ Package converted to Windows Store format!");
