import styles from "../views/canvas.css";

function getInfoUl () {
    const ul = document.createElement('ul');
    const info = ['Допустимые фигуры: line, rectangle, triangle, circle, ellipse',
        'Размер холста: 500 x 500 точек',
        'Формат ввода: \n figureName -p [xCoordinate, yCoordinate] \n -c rgba(0-255, 0-255, 0-255, 0-1)  цвет в rgb или hex \n -b rgba(0-255, 0-255, 0-255, 0-1)  цвет заливки в rgb или hex',
        'Можно использовать rgb, например: rgb(0-255, 0-255, 0-255)',
        'Можно использовать hex формат: -c #FF0000',
        'Опция -dashed делает линии пунктирными: \n line -p [0, 0] [500, 500] -dashed',
        'Для отрисовки отрезка нужны 2 пары координат - начала и конца : \n line -p [0, 0] [100, 100]',
        'Для отрисовки прямоугольника нужны 2 пары координат - начала и конца его диагонали: \n rectangle -p [0, 0] [50, 50]',
        'Для отрисовки треугольника нужны 3 пары координат - его точек: \n triangle -p [50, 300] [50, 100] [300, 100]',
        'Для отрисовки круга нужна 1 пара координат - его центра и радиус: \n circle -p [75, 75] -r 25',
        'Для отрисовки эллипса нужна 1 пара координат - его центра и 2 радиуса: \n ellipse -p [75, 75] -r1 50 -r2 25',
        'При отрисовке некскольких фигур их описание отделяется переводом строки',
    ];
    info.forEach(rule => {
        const li = document.createElement('li');
        li.innerText = `${rule}`
        li.className = styles.infoItem;
        ul.append(li)
    })
    return ul
}

export default getInfoUl
