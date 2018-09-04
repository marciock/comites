import {Creator} from '../../dist/nerdcreator';
import {NdPost,NdFormData} from '../../dist/nerdhttp';

import {MInput,MArea,MFile} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {FabForm} from '../common/fab-form';
import {MHeader} from '../../components/m-header';
import SelectComite from '../common/select-comite';
import SelectLocal from '../common/select-local';

import {PathName} from '../common/pathname';

export class AddReunioes extends Creator{

    render(){
        return(
            `
            <div>
            <m-header h="3">Cadastro de Reuniões e Eventos</m-header>
            <m-row>
                <m-input col="s8" id="assunto">Assunto</m-input>
            </m-row>
            <m-row>
                <select-comite id="comite" content="Escolha um Comite"></select-comite>
                
            </m-row>
            <m-row>
            <m-input col="s8" id="local">Assunto</m-input>
            </m-row>
            <m-row>
                <m-input col="s2" id="data" type="date">Data</m-input>
            </m-row> 
            <m-row>
                <m-input col="s2" id="inicio" type="time">Hora Inicial</m-input>
            </m-row>
            <m-row>
                <m-input col="s2" id="termino" type="time">Hora Final</m-input>
            </m-row>
            <m-row>
                <m-area col="s8" label="descricao" id="descricao"></m-area>
            </m-row>
            <m-row>
                <m-area col="s8" label="participantes" id="participantes"></m-area>
             </m-row>
            
            
            <fab-form url-cancel="#/reunioes" component="cm-reunioes"></fab-form>
            </div>

            `
        )
    }
    callBack(){

        const save=this.querySelector('#save');
        

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


            const mydata=data.push(db);

            const ndpost=new NdPost(HOST+'ggnomotor/modules/reunioes/services/Insert.php',mydata);
            ndpost.show();

            alert('Salvo com Sucesso !');

            const path=new PathName('#/reunioes','cm-reunioes');
            
        })
    }

}
customElements.define('add-reunioes',AddReunioes);