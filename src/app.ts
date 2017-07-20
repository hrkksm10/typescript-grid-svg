import paper from 'paper';
import Point from 'point';

class App {
    public render(): void {
        const body = document.getElementsByTagName('body');
        paper.appendTo(body[0]);
        for (let y = 20; y < 600; y += 20) {
            for (let x = 20; x < 800; x += 20) {
                paper.circle(x, y, 1.4).attr({fill: 'black'});
            }
        }
        const r = paper.rect(0, 0, 800, 600).attr({fill: '#bbb', opacity: 0.2});
        r.dblclick((_event, x, y) => {
            const matrix = Snap.matrix(paper.node.getScreenCTM().inverse());
            const sx = matrix.x(x, y);
            const sy = matrix.y(x, y);
            new Point(~~(sx / 20) * 20, ~~(sy / 20) * 20);
        });
    }
}
export default new App();
