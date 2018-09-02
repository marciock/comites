import {Generator} from '../dist/nerdcreator';

export class MModal extends Generator{

    create(){
        const modal=document.createElement('div');
        
        const id=this.getProps('id');
        modal.classList.add('modal');

        if(id !==null){
            modal.id=id;
        }
        modal.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(modal);

    }
    
}
customElements.define('m-modal',MModal);

export class MModalContent extends Generator{
    create(){
            const div=document.createElement('div');
            const h4=document.createElement('h4');
            const p=document.createElement('p');
            
            const title=this.getProps('title');
            div.classList.add('modal-content');
            if(title !==null){
                h4.innerHTML=title;
            }else{
                h4.innerHTML="Title Modal";
            }

            p.innerHTML=this.innerHTML;
            this.innerHTML=null;
            div.appendChild(h4);
            div.appendChild(p);

            this.appendChild(div);

    }
}
customElements.define('m-modal-content',MModalContent);

export class MModalFooter extends Generator{

    create(){
        const div=document.createElement('div');
        const a=document.createElement('a');

        const titleClose=this.getProps('title-close');
        const content=this.innerHTML;
        this.innerHTML=null;
        a.href='#!';
        a.classList.add('modal-close','waves-effect','waves-green','btn-flat');
       
        a.innerText=titleClose;
    
        div.classList.add('modal-footer');

        if(content !==null){
            div.innerHTML=content;
        }
       
        a.addEventListener('click',()=>{
            const father=this.parentNode;
            father.style.display='none';
        })
        div.appendChild(a);
        this.appendChild(div);


    }
    
}
customElements.define('m-modal-footer',MModalFooter);

export class MButtonModal extends Generator{

    create(){
        const a=document.createElement('a');
        const url=this.getProps('url');

        if(url !==null){
            a.href=url;
        }else{
            a.href='#!';
        }
       
        a.classList.add('modal-close','waves-effect','waves-green','btn-flat');

       a.innerText=this.innerText;
       this.innerText=null;

       this.appendChild(a);

    }
}
customElements.define('m-button-modal',MButtonModal);

export class EventModal{

    constructor(modal){
        
        this.modal=modal.children.item(0);

        //this.modal.style.display='none';
       
    }
    open(){

       // this.modal.children.item(0);
       return this.modal.style.display='block';
    }
    close(){

        //const elem=document.querySelector(this.modal);
        
       return this.modal.style.display='none';
    }
}