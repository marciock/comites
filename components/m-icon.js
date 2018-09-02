import {Generator} from '../dist/nerdcreator';

export class MIcon extends Generator{

    create(){

        const i=document.createElement('i');

        const size=this.getProps('size');
        const color=this.getProps('color');
        let colorArray=new Array();

        if(size !==null){
            i.classList.add(size);
        }

        i.classList.add('material-icons');

        if(color !==null){

            colorArray=color.split(' ');

            colorArray.map((f)=>{
                i.classList.add(f);
            }).join('');
        }

        i.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(i);
    }
}
customElements.define('m-icon',MIcon);