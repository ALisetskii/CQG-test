import styles from './canvas.css'
import getInfoUl from "../utils/getInfoUl";

class Canvas {
    clearCanvas() {
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, 500, 500);
    }

    draw(figureData) {
        const context = this.canvas.getContext('2d');
        context.strokeStyle = figureData.options.color;
        context.fillStyle = figureData.options.bgColor;
        if (figureData.dashed) context.setLineDash([3])

        switch (figureData.figureType) {
            case ('line'): {
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.closePath();
                context.stroke();
                break
            }

            case ('rectangle'): {
                context.beginPath();
                context.strokeRect(...figureData.figureCoords[0], ...figureData.figureCoords[1]);
                context.fillRect(...figureData.figureCoords[0], ...figureData.figureCoords[1]);
                context.closePath();
                break
            }
            case ('triangle'): {
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.lineTo(...figureData.figureCoords[2]);
                context.closePath();
                context.stroke();
                context.fill();
                break
            }
            case ('circle'): {
                context.beginPath();
                context.arc(...figureData.figureCoords.center, figureData.figureCoords.radius, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();
                context.fill();
                break
            }
            case ('ellipse'): {
                context.beginPath();
                context.ellipse(...figureData.figureCoords.center, figureData.figureCoords.radius1, figureData.figureCoords.radius2, 0, 0, 2 * Math.PI)
                context.closePath();
                context.stroke();
                context.fill();
                break
            }
            default:
                break
        }
        context.setLineDash([]);
    }

    render() {
        this.root = document.querySelector('.root');
        this.canvasContainer = document.createElement('div');
        this.canvasContainer.className = styles.canvasContainer;
        this.canvas = document.createElement('canvas');
        this.canvas.className = styles.canvas;
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.infoContainer = document.createElement('div');
        this.infoContainer.className = styles.infoContainer;
        const ul = getInfoUl()
        this.infoContainer.append(ul)
        this.canvasContainer.append(this.canvas, this.infoContainer);
        this.root.append(this.canvasContainer);
    }
}

export default Canvas
