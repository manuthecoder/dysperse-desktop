const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");
const path = require("path");

module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./src/icon",
    name: "Dysperse",
  },
  rebuildConfig: {},
  makers: [
    {
      // Path to the icon to use for the app in the DMG window
      name: "@electron-forge/maker-dmg",
      config: {
        icon: path.join(__dirname, "src/icon.icns"),
      },
    },
    {
      name: "@electron-forge/maker-appx",
      config: {
        identityName: "36696Dysperse.318114851B57C",
        publisher: "CN=05A5E870-040E-4832-AE11-60DF88D43653",
        applicationId: "Dysperse",
        displayName: "Dysperse",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
