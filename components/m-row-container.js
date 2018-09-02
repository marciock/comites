import {Generator} from '../dist/nerdcreator';

export class MRowContainter extends Generator{

    create(){

        const div=document.createElement('div');

        div.classList.add('row','container');

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(div);

    }
}
customElements.define('m-row-container',MRowContainter);