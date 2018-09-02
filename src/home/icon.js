import {Creator} from '../../dist/nerdcreator';
import {NdLink} from '../../dist/nerdhttp';


import {Mcol} from '../../components/m-col';


export class Icon extends Creator{

    render(){
        return(
            `<m-col s="3" style="text-align:center;" >
                <nd-link url="${this.getProps('url')}" component="${this.getProps('component')}" >
                <img src="${this.getProps('src')}" />
                <p>${this.getProps('title')}</p>
                </nd-link>

            </m-col>
            `
        )
    }
}
customElements.define('nd-icon',Icon);