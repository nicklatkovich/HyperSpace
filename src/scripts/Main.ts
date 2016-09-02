///<reference path="CanvasController.ts"/>
///<reference path="simples\Utils.ts"/>

var main:Main = null;

class Main {
    private canvasController:CanvasController = new CanvasController(Utils.getCanvasById("draw"));
}

window.onload = function () {
    main = new Main();
};