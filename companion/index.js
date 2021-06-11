import { settingsStorage } from "settings";
import * as messaging from "messaging";

settingsStorage.getItem("reduceAnimations") == null && settingsStorage.setItem("reduceAnimations", "false");

// Settings have been changed
settingsStorage.onchange = function (evt) {
    if (evt.newValue !== evt.oldValue) {
        sendValue(evt.key, evt.newValue);
    }
};

// Send key/value pair
function sendValue(key, val) {
    console.log("Send Value");
    if (!key || !val) {
        return;
    }

    sendSettingData({
        key: key,
        value: JSON.parse(val)
    });
}

// Send JSON object
function sendSettingData(data) {
    console.log("Send Settings Data");
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        messaging.peerSocket.send(data);
    } else {
        console.log("No peerSocket connection");
    }
}
