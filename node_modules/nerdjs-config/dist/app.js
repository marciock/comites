import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';


export class Apps extends Creator{

  
  render(){
    
  
    return (
      `<div>
        <h2>Nerdjs</h2>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  