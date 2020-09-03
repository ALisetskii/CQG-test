import getFigureDataHelper from "../utils/getFigureDataHelper";

class Model {
    constructor() {
        this.figures = [];
        this.acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];
    }

    add(input, index) {
        const figureType = this.getFigureType(input, index);
        const figureCoords = getFigureDataHelper.getFigureCoords(input, figureType, index);
        const options = getFigureDataHelper.getOptions(input, index);
        const dashed = getFigureDataHelper.getLineType(input);
        this.figures.push({
            figureType,
            figureCoords,
            options,
            dashed,
        });
    }

    clearData() {
        this.figures = [];
    }

    getFigureType(input, index) {
        const figureType = input.trimStart().split(' ')[0];
        if (this.acceptedFigures.includes(figureType)) return figureType;
        throw new Error(`Не корректный тип фигуры в строке ${index}`);
    }
}

export default Model
