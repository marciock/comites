import {Generator} from '../dist/nerdcreator';

export class MRaised extends Generator{

    create(){

        const a=document.createElement('a');
        const icon=this.getProps('icon');
        const align=this.getProps('align');
        const color=this.getProps('color');
        const url=this.getProps('url');
        if(url !==null){
            a.href=url;
        }
       // const textColor=this.getProps('text-color');



        let colorArray=new Array();
       
        if(color !==null){

            colorArray=color.split(" ");

            colorArray.map((f)=>{
                a.classList.add(f);
            }).join('');
            
        }
        

        a.classList.add('waves-effect','waves-light','btn');

        if(icon !==null){
            const micon=document.createElement('I');

            switch (align) {
                case 'left':
                micon.classList.add('material-icons','left');
                    
                    break;
                case 'right':
                micon.classList.add('material-icons','right');
                    
                    break;
                case null:
                micon.classList.add('material-icons','left');
                    
                    break;
                default:
                micon.classList.add('material-icons','left');
                    break;
            }
            a.textContent=this.textContent;
            this.innerHTML=null;
            micon.textContent=icon;
            a.appendChild(micon);
        }else{
            a.textContent=this.textContent;
            this.innerHTML=null;
        }
          
        this.appendChild(a);
        
    }
}
customElements.define('m-raised',MRaised);