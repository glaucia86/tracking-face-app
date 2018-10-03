/**
 * File: app.js
 * Data: 03/10/2018
 * Description: Arquivo responsável por tratar a parte da lógica do desenvolvimento
 * do reconhecimento facial por meio da lib: tracking.js
 * @author: Glaucia Lemos
 */

'use strict'

function init() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const tracker = new tracking.ObjectTracker('face');

    tracker.setInitialScale(4);
    tracker.setEdgesDensity(0.1);
    tracker.setStepSize(2);

    tracking.track('#video', tracker, { camera: 'true' });

    tracker.on('track', event => {
        // console.log(event);
        context.clearRect(0,0, canvas.width, canvas.height);
        event.data.forEach(rect => {
            context.strokeStyle = '#ff0000';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '12px Helvetica';
            context.fillStyle = "#fff";
            context.lineWidth = 2;
            
            // Aqui estou testando preenchimento de texto de info do canvas que indentifica a face:
            context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x + rect.width + 20, rect.y + 20);
            context.fillText(`y: ${rect.y}, h: ${rect.height}`, rect.x + rect.width + 20, rect.y + 40);
        });
    });
}
window.onload = init();
