import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';
import {MSelect} from '../../components/m-forms';

export class SelectSetor extends Creator{

    render(){
        const ndget=new NdGet('http://localhost/ggnomotor/modules/setor/services/Lista.php');
        const db=ndget.show();
        return(
            `
                <m-select col="s8">
                <option disabled selected>Setor</option>
                    ${
                        db.map((f)=>{
                        return `<option value=${f.id_setor}>${f.setor}</option>`
                        })
                    }
                </m-select>
            `
        )
    }
    callBack(){

        const select=this.querySelector('m-select');

        const edit=this.querySelector('[disabled]');

        edit.innerHTML=this.getProps('content');
        
        if(edit !==null){
            this.value=this.getProps('edit');
            edit.removeAttribute('disabled');
        }

        this.addEventListener('change',()=>{
            this.value=select.value;
            console.log(this.value );
        })
    }
}
customElements.define('select-setor',SelectSetor);