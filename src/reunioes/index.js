import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbReunioes from './tableview';
import Fab from '../common/fab';

export class Reunioes extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Reuniões dos Comitês</m-header>
                <tb-reunioes id="tabela"></tb-reunioes>
                <nd-fab add="add-reunioes" edit-component="edit-reunioes"></nd-fab>

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
customElements.define('cm-reunioes',Reunioes);