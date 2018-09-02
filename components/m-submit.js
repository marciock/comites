import {Generator} from '../dist/nerdcreator';

export class MSubmit extends Generator{

    create(){
        const btn=document.createElement('button');
        const icon=this.getProps('icon');
        const color=this.getProps('color');


        btn.classList.add('btn','waves-effect','waves-light');
        btn.type='submit';
        btn.name='action';

        let colorArray=new Array();
       
        if(color !==null){

            colorArray=color.split(" ");

            colorArray.map((f)=>{
                btn.classList.add(f);
            }).join('');
            
        }

        if(icon !==null){
            const i=document.createElement('I');
            i.classList.add('material-icons','right');
            i.innerHTML=icon;
            btn.innerHTML=this.innerHTML;
            this.innerHTML=null;
            btn.appendChild(i);
        }else{
            btn.innerHTML=this.innerHTML;
            this.innerHTML=null;
        }

        this.appendChild(btn);

    }
}

customElements.define('m-submit',MSubmit);