import styles from './input.css'

class Input {

    handleAddFigure(handler) {
        this.inputContainer.addEventListener('submit', event => {
            event.preventDefault();
            if (this.input.value) {
                handler(this.input.value);
                this.input.value = ''
            }
        })
    }

    handleResetCanvas(handler) {
        this.resetCanvasBtn.addEventListener('click', () => {
            handler();
        })
    }

    render() {
        this.app = document.querySelector('.root');
        this.inputContainer = document.createElement('form');
        this.inputContainer.className = styles.inputContainer

        this.input = document.createElement('textarea');
        this.input.className = styles.input;
        this.input.required = true;
        this.input.cols = 80;
        this.input.rows = 6;
        this.input.placeholder = 'Введите описание фигуры, пример: ellipse -p [75, 75] -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)'

        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = 'Submit';
        this.submitBtn.className = styles.button;


        this.resetCanvasBtn = document.createElement('button');
        this.resetCanvasBtn.type = 'button';
        this.resetCanvasBtn.innerText = 'Reset Canvas';
        this.resetCanvasBtn.className = styles.button;


        this.btnBlock = document.createElement('div');
        this.btnBlock.append(this.submitBtn, this.resetCanvasBtn);

        this.inputContainer.append( this.input, this.btnBlock);
        this.app.append(this.inputContainer);
    }

}

export default Input
