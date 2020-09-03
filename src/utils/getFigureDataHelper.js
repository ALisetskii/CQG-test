class getFigureDataHelper {

    static getFigureCoords(input, type, index) {
        const lineCoordsRegExp = /(-p (\[\d+, \d+\])| \[\d+, \d+\] ){2}/;     // обязательный пробел после '-p' и после скобок
        const rectangleCoordsRegExp = /(-p (\[\d+, \d+\])| \[\d+, \d+\] ){2}/;
        const triangleCoordsRegExp = /-p (\[\d+, \d+\]| \[\d+, \d+\] ){3}/;
        const circleCoordsRegExp = /-p \[\d+, \d+\] -r \d+/;
        const ellipseCoordsRegExp = /-p \[\d+, \d+\] -r1 \d+ -r2 \d+/;
        const pointsRegExp = /\[\d+, \d+\]/gm;
        let coords = []
        switch (type) {
            case 'line' : {
                if (lineCoordsRegExp.test(input) && input.match(pointsRegExp).length === 2) {
                    coords = input.match(pointsRegExp).map(el => JSON.parse(el));
                }
                break;
            }
            case 'rectangle': {
                if (rectangleCoordsRegExp.test(input) && input.match(pointsRegExp).length === 2) {
                    coords = input.match(pointsRegExp).map(el => JSON.parse(el));
                }
                break;
            }
            case 'triangle': {
                if (triangleCoordsRegExp.test(input) && input.match(pointsRegExp).length === 3) {
                    coords = input.match(pointsRegExp).map(el => JSON.parse(el));
                }
                break;
            }
            case  'circle': {
                const radRegExp = /-r \d+/gm;
                if (circleCoordsRegExp.test(input)) {
                    coords = {
                        center: input.match(pointsRegExp).map(el => JSON.parse(el))[0],
                        radius: input.match(radRegExp)[0].split(' ')[1] // цифры после '-r'
                    }
                }
                break;
            }
            case 'ellipse': {
                const rad1RegExp = /-r1 \d+/gm;
                const rad2RegExp = /-r2 \d+/gm;
                if (ellipseCoordsRegExp.test(input)) {
                    coords = {
                        center: input.match(pointsRegExp).map(el => JSON.parse(el))[0],
                        radius1: input.match(rad1RegExp)[0].split(' ')[1],  // цифры после '-r1' и  '-r2'
                        radius2: input.match(rad2RegExp)[0].split(' ')[1],
                    }
                }
                break;
            }
            default:
                throw new Error(`Ошибка в координатах, на строке ${index}`);
        }
        if (coords.length < 2) throw new Error(`Ошибка в координатах, на строке ${index}`);
        return coords
    }

    static getOptions(input, index) {
        const colorOptionRegExp = /-c/gm;
        const bgColorOptionRegExp = /-b/gm;

        const colorRegExp = /(-c rgb\(\d+, \d+, \d+\))|(-c rgba\(\d+, \d+, \d+, (1\)|0?\.\d+\)))|(-c #[A-Fa-f0-9]{6})/;
        const bgColorRegExp = /-b rgb\(\d+, \d+, \d+\)|-b rgba\(\d+, \d+, \d+, (1\)|0?\.\d+\))|-b #[A-Fa-f0-9]{6}/;

        const colorOptions = {
            color: 'black',
            bgColor: 'white'
        }
        if (colorOptionRegExp.test(input)) {
            if (colorRegExp.test(input)) {
                colorOptions.color = input.match(colorRegExp)[0].slice(3)   // символы после '-c '
            } else {
                throw new Error(`Ошибка в опциях цвета, на строке ${index}`);
            }
        }
        if (bgColorOptionRegExp.test(input)) {
            if (bgColorRegExp.test(input)) {
                colorOptions.bgColor = input.match(bgColorRegExp)[0].slice(3)  // символы после '-b '
            } else {
                throw new Error(`Ошибка в опциях заливки, на строке ${index}`);
            }
        }

        return colorOptions
    }

    static getLineType(input) {
        const lineTypeRegExp = /-dashed/;
        if (lineTypeRegExp.test(input)) return true
        return false
    }
}

export default getFigureDataHelper
