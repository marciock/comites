import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbReunioes extends Creator{

    render(){
        const db=new NdGet(HOST+'ggnomotor/modules/reunioes/services/Lista.php');
        const show=db.show();
      //  console.log(show);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Data</th>
                            <th>Assunto</th>
                            <th>Comitê</th>
                            <th>Local</th>
                            <th>Inicio</th>
                            <th>Término</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        show.map((f)=>{
                            

                            
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_reunioescomites}" /><span></span></label></p</td>
                                   
                                    <td>${f.data.split('-').reverse().join('/')}</td>
                                    <td>${f.assunto}</td>
                                    <td>${f.comite}</td>
                                    <td>${f.local}</td>
                                    <td>${f.hora_inicial}</td>
                                    <td>${f.hora_final}</td>
                                   
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
customElements.define('tb-reunioes',TbReunioes);