import {Generator} from '../dist/nerdcreator';


export class MCard extends Generator{

    create(){
        const div=document.createElement('div');
        const color=this.getProps('color');

        let colorArray=new Array();

        if(color !==null){
            colorArray=color.split(" ");

            colorArray.map((f)=>{
                div.classList.add(f);
            })
        }
        div.innerHTML=this.innerHTML;

        this.innerHTML=null;

        this.appendChild(div);

    }
}
customElements.define('m-card',MCard);

export class MCardContent extends Generator{

    create(){
        const div=document.createElement('div');
        const mTitle=document.createElement('span');
        const p=document.createElement('p');
        const textColor=this.getProps('text-color');
        const title=this.getProps('title');

        let colorArray=new Array();

        div.classList.add(card-content);
        mTitle.classList.add('card-title');

        if(textColor !==null){
            colorArray=textColor.split(' ');

            colorArray.map((f)=>{
                div.classList.add(f);
            }).join('');
        }
        if(title !==null){
            mTitle.innerHTML=title;
        }

        p.innerHTML=this.innerHTML;
        this.innerHTML=null;

        div.appendChild(mTitle);
        div.appendChild(p);
        this.appendChild(div);

    }
}
customElements.define('m-card-content',MCardContent);

export class MCardAction extends Generator{

    create(){
        const div=document.createElement('div');

        div.classList.add('card-action');
        div.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(div);
    }
}
customElements.define('m-card-action',MCardAction);

export class MCardImage extends Generator{

    create(){
        const div=document.createElement('div');
        const mSpan=document.createElement('span');
        const img=document.createElement('img');

        const src=this.getProps('src');
        const title=this.innerHTML;

        div.classList.add('card-image');
        mSpan.classList.add('card-title');
        
        img.src=src;
        if(title !==null){
            mSpan.innerHTML=title;
        }

        this.innerHTML=null;
        div.appendChild(img);
        div.appendChild(mSpan);
        this.appendChild(div);
        
        

    }
}
customElements.define('m-card-image',MCardImage);

export class MCardHorizontal extends Generator{

    create(){
        const div=document.createElement('div');
        div.classList.add('card','horizontal');

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;
        this.appendChild(div);
    }
}
customElements.define('m-card-horizontal',MCardHorizontal);

export class MCardStacked extends Generator{

    create(){
        const div=document.createElement('div');
        div.classList.add('card-stacked');
        div.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(div);
    }
}
customElements.define('m-card-stacked',MCardStacked);

export class MCardReveal extends Generator{

    create(){
        const div=document.createElement('div');
        const mSpan=document.createElement('span');
        const p=document.createElement('p');
        const i=document.createElement('i');

        const title=this.getProps('title');


        div.classList.add('card-reveal', 'grey-text','text-darken-4');
        mSpan.classList.add('card-title');
        i.classList.add('material-icons','right');
        i.innerHTML='close';

        if(title !==null){

            mSpan.innerHTML=title;
        }
        
        p.innerHTML=this.innerHTML;
        this.innerHTML=null;
        mSpan.appendChild(i);
        div.appendChild(mSpan);
        div.appendChild(p);
        this.appendChild(div);

    }
}
customElements.define('m-card-reveal',MCardReveal);

export class MCardPanel extends Generator{

    create(){
        const div=document.createElement('div');
        const span=document.createElement('span');

        const color=this.getProps('color');
        const colorText=this.getProps('color-text');
        let colorArray=new Array();
        let colorTextArray=new Array();


        div.classList.add('card-panel');
        
        if(color !==null){

            colorArray=color.split(' ');
            colorArray.forEach((f)=>{
                div.classList.add(f);
            })
        }else{
            div.classList.add('teal');
        }

        if(colorText !==null){

            colorTextArray=color.split(' ');
            colorTextArray.forEach((f)=>{
                span.classList.add(f);
            })

        }else{
            span.classList.add('white-text');
        }

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;

        div.appendChild(span);
        this.appendChild(div);



    }
}
customElements.define('m-card-panel',MCardPanel);