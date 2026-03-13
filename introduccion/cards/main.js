//import {personas} from './helper/personas';
import Card from './components/Card.js';
import Header from './components/header.js'
import { apiData } from './helper/data.js';
import './style.css'

const empresa = {
  titulo: 'Perfiles de Usuario',
  giro: 'Rol de trabajo'
}

document.body.appendChild(Header(empresa));
const main = document.createElement('main');
apiData.forEach((apiData) =>{
    main.appendChild(Card(apiData));
   
})

document.body.appendChild(main)
