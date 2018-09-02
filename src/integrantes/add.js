import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';


import {MRow} from '../../components/m-row';

import {MInput,MArea,MCheckBox} from '../../components/m-forms';
import {MHeader} from '../../components/m-header';
import {MCardPanel} from '../../components/m-cards';
import FabForm from '../common/fab-form';
import CheckIcons from '../common/check-icons';

import SelectComite from '../common/select-comite';

import {PathName} from '../common/pathname';

export class AddIntegrantes extends Creator{

    render(){


        return(
            `
            <div>
            <m-row>
                <m-header h="3">Adicionar Integrantes</m-header>
            </m-row>
            <m-row>
                <m-input col="s8" id="chave">Chave</m-input>
            </m-row>
            <m-row>
              <m-input col="s8" id="nome">Nome</m-input>
             </m-row>
            <m-row>
                <select-comite></select-comite>
            </m-row>
             
             <m-row>
             <m-input col="s8" id="email" type="email"  >Email</m-input>
            </m-row>
            <m-row>
             <m-area col="s8" id="descricao"  label="Descrição" ></m-area>
            </m-row>
            <m-row>
             <m-checkbox col="s8" id="representante"> Representante</m-ceckbox>
            </m-row>

           
            <fab-form url-cancel="#/integrantes" component="cm-integrantes"></fab-form>
            </div>
            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
        const check=this.querySelectorAll('input[type=checkbox');

        let checkArray=new Array();

       

      


        save.addEventListener('click',()=>{
           
            check.forEach((f)=>{
                checkArray.push(f.value);
    
            });
           
                console.log(checkArray[1]);
    
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
                },
                {
                    id:'representante',
                    name:'representante'
                }
            ]



            const data=new NdFormData();


            const mydata=data.push(db);

           
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/usuarios/services/Insert.php',mydata);
            ndpost.show();

          
            alert('Salvo com sucesso');
           
  
            const path=new PathName('#/integrantes','cm-integrantes');
          //  console.log(url);
  
            
            


        })
    }
}
customElements.define('add-integrantes',AddIntegrantes);