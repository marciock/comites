import {Creator} from '../../dist/nerdcreator';
import {NdSession} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import MHeader from '../../components/m-header';
import TbIntegrantes from './tableview';
import Fab from '../common/fab';

export class Integrantes extends Creator{

    render(){
        
        return(
            `<div>
                <m-header h="2">Integrantes dos ComitÊs</m-header>
                
                <tb-integrantes id="tabela"></tb-integrantes>
                <nd-fab add="add-integrantes" edit-component="edit-integrantes"></nd-fab>

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
customElements.define('cm-integrantes',Integrantes);