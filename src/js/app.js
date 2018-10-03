/**
 * File: app.js
 * Data: 03/10/2018
 * Description: Arquivo responsável por tratar a parte da lógica do desenvolvimento
 * do reconhecimento facial por meio da lib: tracking.js
 * Author: Glaucia Lemos
 */

'use strict'

function init() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const tracker = new tracking.ObjectTracker('face');

    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', event => {
        console.log(event);
    });
}
window.onload = init();