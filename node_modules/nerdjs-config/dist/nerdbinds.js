import '@webcomponents/custom-elements';
export class FilterBind{
    /* Gera um objeto array, a partir do parametro 'data',
    na qual será ou um objeto array ou um json, sendo filtrado 
    por uma criteria utilizando o parametro filter, listando
    registros formados pelo parametro array de 'filter'. Essa 
    função retornará um objeto com os resultados filtrados.
    */
 constructor(data){
        this.fData=data;
       
    }
    bind(filter,fields_array){


    }
    
}

export class Bind{
    /* Gera um objeto unico, a partir do parametro 'data', retornando
    um vetor, listado pelo parâmetro  'fileds'.
    */
   constructor(data){ 
       
        this.fData=data;
      
    }
     bind(key,field){
       // console.log(field)
        const result=this.fData[key][field];
        return result;
         
    }
    
}
export class ListBind{
    constructor(data){
    this.fData=data;
   // this.results=[];
}
bind(fields_array){

    let bind=new Bind(this.fData);
    let result=[];
        for(let i=0;i<this.fData.length;i++){

            for(let j of fields_array){
                let db=bind.bind(i,j)
               result.push(db);
              // console.log(db);
            }

        }
        return result;


}
}
export class Composer{
     /* Gera um objeto interpolado, a partir do parametro 'data',
    na qual será ou um objeto array ou um json, sendo filtrado 
    por uma criteria utilizando o parametro filter, listando
    registros formados pelo parametro array de 'filter'. Essa 
    função retornará um objeto com os resultados filtrados.
    O método 'render', possibilitará a interpolação de um loop
    contendo os campos ('fields') através de sua fonte de dados
    ('data').
    */
   constructor(data){ 
        this.fData=data;
           
      //  this.work=new Worker('./dist/workers/counter.js');

        
       
             
    }
   render(interpolation){

        let tag=interpolation;
        let result='';
      //  let datas=this.fData[0]['name'];
       // let fields=['name','type'];
        
        


               
        for(let n=0;n<this.fData.length;n++){
               
            result +=tag;
                    
        }
        
        return result;
        
        
    }
 
    
} 
export class DataBind{
 /* Inejta valores aos resultados da iterpolação dos objetos
 de Componet*/
    constructor(data){
        this.data=data;

    }
    bind(){
        // const interpolationMatches=['{','}']
         let tags=document.querySelectorAll('[nd-content]');
        const datable=Array.from(this.data)
        let n=0;
        let fields=[];
        let obj=Array.from(this.data);
        let  valField=[];
        let objName=Object.keys(this.data)
 
             obj.forEach((key,value)=>{
                
                for(let i in key){
                    fields.push(i);
                    valField.push(key[i])
                }
                           
            });

            for(let i of tags){
                    let tag=i.getAttribute('nd-content')
                    
                if(fields[n]===tag){

                    i.textContent=valField[n];
                }
                n++
                    console.log(i)
                 
             }

 
     }
     

}
export class ND{
    /* Inejta valores aos resultados da iterpolação dos objetos
 de Componet, a partir do atributo nd, no qual acumula o objeto atributo
 das tgs no DOM.*/
    constructor(data){
        this.data=data;
        this.stringMatch=['{','}'];
       // return this.nd();

      
    }
    composer(component){
        const cp=component;
        let regex=new RegExp('{(.*?)}','g');
        let myResult='';
        let match=[];
        let field=[];
        let re='{(.*?)}'
        let str=new Array;
       while(match=regex.exec(cp)){
           

            for(let i=0;i<this.data.length;i++){
                let field=match[1];
                let result=this.data[i][field];
               // match[0]=result;
               if(typeof result !=='undefined'){

                str.push(cp.replace(new RegExp('{(.*?)}','g'),result));
               }
            }

        }

        while(match=regex.exec(cp)){
            field.push(match[1]);
       }

       for(let i of field){
        console.log( cp.replace(new RegExp('{(.*?)}'),i));
       }
      
       
       
     


    }
    bind(){

       
    

    }
    

    
}

export class Interpolation{
    constructor(data){
        this.data=data;
        this.key=0;

    }
    render(component){

        let change=new String;
        for(this.i;this.i<this.data.length;this.i++){

            change +=component;

        }

        return change;

    }
    

}