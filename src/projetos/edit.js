import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditProjetos extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/comites/services/ProjetosSearch.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Editar Comitês</m-header>
            ${
                data.map((f)=>{
                   
                    return (
                            `

                            <m-row>
                            <select-comite content="${f.comite}" id="comite" edit="${f.id_comite}"></select-comite>
                           </m-row>
                           <m-row>
                             <m-input col="s8" id="projeto" edit="${f.projeto}">Projeto</m-input>
                           </m-row>
                           <m-row>
                           <m-area col="s8" label="Descrição" id="descricao" edit="${f.descricao}"></m-area>
                          </m-row>
                           <m-row>
                            <m-area col="s8" label="Resultados Esperados" id="esperados" edit="${f.esperados}"></m-area>
                           </m-row>
                           <m-row>
                            <m-area col="s8" label="Resultados Obtidos" id="obtidos" edit="${f.obtidos}"></m-area>
                           </m-row>

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/projetos" component="cm-projetos"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        const assunto=this.querySelector('#assunto');


        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })
        
        const id=this.state.envia();



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


            let mydata=data.push(db);

            mydata.append('id',id);

            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/comites/services/ProjetosUpdate.php',mydata);
           ndpost.show();

           alert('Salvo com sucesso');
            
           
           const path=new PathName('#/projetos','cm-projetos');
               
          /*  alert('Salvo com sucesso');
            const host=window.location.pathname;
            const url='http://localhost'+host+'#/usuarios';
  
            console.log(url);
  
            window.location.assign(url);
           window.location.reload();
           */
            
        })
    }

}
customElements.define('edit-projetos',EditProjetos);