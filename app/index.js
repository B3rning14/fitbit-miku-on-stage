import clock from "clock";
import { display } from "display";
import { me as appbit } from "appbit";
import { BodyPresenceSensor } from "body-presence";
import * as messaging from "messaging";

import { startAnimation, endAnimation } from "./mikuAnimation";
import { metricTicks } from "./metrics";
import { clockTick } from "./clock";

let reduceAnimations = false;

clock.ontick = (evt) => {
    clockTick(evt);
    metricTicks();
};

messaging.peerSocket.addEventListener("message", (evt) => {
    if (evt && evt.data && evt.data.key === "reduceAnimations") {
        reduceAnimations = evt.data.value;
        evt.data.value ? endAnimation() : startAnimation();
    }
});

if (appbit.permissions.granted("access_activity")) {
    if (BodyPresenceSensor) {
        const bodyPresence = new BodyPresenceSensor();
        bodyPresence.addEventListener("reading", () => {
            if (bodyPresence.present) {
                display.on = true;
                false === reduceAnimations && startAnimation();
                clock.granularity = "seconds";
            } else {
                display.on = false;
                endAnimation();
                clock.granularity = "off";
            }
        });
        bodyPresence.start();
    }
} else {
    display.on = true;
    false === reduceAnimations && startAnimation();
    clock.granularity = "seconds";
}
