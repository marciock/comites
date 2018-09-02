import {Generator} from '../dist/nerdcreator';

export class MFlat extends Generator{

    create(){

        const a=document.createElement('a');
        
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
        

        a.classList.add('btn-flat','waves-effect','waves-teal');
        a.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(a);
        
    }
}
customElements.define('m-flat',MFlat);