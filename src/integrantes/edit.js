import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';


import {MRow} from '../../components/m-row';

import {MInput} from '../../components/m-forms';
import {MHeader} from '../../components/m-header';

import FabForm from '../common/fab-form';
import {PathName} from '../common/pathname';



export class EditIntegrantes extends Creator{

    render(){

        const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/usuarios/services/SearchIntegrantes.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();
       // console.log(id);

        return(
            `
            <div>
            <m-row>
                <m-header h="3">Atualizar Integrantes</m-header>
            </m-row>
            ${
                data.map((f)=>{
                    
                    return (
                        `
                        <m-row>
                            <m-input col="s8" id="chave" edit="${f.chave}">Chave</m-input>
                        </m-row>
                        <m-row>
                            <m-input col="s8" id="nome" edit="${f.nome}">Nome</m-input>
                        </m-row>
                        <m-row>
                            <select-comite edit="${f.id_comite}" content="${f.comite}"></select-comite>
                        </m-row>
                        <m-row>
                         <m-input col="s8" id="email" type="email"  edit="${f.email}">Email</m-input>
                        </m-row>
                        <m-row>
                         <m-area col="s8" id="descricao"  edit="${f.descricao}"  label="Descrição"></m-area>
                        </m-row>
                        <m-row>
                         <m-checkbox col="s8" id="representante"> Representante</m-ceckbox>
                       </m-row>

                    `)
                })
            }
           
            <fab-form url-cancel="#/integrantes" component="cm-integrantes"></fab-form>
            </div>
            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        
        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })
       

        const db=[
            {
                id:'chave',
                name:'chave'
            },
            {
                id:'nome',
                name:'nome'
            },
            {
                id:'senha',
                name:'senha'
            },
            {
                id:'email',
                name:'email'
            },
            {
                id:'descricao',
                name:'descricao'
            }
            
        ]



        save.addEventListener('click',()=>{
           

            const data=new NdFormData();


            const mydata=data.push(db);

           
          
            const ndpost=new NdPost('http://localhost/ggnomotor/modules/usuarios/services/Update.php',mydata);
            ndpost.show();
            alert('Salvo com sucesso');

            const path=new PathName('#inegrantes','cm-integrantes');
          
            
           
  
          //  console.log(url);
  
            
            


        })
    }
}
customElements.define('edit-integrantes',EditIntegrantes);