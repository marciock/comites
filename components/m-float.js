import {Generator} from '../dist/nerdcreator';

export class MFloat extends Generator{

    create(){

        const a=document.createElement('a');
        const icon=document.createElement('I');
        const color=this.getProps('color');
        const url=this.getProps('url');
        if(url !==null){
            a.href=url;
        }
        let colorArray=new Array();
  
        if(color !==null){

            colorArray=color.split(" ");

            colorArray.map((f)=>{
                a.classList.add(f);
            }).join('');
            
        }
        

        a.classList.add('btn-floating','waves-effect','waves-light','btn-large');
        icon.classList.add('material-icons');
        icon.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        a.appendChild(icon);
        this.appendChild(a);
        
    }
}
customElements.define('m-float',MFloat);

