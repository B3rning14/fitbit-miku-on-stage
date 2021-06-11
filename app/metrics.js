import document from "document";
import { battery } from "power";
import { HeartRateSensor } from "heart-rate";
import { today } from "user-activity";
import { gettext } from "i18n";

const metric0 = document.getElementById("metric0");
const metric1 = document.getElementById("metric1");
const metric2 = document.getElementById("metric2");
const metric3 = document.getElementById("metric3");
const metric4 = document.getElementById("metric4");
const metric5 = document.getElementById("metric5");

let heartRate = 0;
if (HeartRateSensor) {
    const hrm = new HeartRateSensor();
    hrm.addEventListener("reading", () => {
        heartRate = hrm.heartRate;
    });
    hrm.start();
}

export function metricTicks() {
    metric0.text = `${gettext("metrics.battery").toUpperCase()}: ${Math.floor(battery.chargeLevel)}%`;
    metric1.text = `${gettext("metrics.heartRate").toUpperCase()}:  ${heartRate}`;
    metric2.text = `${gettext("metrics.distance").toUpperCase()}: ${today.adjusted.distance}`;
    metric3.text = `${gettext("metrics.steps").toUpperCase()}: ${today.adjusted.steps}`;
    metric4.text = `${gettext("metrics.calories").toUpperCase()}: ${today.adjusted.calories}`;
    metric5.text = `${gettext("metrics.elevationGain").toUpperCase()}: ${today.adjusted.elevationGain}`;
}
