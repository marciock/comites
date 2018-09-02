import {Creator} from '../../dist/nerdcreator';

import {MFab,MFabItem, InitFab} from '../../components/m-fabs';
import {NdLink} from '../../dist/nerdrouter';
export class FabForm extends Creator{

    render(){
        return(
            `<div>
                <m-fab color="blue" icon="menu" id="fab">
                    
                    <m-fab-item color="green"  id="save">save</m-fab-item>
                    
                    <nd-link url="${this.getProps('url-cancel')}" component="${this.getProps('component')}">
                      <m-fab-item color="red" url="${this.getProps('url-cancel')}">cancel</m-fab-item>
                    </nd-link>
                   
                </m-fab>

            <div>
            `
        )
    }
    callBack(){

        const fab=this.querySelector('#fab');
        
        
        let init=new InitFab(fab);

        

        
    }
}
customElements.define('fab-form',FabForm);