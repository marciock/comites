export class NdSession {

    constructor(){
        
    }
    set(id,controller){

       return  window.localStorage.setItem(id,controller);
    }
    remove(id){
        return window.localStorage.removeItem(id);
    }
    get(id){
        return window.localStorage.getItem(id);
    }
}

export class NdGet{

    constructor(url){
        this.url=url;
        
    }
    show(){
        const http=new XMLHttpRequest();
        http.open('GET',this.url,false);

        http.send();
           // console.log(http.responseText);
           return JSON.parse(http.responseText);
       
    }
}
export class NdPost{

    constructor(url,data){
        this.url=url;
        this.data=data;
        
    }
    show(){
        const http=new XMLHttpRequest();
        http.open('POST',this.url);
        //http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                // Request finished. Do processing here.
            }
        }

        http.send(this.data);
           // console.log(http.responseText);
          // return JSON.parse(http.responseText);
       
    }
   
   
}
export class NdFormData {
    
push(data){

    const formData=new FormData();
    data.map((f)=>{
            
        let elems=document.getElementById(f.id).value;

        console.log(elems);
       formData.append(f.name,elems);
        
    })

    return formData;
}
    
}
