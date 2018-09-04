import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData,NdGet} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';

import {PathName} from '../common/pathname';


export class EditReunioes extends Creator{

    render(){
       const id=this.state.envia();
       const endereco=`${HOST}ggnomotor/modules/reunioes/services/Search.php?id=${id}`;
          const ndGet=new NdGet(endereco);
          const data=ndGet.show();

       
        return(
            `
            <div>
            <m-header h="3">Editar Reuniões e Eventos</m-header>
            ${
                data.map((f)=>{
                    return (
                        `
                        <m-row>
                        <m-input col="s8" id="assunto" edit="${f.assunto}" >Assunto</m-input>
                    </m-row>
                    <m-row>
                        <select-comite id="comite" edit="${f.id_comite}" content="${f.comite}"></select-comite>
                        
                    </m-row>
                    <m-row>
                    <m-input col="s8" id="local" edit="${f.local}">Assunto</m-input>
                    </m-row>
                    <m-row>
                        <m-input col="s2" id="data" type="date" edit="${f.data}">Data</m-input>
                    </m-row> 
                    <m-row>
                        <m-input col="s2" id="inicio" type="time" edit="${f.hora_inicial}">Hora Inicial</m-input>
                    </m-row>
                    <m-row>
                        <m-input col="s2" id="termino" type="time" edit="${f.hora_final}">Hora Final</m-input>
                    </m-row>
                    <m-row>
                        <m-area col="s8" label="descricao" id="descricao" edit="${f.descricao}"></m-area>
                    </m-row>
                    <m-row>
                        <m-area col="s8" label="participantes" id="participantes" edit="${f.participantes}"></m-area>
                     </m-row>

                    `)
                })
            }

            
            
            
            <fab-form url-cancel="#/reunioes" component="cm-reunioes"></fab-form>
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
                id:'assunto',
                name:'assunto'
            },
            {
                id:'comite',
                name:'comite'
            },
            {
                id:'local',
                name:'local'
            },
            {
                id:'data',
                name:'data'
            },
            {
                id:'inicio',
                name:'inicio'
            },
            {
                id:'termino',
                name:'termino'
            },
            {
                id:'descricao',
                name:'descricao'
            },
            {
                id:'participantes',
                name:'participantes'
            }
        ]

       

        save.addEventListener('click',()=>{
            const data=new NdFormData();


            let mydata=data.push(db);

            mydata.append('id',id);

            if(mydata.get('comite')===null){

                const sele=this.querySelector('#comite');
                mydata.append('comite',sele.edit);
            }
            
          
            const ndpost=new NdPost(HOST+'ggnomotor/modules/reunioes/services/Update.php',mydata);
           ndpost.show();

           const path=new PathName('#reunioes','cm-reunioes');
               
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
customElements.define('edit-reunioes',EditReunioes);