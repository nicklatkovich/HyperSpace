class Vector2 {
    public x:number;
    public y:number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    public equals(vector2:Vector2):boolean {
        return vector2.x == this.x && vector2.y == this.y;
    }
}