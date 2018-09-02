import {Generator} from '../dist/nerdcreator';

export class MCol extends Generator{

    create(){

        const col=document.createElement('div');
        const s=this.getProps('s');
        const m=this.getProps('m');
        const l=this.getProps('l');

        col.classList.add('col');

        if(s !==null){
            let conca='s'+s;
            col.classList.add(conca);
        }


        if( m !==null){
            let conca='m'+m;
            col.classList.add(conca);
        }


        if( l !==null){
            let conca='l'+l;
            col.classList.add(conca);
        }


        col.innerHTML=this.innerHTML;

        this.innerHTML=null;

        this.appendChild(col);
    }
}
customElements.define('m-col',MCol);