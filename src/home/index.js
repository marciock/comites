import {Creator} from '../../dist/nerdcreator';
import {MRow} from '../../components/m-row';
import {Icon} from './icon';

export class ComitesHome extends Creator{
    render(){
        const menu=[
            {
                url:'#/comites',
                component:'cm-comites',
                src:'./icons/comites.svg',
                title:'Comitês'
            },
            {
                url:'#/reunioes',
                component:'cm-reunioes',
                src:'./icons/reunioes.svg',
                title:'Reuniões/Eventos'
            },
            {
                url:'#/integrantes',
                component:'cm-integrantes',
                src:'./icons/integrantes.svg',
                title:'Integrantes'
            }

        ]
        return (
            `
            <m-row>
                <h3>Menu Comitês</h3> 
            </m-row>
            <m-row>
               ${
                   menu.map((f)=>{
                       return(
                           `
                            <nd-icon url="${f.url}" component="${f.component}" src="${f.src}" title="${f.title}">
                            </nd-icon>
                           `
                       )
                   }).join('')
               }

            </m-row>
            `
        )
    }
}
customElements.define('cm-home',ComitesHome);