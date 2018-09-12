import {Creator} from '../../dist/nerdcreator';



export class Comites extends Creator{

    render(){

        window.location.href=HOST+"comites/public/";

        return(
            `<div>
                

            </div>

            `
        )
    }
    callBack(){
       
    }
}
customElements.define('nd-comites',Comites);