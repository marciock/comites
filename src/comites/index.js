import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbComites from './tableview';
import Fab from '../common/fab';

export class Comites extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Comitês</m-header>
                <tb-comites id="tabela"></tb-comites>
                <nd-fab add="add-comites" edit-component="edit-comites"></nd-fab>

            </div>

            `
        )
    }
    callBack(){
        const tabela=this.querySelector('#tabela');
        const edit=document.getElementById('edit');

        edit.addEventListener('click',()=>{
           this.setState('envia',()=>{
               return tabela.value;
           })
        })

       
    }
}
customElements.define('cm-comites',Comites);