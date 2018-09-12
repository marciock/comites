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
                    this.setState('myid',()=>{
                        return f.id_integrantes
                    })
                    return (
                        `
                        <m-row>
                        <select-usuarios  id="usuarios" content="${f.nome}" edit="${f.id_usuarios}"></select-usuarios>
                        </m-row>
                       
                        <m-row>
                            <select-comite content="${f.comite}" id="comite" edit="${f.id_comite}"></select-comite>
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
        
        const id=this.state.envia();
        const labels=document.querySelectorAll('label');
        labels.forEach((f)=>{
            f.classList.add('active');
        })
       

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



        save.addEventListener('click',()=>{
           

            const data=new NdFormData();


            const mydata=data.push(db);

            const myid=this.state.myid();
           mydata.append('id',myid);
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/usuarios/services/UpdateIntegrantes.php',mydata);
            ndpost.show();
            alert('Salvo com sucesso');

            const path=new PathName('#inegrantes','cm-integrantes');
          
            
           
  
          //  console.log(url);
  
            
            


        })
    }
}
customElements.define('edit-integrantes',EditIntegrantes);