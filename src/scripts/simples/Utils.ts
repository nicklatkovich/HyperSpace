///<reference path="Vector2.ts"/>

class Utils {
    public static getWindowSize():Vector2 {
        return new Vector2(window.innerWidth, window.innerHeight);
    }

    public static getCanvasById(id:string):HTMLCanvasElement {
        var canvases:NodeListOf<HTMLCanvasElement> = document.getElementsByTagName("canvas");
        for (var i = 0; i < canvases.length; i++) {
            var canvas:HTMLCanvasElement = canvases[i];
            if (canvas.id = id) {
                return canvas;
            }
        }
        return null;
    }
}