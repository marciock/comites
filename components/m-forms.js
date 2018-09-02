import {Generator} from '../dist/nerdcreator';

export class MInput extends Generator{

    create(){
        const div=document.createElement('div');
        const label=document.createElement('label');
        const input=document.createElement('input');
        
        const id=this.getProps('id');
        const col=this.getProps('col');
        const type=this.getProps('type');
        
        let colArray=new Array();
        div.classList.add('input-field', 'col');

        


        if(id !==null){
            label.for=id;
        }
        
        if(col !==null){
            colArray=col.split(' ');

            colArray.map((f)=>{
                div.classList.add(f);
            }).join('');

        }else{
            div.classList.add('s12');
        }
        if(type !==null){
            input.type=type;
        }else{
            input.type="text";
        }
            
        label.innerHTML=this.innerHTML;
        this.innerHTML=null;
        div.appendChild(input);
        div.appendChild(label);
        this.appendChild(div);

        let mdiv=this.querySelector('div');
        mdiv.value=this.getProps('value');
        let myInput=this.querySelector('input');

        if(this.getProps('edit') !==null){
            myInput.value=this.getProps('edit');
            this.value=myInput.value;
        }

        myInput.addEventListener('change',()=>{
            this.value=myInput.value;
        })

    }
}
customElements.define('m-input',MInput);

export class MSelect extends Generator{

    create(){
        const div=document.createElement('div');
      //  const label=document.createElement('label');
        const select=document.createElement('select');

      //  const mLabel=this.getProps('label');
        const col=this.getProps('col');
        let colArray=new Array();

        div.classList.add('input-field','col');
        select.classList.add('browser-default');
       
        if(col !==null){
            colArray=col.split(' ');
            colArray.map((f)=>{
                div.classList.add(f);
            }).join('');
        }else{
            div.classList.add('s12');
        }

        select.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
      //  div.appendChild(label);
        div.appendChild(select);
       
        this.appendChild(div);
        let mdiv=this.querySelector('div');

        let mselect=this.querySelector('select');

        div.value=this.getProps('value');
        

        if(this.getProps('edit') !==null){
            mselect.value=this.getProps('edit');
            this.value=mselect.value;
        }
        mselect.addEventListener('change',()=>{
            let x=mselect.options.selectedIndex;
            let val=mselect.options.item(x).value;
            this.value=val;
        })


    }
}
customElements.define('m-select',MSelect);

export class MRadio extends Generator{

    create(){

        const radio=document.createElement('input');
        const label=document.createElement('label');
        const span=document.createElement('span');

        const content=this.innerHTML;
        const group=this.getProps('group');
        
        if(content !==null){
            span.innerHTML=content;
        }

        radio.type='radio';
        radio.name=group;
      

   //   this.addEventListener('click',()=>{
     //   radio.checked=true;
    //})
    
        
        label.appendChild(radio);
        label.appendChild(span);

        this.innerHTML=null;
        
        this.appendChild(label);

       

        this.value=this.getProps('value');

        let myInput=this.querySelector('input');

        if(this.getProps('edit') !==null){
            myInput.value=this.getProps('edit');
            this.value=myInput.value;
        }

       

        myInput.addEventListener('click',()=>{
            myInput.checked=true;
            this.value=myInput.value;

        })

       
        
    }
}
customElements.define('m-radio',MRadio);

export class MArea extends Generator{
    create(){
        const div=document.createElement('div');
        const area=document.createElement("textarea");
        const label=document.createElement('label');

        const titulo=this.getProps('label');
        const col=this.getProps('col');
        let colArray=new Array();

        div.classList.add('input-field','col');
        if(col !==null){
            colArray=col.split(' ');

            colArray.map((f)=>{
                div.classList.add(f);
            }).join('');
        }else{
            div.classList.add('s12');
        }

        if(titulo !==null){
            label.innerHTML=titulo;
        }

        area.classList.add('materialize-textarea');
       // area.value=this.innerHTML;
        this.innerHTML=null;
        

        div.appendChild(area);
        div.appendChild(label);
        this.appendChild(div);

        let mdiv=this.querySelector('div');
        mdiv.value=this.getProps('value');
        let myInput=this.querySelector('textarea');


        if(this.getProps('edit') !==null){
            myInput.value=this.getProps('edit');
            this.value=myInput.value;
        }

        myInput.addEventListener('change',()=>{
            this.value=myInput.value;
        })


    }
}
customElements.define('m-area',MArea);

export class MFile extends Generator{
    create(){
        const div=document.createElement('div');
        const bt=document.createElement('div');
        const file=document.createElement('div');
        const input=document.createElement('input');
        const inputText=document.createElement('input');
        const span=document.createElement('span');
        const id=this.getProps('id');
        const placeholder=this.getProps('placeholder');


        
        div.classList.add('file-field','input-field');
        bt.classList.add('btn');
        file.classList.add('file-path-wrapper');
        inputText.classList.add('file-path')


        
        if(placeholder !==null){

            inputText.placeholder=placeholder;
        }
            
        span.textContent=this.textContent;
        this.innerHTML=null;

        input.type='file';
        inputText.type='text';


        bt.appendChild(span);
        bt.appendChild(input);
        file.appendChild(inputText);

        div.appendChild(bt);
        div.appendChild(file);   
        
        this.appendChild(div);

        let mdiv=this.querySelector('div');
        mdiv.value=this.getProps('value');
        let myInput=this.querySelector('input');


        if(this.getProps('edit') !==null){
            myInput.value=this.getProps('edit');
            this.value=myInput.value;
        }

        myInput.addEventListener('change',()=>{
            this.value=myInput.files[0];
        })

    }
}
customElements.define('m-file',MFile);

export class MCheckBox extends Generator{

    create(){
        const label=document.createElement('label');
        const input=document.createElement('input');
        const span =document.createElement('span');

        const type=this.getProps('type');

        const checked=this.getProps('checked');


        if(type !==null){
            input.classList.add(type);
        }
        if(checked !==null){
            input.setAttribute('checked',checked);
        }

        input.type='checkbox';

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;
        label.appendChild(input);
        label.appendChild(span);

        this.appendChild(label);

        let myInput=this.querySelector('input');
        let myLabel=this.querySelector('label');
        myLabel.value=this.getProps('value');

        if(this.getProps('edit') !==null){
            myInput.value=this.getProps('edit');
            this.value=myInput.value;
        }
        myInput.addEventListener('click',()=>{
            this.value=myInput.value;
        })
    }
}
customElements.define('m-checkbox',MCheckBox);