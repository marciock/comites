export class PathName {

    constructor(hash,component){

        const view=document.querySelector('nd-view');
        const child=document.createElement(component);
        window.location.href=hash;
        view.innerHTML=null;
        view.appendChild(child);
        
    }
}