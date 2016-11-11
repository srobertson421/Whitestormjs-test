import './styles.css';
import Please from 'pleasejs';
const body = document.querySelector('body');
const button = document.getElementById('button');

function changeColor() {
  body.style.backgroundColor = Please.make_color();
}

button.addEventListener('click', changeColor);