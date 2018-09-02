import {Generator} from '../dist/nerdcreator';

export class MHeader extends Generator{

    create(){

        const h=this.getProps('h');

        const header=document.createElement('h'+h);

        header.classList.add('header');

        header.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(header);

    }
}
customElements.define('m-header',MHeader);