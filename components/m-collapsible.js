import {Generator} from '../dist/nerdcreator';

    


export class MCollapsible extends Generator{

    create(){

        const ul=document.createElement('ul');
        const type=this.getProps('type');

        ul.classList.add('collapsible');

       if(type !==null){
            //accordion,expandable, popout
            ul.classList.add(type);
       }

       ul.innerHTML=this.innerHTML;
       this.innerHTML=null;

       this.appendChild(ul);

    }
}
customElements.define('m-collapsible',MCollapsible);

export class MCollapsibleItem extends Generator{

    create(){
        const li=document.createElement('li');
        const header=document.createElement('div');
        const body=document.createElement('div');
        const i=document.createElement('I');
        const content=document.createElement('span');
        const spanTitle=document.createElement('span');

        const icon=this.getProps('icon');
        const title=this.getProps('title');

       
        spanTitle.innerHTML=title;
        header.classList.add('collapsible-header');

        i.classList.add('material-icons');
        
        body.classList.add('collapsible-body');

        if(icon !==null){
            i.innerHTML=icon
        }else{
            i.innerText='ERROR';
        }
        
        header.appendChild(i);
        header.appendChild(spanTitle);
        
        content.innerHTML=this.innerHTML;
        this.innerHTML=null;
        body.appendChild(content);

        li.appendChild(header);
        li.appendChild(body);

        this.appendChild(li);

        


    }
}
customElements.define('m-collapsible-item',MCollapsibleItem);

export class InitCollapsible{

    constructor(elem){

        this.elem=elem.children.item(0);
        
        
        let instance=M.Collapsible.init(elem);

        
    }

    

}