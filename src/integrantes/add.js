import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';


import {MRow} from '../../components/m-row';

import {MInput,MArea,MCheckBox} from '../../components/m-forms';
import {MHeader} from '../../components/m-header';
import {MCardPanel} from '../../components/m-cards';
import FabForm from '../common/fab-form';
import CheckIcons from '../common/check-icons';

import SelectComite from '../common/select-comite';
import SelectUsuarios from '../common/select-usuarios';

import {PathName} from '../common/pathname';

export class AddIntegrantes extends Creator{

    render(){


        return(
            `
            <div>
            <m-row>
                <m-header h="4">Adicionar Integrantes aos Comitês</m-header>
            </m-row>
            <m-row>
            <select-usuarios  id="usuarios" content="Escolha um Integrante"></select-usuarios>
            </m-row>
           
            <m-row>
                <select-comite content="Escolha um Comite" id="comite"></select-comite>
            </m-row>
             
            
           

           
            <fab-form url-cancel="#/integrantes" component="cm-integrantes"></fab-form>
            </div>
            `
        )
    }
    callBack(){
        const save=this.querySelector('#save');
       


        save.addEventListener('click',()=>{
           
            
           
              
            const db=[
                {
                    id:'usuarios',
                    name:'usuarios'
                },
                {
                    id:'comite',
                    name:'comite'
                }
                             
            ]



            const data=new NdFormData();


            const mydata=data.push(db);

           
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/usuarios/services/InsertIntegrante.php',mydata);
            ndpost.show();

          
            alert('Salvo com sucesso');
           
  
            const path=new PathName('#/integrantes','cm-integrantes');
          //  console.log(url);
  
            
            


        })
    }
}
customElements.define('add-integrantes',AddIntegrantes);