import './index.css';
import Model from './models/model';
import Canvas from './views/canvas';
import Controller from './controllers/controller';
import Input from './views/input';
import ErrorWindow from './views/errorWindow';


// eslint-disable-next-line no-unused-vars
const controller = new Controller(new Model(), new Input(), new Canvas(), new ErrorWindow());
