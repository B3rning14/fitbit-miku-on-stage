import document from "document";
import * as util from "../common/utils";
import { preferences, locale } from "user-settings";
import strftime from "strftime";

const dateFormat = "%A %d %b %Y";

let localeSplit = locale.language.split("-");
localeSplit[1] = localeSplit[1].toUpperCase();
const newLocale = localeSplit.join("_");
const possibleLocale = [
    "de_DE",
    "en_CA",
    "en_US",
    "es_MX",
    "fr_FR",
    "it_IT",
    "nl_NL",
    "pt_BR",
    "ru_RU",
    "tr_TR",
    "zh_CN"
];

const strftimeLocalized = strftime.localizeByIdentifier(
    -1 === possibleLocale.indexOf(newLocale) ? 'en_US' : newLocale
);

const clockLabel = document.getElementById("clockLabel");
const clockShadow = document.getElementById("clockShadow");
const dateLabel = document.getElementById("dateLabel");
const dateShadow = document.getElementById("dateShadow");

export function clockTick(evt) {
    let today = evt.date;
    // <editor-fold desc="Date Format">
    dateLabel.text = strftimeLocalized(dateFormat, today);
    dateShadow.text = strftimeLocalized(dateFormat, today);
    // </editor-fold>
    // <editor-fold desc="Clock">
    let hours = today.getHours();
    if ("12h" === preferences.clockDisplay) {
        // 12h format
        hours = hours % 12 || 12;
    } else {
        // 24h format
        hours = util.zeroPad(hours);
    }
    let mins = util.zeroPad(today.getMinutes());
    let secs = util.zeroPad(today.getSeconds());

    clockLabel.text = `${hours}:${mins}:${secs}`;
    clockShadow.text = `${hours}:${mins}:${secs}`;
    // </editor-fold>
}
