enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

interface Point {
    x: number;
    y: number;
}

let point: Point = {
    x: 0,
    y: 0
};

function printPoint({x, y}: Point) {
    console.log(`(${x}, ${y})`);
}

function move(point: Point, direction: Direction) {
    switch (direction) {
        case Direction.Up:
            point.y--;
            break;
        case Direction.Down:
            point.y++;
            break;
        case Direction.Left:
            point.x--;
            break;
        case Direction.Right:
            point.x++;
            break;
    }
}

printPoint(point);
move(point, Direction.Right);
printPoint(point);

export {};