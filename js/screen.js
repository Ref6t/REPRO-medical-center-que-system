// GETTING VALUES

let t1=document.querySelector("#t1")
let t2=document.querySelector("#t2")
let d1=document.querySelector("#dr1")
let d2=document.querySelector("#dr2")
let de1=document.querySelector("#dep1")
let de2=document.querySelector("#dep2")
let t1Data=[]
let t2Data=[]
if(localStorage.clinicOne){
    t1Data=JSON.parse(this.localStorage.clinicOne)
}else{
    t1Data=[]
}
if(localStorage.clinicTwo){
    t2Data=JSON.parse(this.localStorage.clinicTwo)
}else{
    t2Data=[]
}
if(localStorage.dr1){
    d1.inneText=this.localStorage.dr1
        d1.innerText=''
    
}else{
    d1.innerText=''
}
if(localStorage.dr2){
    d2.innerText=this.localStorage.dr2
}else{
    d2.innerText=''
}
if(localStorage.dep1){
    de1.innerText=this.localStorage.dep1
}else{
    de1.innerText=''
}
if(localStorage.dep2){
    de2.innerText=this.localStorage.dep2
}else{
    de2.innerText=''
}




// DISPLAY PATIENTS ON SCREEN

ScreenDisplay()
function ScreenDisplay(){
    if(localStorage.dr1&&localStorage.dr1!=''){
        d1.innerHTML=this.localStorage.dr1
    }else{
    d1.innerHTML=''}
    if(localStorage.dr2&&localStorage.dr2!=''){
        d2.innerHTML=this.localStorage.dr2
    }else{
        d2.innerHTML=''}    
    if(localStorage.dep1&&localStorage.dep1!=''){
        de1.innerHTML=this.localStorage.dep1
    }else{
        de1.innerHTML=''}
    
    if(localStorage.dep2&&localStorage.dep2!=''){
        de2.innerHTML=this.localStorage.dep2
    }else{
        de2.innerHTML=''}
    if(localStorage.clinicOne){
        t1Data=JSON.parse(this.localStorage.clinicOne)}
    if(localStorage.clinicTwo){
    t2Data=JSON.parse(this.localStorage.clinicTwo)}
    t1.innerHTML=``
    t1Data.forEach(e=>{
        t1.innerHTML+=`
        <div class="trow ${e.cls}">
        <span class="pnum">${e.id}</span>
        <span class="pname">${e.name}</span>
        </div>
        `
    })
    
t2.innerHTML=''
t2Data.forEach(el=>{
    t2.innerHTML+=`
                <div class="trow ${el.cls}">
                    <span class="pnum">${el.id}</span>
                    <span class="pname">${el.name}</span>
                    </div>
                    `
})
}



// DATA UPDATE SENSOR EVENT 

window.addEventListener('storage',ScreenDisplay)


