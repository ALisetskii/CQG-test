import styles from './errorWindowl.css'

class ErrorWindow {

    setErrorMessage(err) {
        this.errorMessage.innerText = `${err}`;
        this.errorWindow.className = styles.errorWindow
    }

    hideErrorWindow() {
        this.errorMessage.innerText = '';
        this.errorWindow.className = styles.errorWindowHidden
    }

    render() {
        this.app = document.querySelector('.root');
        this.errorWindow = document.createElement('div');
        this.errorWindow.className = styles.errorWindowHidden

        this.errorBlock = document.createElement('div');
        this.errorBlock.className = styles.errorBlock

        this.errorMessage = document.createElement('h4');

        this.checkErrorBtn = document.createElement('button');
        this.checkErrorBtn.innerText = 'Ok';

        this.errorBlock.append(this.errorMessage, this.checkErrorBtn);
        this.errorWindow.append(this.errorBlock)
        this.app.append(this.errorWindow);

        this.checkErrorBtn.addEventListener('click', () => {
            this.hideErrorWindow();
        })
    }
}

export default ErrorWindow
