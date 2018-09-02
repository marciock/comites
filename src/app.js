import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import {NdView} from '../dist/nerdrouter';
import {MContainer} from '../components/m-container';
import {MNavBar,MNavOpt} from '../components/m-navbar';

import {ComitesHome} from './home/index';

import {Integrantes} from './integrantes/index';
import {AddIntegrantes} from './integrantes/add';
import {EditIntegrantes} from './integrantes/edit';

import {Comites} from './comites/index';
import {AddComites} from './comites/add';
import {EditComites} from './comites/edit';

import {Reunioes} from './reunioes/index';
import {AddReunioes} from './reunioes/add';
import {EditReunioes} from './reunioes/edit';


export class Apps extends Creator{

  
  render(){
    
  
    return (
      `
        <m-navbar src="./icons/ggno_logo.png" logo-align="left" menu-align="right" color="black">
          <m-nav-opt ></m-nav-opt>
        </m-navbar>
        <m-container>
          <div style="margin-top:5em;">
        <nd-view>
          
            <cm-home></cm-home>
        </nd-view>
        </div>    
        </m-container>
      `
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  