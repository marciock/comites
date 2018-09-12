import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';
import {MInput} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';

export class AddComites extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Comitês</m-header>
            <m-row>
                <m-input col="s8" id="comite">Comitê</m-input>
            </m-row>
            <m-row>
             <m-area col="s8" label="Objetivos" id="objetivos"></m-area>
            </m-row>
            <m-row>
             <select-usuarios  id="representante" content="Representante"></select-usuarios>
            </m-row>
            <fab-form url-cancel="#/comites" component="cm-comites"></fab-form>
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
                id:'objetivos',
                name:'objetivos'
            },
            {
                id:'representante',
                name:'representante'
            }
            
        ]
        

        save.addEventListener('click',()=>{

            const data=new NdFormData();
            const mydata=data.push(db);
            
            console.log(mydata.get('representante'));

            const ndpost=new NdPost(HOST+'ggnomotor/modules/comites/services/Insert.php',mydata);
            ndpost.show();

            alert('Salvo com sucesso');
            
            const path=new PathName('#/comites','cm-comites');
        })

       
    }

    

}
customElements.define('add-comites',AddComites);