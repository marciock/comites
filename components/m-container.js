import {Generator} from '../dist/nerdcreator';

export class MContainer extends Generator{

    create(){

        const div=document.createElement('div');

        div.classList.add('container');

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(div);
        
    }
}
customElements.define('m-container',MContainer);