import {Creator} from '../../dist/nerdcreator';

import MHeader from '../../components/m-header';
import TbProjetos from './tableview';
import Fab from '../common/fab';

export class Projetos extends Creator{

    render(){
        return(
            `<div>
                <m-header h="2">Comitês</m-header>
                <tb-projetos id="tabela"></tb-projetos>
                <nd-fab add="add-projetos" edit-component="edit-projetos"></nd-fab>

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
customElements.define('cm-projetos',Projetos);