import {Generator} from '../dist/nerdcreator';


export class MParallax extends Generator{

    create(){

        const div=document.createElement('div');
        const divParalax=document.createElement('div');
        const img=document.createElement('img');
      

        const src=this.getProps('src');
       
        div.classList.add('parallax-container');
        divParalax.classList.add('parallax');
       
        if(src !==null){
            img.src=src;
        }
        
        divParalax.appendChild(img);
        div.appendChild(divParalax);

        this.appendChild(div);
       

    }
}
customElements.define('m-parallax',MParallax);

export class MSection extends Generator{

    create(){
        const sessionDiv=document.createElement('div');
        sessionDiv.classList.add('section');

        const color=this.getProps('color');
        let colorArray=new Array();

        if(color !==null){

            colorArray=color.split(' ');
            colorArray.map((f)=>{
                sessionDiv.classList.add(f);
            })
        }else{
            sessionDiv.classList.add('white');
        }
        sessionDiv.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(sessionDiv);

    }
}
customElements.define('m-section',MSection);

/*
const parallax=this.querySelectorAll('.parallax');
  
    let instances=M.Parallax.init(parallax);
*/