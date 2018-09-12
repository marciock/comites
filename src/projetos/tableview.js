import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbProjetos extends Creator{

    render(){
        const dbComite=new NdGet(HOST+'ggnomotor/modules/comites/services/ProjetosLista.php');
        const showComite=dbComite.show();
      //  console.log(showComite);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Projeto/Processo</th>
                            <th>Comite</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showComite.map((f)=>{
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_projetos}" name="id_projetos"/><span></span></label></p></td>
                                    <td>${f.projeto}</td>
                                    <td>${f.comite}</td>
                                    <td>${f.descricao}</td>
                                   
                                </tr>
                                `
                            )
                        }).join('')
                    }
                        
                    </tbody>

                </table>
                
               
             </div>
             `
        )
    }
    callBack(){
        const input=this.querySelectorAll('input');
 
 
      
         input.forEach((f)=>{
           f.addEventListener('click',()=>{
            
             this.value=f.value
             console.log(this.value);
           })
         })
    
    }

}
customElements.define('tb-projetos',TbProjetos);