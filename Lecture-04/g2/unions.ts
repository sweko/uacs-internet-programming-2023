export const x = 3;
export const y = "Hello";

type Direction = "up" | "down" | "left" | "right";

interface Point {
    x: number;
    y: number;
}

function move(point: Point, direction: Direction):Point {
    switch (direction) {
        case "up":
            return { x: point.x, y: point.y + 1 };
        case "down":
            return { x: point.x, y: point.y - 1 };
        case "left":
            return { x: point.x - 1, y: point.y };
        case "right":
            return { x: point.x + 1, y: point.y };
    }
}

const p = { x: 3, y: 4 };
console.log(move(p, "up"));