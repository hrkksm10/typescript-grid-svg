import paper from 'paper';

class Point {
    private element: SnapElement;
    constructor(x: number, y: number) {
        this.element = paper.rect(x, y, 20, 20).attr({fill: 'red', cursor: 'move'});
        this.element.drag(this.onMove, this.onStart, this.onEnd, this, this, this);
    }

    private onStart(_x: number, _y: number, _event: DragEvent) {
        console.log('start');
    }

    private onMove(_dx: number, _dy: number, x: number, y: number, _event: DragEvent) {
        const matrix = Snap.matrix(paper.node.getScreenCTM().inverse());
        const sx = matrix.x(x, y);
        const sy = matrix.y(x, y);
        this.element.attr({x: ~~(sx / 20) * 20, y: ~~(sy / 20) * 20});
    }

    private onEnd(_event: DragEvent) {
        console.log('end');
    }
}
export default Point;
