class Controller {
    constructor(model, inputBlock, canvas, errorWindow) {

        this.handleAddFigure = this.handleAddFigure.bind(this);
        this.handleResetCanvas = this.handleResetCanvas.bind(this);

        this.model = model;
        this.inputBlock = inputBlock;
        this.canvas = canvas;
        this.errorWindow = errorWindow;


        this.canvas.render();
        this.inputBlock.render();
        this.errorWindow.render();

        this.inputBlock.handleAddFigure(this.handleAddFigure);
        this.inputBlock.handleResetCanvas(this.handleResetCanvas);
    }

    handleAddFigure(input) {
        try {
            input.split('\n').forEach((figure, index) => {
                if (figure !== '') this.model.add(figure, index + 1)
            });
        } catch (err) {
            this.errorWindow.setErrorMessage(err.message)
        } finally {
            this.canvas.clearCanvas();
            if (this.model.figures.length > 0) {
                this.model.figures.forEach(figure => this.canvas.draw(figure))
            }
        }
    }

    handleResetCanvas() {
        try {
            this.model.clearData();
            this.canvas.clearCanvas();
        } catch (err) {
            throw new Error(`Ошибка очистки`);
        }
    }
}

export default Controller
