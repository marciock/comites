import {Generator} from '../dist/nerdcreator';

export class MNavBar extends Generator{

    create(){
        const nav=document.createElement('nav');
        const div=document.createElement('div');
        const logo=document.createElement('a');
        const menu=document.createElement('ul');

        const src=this.getProps('src');
        const textLogo=this.getProps('text-logo');
        const logoAlign=this.getProps('logo-align');
        const menuAlign=this.getProps('menu-align');
        const color=this.getProps('color');
        let colorArray=new Array();

        div.classList.add('nav-wrapper');
        logo.classList.add('brand-logo');
        logo.href='#';

        if(logoAlign !==null){
            logo.classList.add(logoAlign);
        }
        if(textLogo !==null){
            logo.innerHTML=textLogo;
        }
        if(src !==null){
            const img=document.createElement('img');

            img.src=src;
            logo.appendChild(img);
        }
        if(color !==null){
            colorArray=color.split(' ');
            colorArray.map((f)=>{
                div.classList.add(f);
            })
        }

        menu.id='nav-mobile';
        menu.classList.add('hide-on-med-and-down');
        if(menuAlign!==null){
            menu.classList.add(menuAlign);
        }else{
            menu.classList.add('right');
        }

        menu.innerHTML=this.innerHTML;
        this.innerHTML=null;

        div.appendChild(logo);
        div.appendChild(menu);
        nav.appendChild(div);
        this.appendChild(nav);
    }
}
customElements.define('m-navbar',MNavBar);

export class MNavOpt extends Generator{

    create(){

        const li=document.createElement('li');
        const a=document.createElement('a');

        const url=this.getProps('url');

        if(url !==null){
            a.href=url;
        }
        a.innerHTML=this.innerHTML;
        this.innerHTML=null;
        li.appendChild(a);
        this.appendChild(li);
    }
}
customElements.define('m-nav-opt',MNavOpt);