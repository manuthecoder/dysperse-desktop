const { ipcRenderer, contextBridge } = require('electron');
const {
    START_NOTIFICATION_SERVICE,
    NOTIFICATION_SERVICE_STARTED,
    NOTIFICATION_SERVICE_ERROR,
    NOTIFICATION_RECEIVED,
    TOKEN_UPDATED,
} = require('firebase-electron/dist/electron/consts');

const appId = '1:990040256661:web:360fdff51ea75e82116b9c';
const apiKey = 'AIzaSyCnsAoggI2N6ZcVo23r6YlcDsNzKxtqaE0';
const projectId = 'dysperse';
const vapidKey = 'BAvJ6756CsbwOerFCb_NlrhYMPktQyyeKgBVDFH7RiIBL3IXdel_TJ3CmnO2qwSCkIUXBhSdJsxFgbcFPp8IVRE';

// Listen for service successfully started
ipcRenderer.on(NOTIFICATION_SERVICE_STARTED, (_, token) => {
    console.log('Notification service successfully started');
    console.log('Token: ', token);
    contextBridge.exposeInMainWorld("WINDOWS_PUSH_TOKEN", token);
});
// Handle notification errors
ipcRenderer.on(NOTIFICATION_SERVICE_ERROR, (_, error) => {
    // do something
});
// Send FCM token to backend
ipcRenderer.on(TOKEN_UPDATED, (_, token) => {
    // Send token
});
// Display notification
ipcRenderer.on(NOTIFICATION_RECEIVED, (_, { notification }) => {
    console.log('Notification received: ', notification);

    new Notification(notification.title, {
        body: notification.body,
        title: notification.title,
        data: notification.data,
        badge: "https://assets.dysperse.com/monochrome-small.png",
        icon: "https://assets.dysperse.com/v12-rounded/ios/167.png",
    });
});
// Start service
ipcRenderer.send(START_NOTIFICATION_SERVICE, { appId, apiKey, projectId, vapidKey });
// or
window.ipc.send(START_NOTIFICATION_SERVICE, { appId, apiKey, projectId, vapidKey });