import {Creator} from '../../dist/nerdcreator';
import {MFab,MFabItem, InitFab} from '../../components/m-fabs';
import {NdLink,NdClick} from '../../dist/nerdrouter';

export class Fab extends Creator{

    render(){

        
        return(
            `<div>
                <m-fab color="blue" icon="menu" id="fab">
                    <nd-link url="#/add" component="${this.getProps('add')}" id="id-add">
                      <m-fab-item color="green" url="#/add">add</m-fab-item>
                    </nd-link>
                    <nd-click function="envia">
                        <nd-link url="#/edit" component="${this.getProps('edit-component')}">
                            <m-fab-item color="orange" url="#/edit" id="edit">edit</m-fab-item>
                        </nd-link>
                    </nd-click>
                    <nd-link url="#/" component="cm-home">
                     <m-fab-item color="purple" url="#/">home</m-fab-item>
                    </nd-link>
                </m-fab>

            </div>
            `
        )
    }
    callBack(){
        const fab=this.querySelector('#fab');
        
       
        let init=new InitFab(fab);

        
        

    }
}
customElements.define('nd-fab',Fab);

