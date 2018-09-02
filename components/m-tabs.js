import {Generator} from '../dist/nerdcreator';

export class MTabs extends Generator{

    create(){

        const ul=document.createElement('ul');

        ul.classList.add('tabs');

        ul.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(ul);
    }
}
customElements.define('m-tabs',MTabs);

export class MTab extends Generator{

    create(){

        const li=document.createElement('li');

        const a=document.createElement('a');
        const col=this.getProps('col');
        const href=this.getProps('href');
        li.classList.add('tab','col');
        if(col !==null){

            li.classList.add(col);
        }
        if(href !==null){
            a.href=href;
        }else{
            a.href="#!";
        }

        a.innerHTML=this.innerHTML;
        this.innerHTML=null;

        li.appendChild(a);
        this.appendChild(li);


       
    }
}
customElements.define('m-tab',MTab);

export class MTabPage extends Generator{

    create(){

        const div=document.createElement('div');

        const id=this.getProps('id');
        div.classList.add('col','s12');

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(div);

    }
}

customElements.define('m-tab-page',MTabPage);