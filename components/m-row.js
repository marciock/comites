import {Generator} from '../dist/nerdcreator';

export class MRow extends Generator{

    create(){

        const div=document.createElement('div');

        div.classList.add('row');

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(div);
        
    }
}
customElements.define('m-row',MRow);