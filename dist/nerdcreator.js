
import '@webcomponents/custom-elements';

window.state=[];
//window.methods=[];
export class Creator extends HTMLElement{
    
    constructor(){
     super();

  }
    render(){}
     callBack(){}
     connectedCallback(){
        
        this.state=window.state;
       
        this.innerHTML=this.render();
        this.callBack();
        
      }
     getProps(prop){
        let myProp=this.getAttribute(prop);
        return myProp;
	}
    setState(state,value){
        window.state[state]=value;
        return window.state;
    }
    el(){
        const el=this.render();
        this.innerHTML=el;
            return this;
    }
    tagId(id){

        let el=this.el()
        let child=el.querySelector('#'+id);

        return child;
    }
   
}   //end class

export class Generator extends HTMLElement{


   
    create(){}

    getProps(prop){
        let myProp=this.getAttribute(prop);
        return myProp;
	}
    setState(state,value){
        window.state[state]=value;
        return window.state;
    }
    connectedCallback(){
        this.state=window.state;
        this.create();
    }

}