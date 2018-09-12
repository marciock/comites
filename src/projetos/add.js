import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';

export class AddProjetos extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Projetos e Processos</m-header>
            <m-row>
             <select-comite content="Escolha um Comite" id="comite"></select-comite>
            </m-row>
            <m-row>
              <m-input col="s8" id="projeto">Projeto</m-input>
            </m-row>
            <m-row>
            <m-area col="s8" label="Descrição" id="descricao"></m-area>
           </m-row>
            <m-row>
             <m-area col="s8" label="Resultados Esperados" id="esperados"></m-area>
            </m-row>
            <m-row>
             <m-area col="s8" label="Resultados Obtidos" id="obtidos"></m-area>
            </m-row>
            <fab-form url-cancel="#/projetos" component="cm-projetos"></fab-form>
            </div>

            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
      
        const db=[
            {
                id:'comite',
                name:'comite'
            }, 
            {
                id:'projeto',
                name:'projeto'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'esperados',
                name:'esperados'
            },
            {
                id:'obtidos',
                name:'obtidos'
            }
            
        ]
        

        save.addEventListener('click',()=>{

            const data=new NdFormData();
            const mydata=data.push(db);
            
            const ndpost=new NdPost(HOST+'ggnomotor/modules/comites/services/ProjetosInsert.php',mydata);
            ndpost.show();

            alert('Salvo com sucesso');
            
            const path=new PathName('#/projetos','cm-projetos');
        })

       
    }

    

}
customElements.define('add-projetos',AddProjetos);