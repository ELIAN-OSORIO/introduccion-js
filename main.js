//import {personas} from './helper/personas';
import Card from './components/Card.js';
import Header from './components/header.js'
import { apiData } from './helper/data.js';
import './style.css'

//const empresa = {
  //titulo: 'Manejo de Sistemas Agricola',
  //giro: 'Agricultura'
//}

//document.body.appendChild(Header(empresa));
const main = document.createElement('main');
apiData.forEach((apiData) =>{
    main.appendChild(Card(apiData));
   
})

document.body.appendChild(main)
