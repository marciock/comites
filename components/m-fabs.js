import {Generator} from '../dist/nerdcreator';

export class MFab extends Generator{
    create(){

        const fixed=document.createElement('div');
        const float=document.createElement('a');
        const i=document.createElement('I');
        const ul=document.createElement('ul');

        const color=this.getProps('color');
        const icon=this.getProps('icon');

        fixed.classList.add('fixed-action-btn');
        float.classList.add('btn-floating','btn-large');
        i.classList.add('large','material-icons');

        let colorArray=new Array();
        if(color !==null){
            colorArray=color.split(" ");

            colorArray.map((f)=>{
                float.classList.add(f);
            }).join('');
            
        }else{
            float.classList.add('red');
        }

        if(icon !==null){
            i.innerHTML=icon;
        }else{
            i.innerHTML='mode_edit';
        }

        ul.innerHTML=this.innerHTML;
        this.innerHTML=null;

        float.appendChild(i);
        fixed.appendChild(float);
        fixed.appendChild(ul);

        this.appendChild(fixed);
    }
}
customElements.define('m-fab',MFab);

export class MFabItem extends Generator{

    create(){

        const li=document.createElement('li');
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
        

        a.classList.add('btn-floating');
        icon.classList.add('material-icons');
        icon.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        a.appendChild(icon);
        li.appendChild(a);
        this.appendChild(li);
        
    }
}
customElements.define('m-fab-item',MFabItem);

export class InitFab{

    constructor(fab){

        let elems=fab.children.item(0);

      let instances= M.FloatingActionButton.init(elems);

      
    }
}