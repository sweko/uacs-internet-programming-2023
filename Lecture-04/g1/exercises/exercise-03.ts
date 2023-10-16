interface Point {
    x: number;
    y: number;
}

interface Point3D extends Point {
    z : number;
}

type Direction = "up" | "down" | "left" | "right";

const origin2d: Point = {
    x: 0,
    y: 0
}

const movePoint2d = (point: Point, direction: Direction) => {
    if (direction === "up") {
        return {
            x: point.x,
            y: point.y + 1
        }
    }
    if (direction === "down") {
        return {
            x: point.x,
            y: point.y - 1
        }
    }
    if (direction === "left") {
        return {
            x: point.x - 1,
            y: point.y
        }
    }
    if (direction === "right") {
        return {
            x: point.x + 1,
            y: point.y
        }
    }
    // never gets executed
    return point;
}

