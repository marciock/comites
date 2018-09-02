import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbComites extends Creator{

    render(){
        const dbComite=new NdGet(HOST+'ggnomotor/modules/comites/services/Lista.php');
        const showComite=dbComite.show();
      //  console.log(showComite);
        return(
             `<div value=${this.getProps('value')}>
                <table>
                    <thead>
                        <tr>
                            <th>Selecione</th>
                            
                            <th>Comitê</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        showComite.map((f)=>{
                            return(
                                `<tr>
                                    <td><p><label><input  type="radio"   value="${f.id_comite}" name="id_comite"/><span></span></label></p></td>
                                    <td>${f.comite}</td>
                                   
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
customElements.define('tb-comites',TbComites);