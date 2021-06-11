import document from "document";
const mikuAnimation = document.getElementById("miku_animation");

export function startAnimation() {
    mikuAnimation.animate("enable");
}

export function endAnimation() {
    mikuAnimation.animate("disable");
}
