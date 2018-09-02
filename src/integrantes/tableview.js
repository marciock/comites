import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';


export class TbIntegrantes extends Creator{

    render(){
       
        const db=new NdGet(HOST+'ggnomotor/modules/usuarios/services/Lista.php');
        const show=db.show();
        

        return(
             `<div value="${this.getProps('value')}">
                <table class="highlight" >
                    <thead >
                        <tr>
                            <th>Selecione</th>
                            <th > Integrante</th>
                            <th > Chave</th>
                            
                            <th >email</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                                                
                        show.map((f)=>{
                            

                            
                            return(`
                                <tr>
                                  <td><p><label><input  type="radio"   value="${f.id_usuarios}" name="id_usuarios" /><span></span></label></p></td>
                                  <td>${f.nome}</td>
                                  <td>${f.chave}</td>
                                  <td>${f.email}</td>
                                </tr>
                              `)
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
customElements.define('tb-integrantes',TbIntegrantes);

