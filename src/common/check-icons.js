import {Creator} from '../../dist/nerdcreator';
import {NdGet} from '../../dist/nerdhttp';

import {MCheckBox} from '../../components/m-forms';
import {MRow} from '../../components/m-row';
import {MCol} from '../../components/m-col';

export class CheckIcons extends Creator{

    render(){
        const ndGet=new NdGet('http://localhost/ggnomotor/modules/icons/services/Lista.php');
        const db=ndGet.show();

        return (
            `
            <m-row>
                <h4>Telas</h4>
            </m-row>
            <m-row>
                ${
                    db.map((f)=>{
                        return `<m-col s="3"><m-checkbox id="${f.component}" value="${f.id_icon}">${f.title}</m-checkbox></m-col> `
                    }).join('')
                                        
                }
            </m-row>



            `
        )
    }
}
customElements.define('check-icons',CheckIcons);