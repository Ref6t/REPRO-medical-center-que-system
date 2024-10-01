
let list=document.querySelector("#list")
let aside=document.querySelector("aside")

list.onclick=()=>{
    aside.classList.toggle('show-aside')
}


let drList=document.querySelector("#dr-list")
let drsList=document.querySelector("#drs-list")
let depsList=document.querySelector("#deps-list")

drList.onclick=()=>{
    drsList.classList.toggle("vis")
    depsList.classList.remove("vis")
}



/*
________________________ GET storage  Data ____________________________

*/ 
let c1=[]
let c2=[]
let num1 =0
let num2 =0
let next1=0
let next2=0
let n1BtnVal
let dr1Name
let dep1Name
let n2BtnVal
let dr2Name
let dep2Name
let sound1=document.querySelector("#sound1")
let sound2=document.querySelector("#sound2")

if(localStorage.clinicOne){
    c1=JSON.parse(localStorage.clinicOne)

    if((c1.slice(-1)).length!=0){
        num1=c1[c1.length -1].id
    }
}

if(localStorage.clinicTwo){
    c2=JSON.parse(localStorage.clinicTwo)
    if((c2.slice(-1)).length!=0){
        num2=c2[c2.length -1].id
    }
}
if(localStorage.n1){
    next1=localStorage.n1
}
if(localStorage.n1Btn){
    n1BtnVal=localStorage.n1Btn
}else{
    n1BtnVal='ابـــدا'
}
if(localStorage.dr1){
    dr1Name=localStorage.dr1
}else{
    dr1Name=''
}
if(localStorage.dep1){
    dep1Name=localStorage.dep1
}else{
    dep1Name=''
}
if(localStorage.n2){
    next2=localStorage.n2
}
if(localStorage.n2Btn){
    n2BtnVal=localStorage.n2Btn
}else{
    n2BtnVal='ابـــدا'
}
if(localStorage.dr2){
    dr2Name=localStorage.dr2
}else{
    dr2Name=''
}
if(localStorage.dep2){
    dep2Name=localStorage.dep2
}else{
    dep2Name=''
}









let  clinicOneBodyArr=[]
let x;
let choosedClinic=document.querySelectorAll(".chC")
choosedClinic.forEach(e => {
    e.onclick=()=>{
        choosedClinic.forEach(ele=>{
            ele.classList.remove("choosedC")
            
        })
        e.classList.add("choosedC")
        x = e.innerHTML
    }
});




// DR selection

let choosedDr1 = document.getElementById("drname1")
let choosedDr2 = document.getElementById("drname2")
let drOptions =document.querySelectorAll("#drs-list .dr-d")
choosedDr1.innerText=dr1Name
choosedDr2.innerText=dr2Name

let choosedDep1 = document.getElementById("depart1")
let choosedDep2 = document.getElementById("depart2")
let depOptions =document.querySelectorAll("#deps-list .dr-d")
choosedDep1.innerText=dep1Name
choosedDep2.innerText=dep2Name

drOptions.forEach((el,index)=>{
    el.onclick=(e)=>{
    if(x=="عيادة 1"){
    
    dr1Name=e.target.innerText
    choosedDr1.innerText= dr1Name
    localStorage.setItem('dr1',dr1Name)


    for(let i=0;i<=depOptions.length;i++){
        if(i==index){
            dep1Name= depOptions[i].innerHTML
            choosedDep1.innerText=dep1Name
            localStorage.setItem('dep1',choosedDep1.innerText)
        }
    }
    drsList.classList.remove("vis")
    
}else if(x=="عيادة 2"){
    
    dr2Name=e.target.innerText
    choosedDr2.innerText= dr2Name
    localStorage.setItem('dr2',dr2Name)

    for(let i=0;i<=depOptions.length;i++){
        if(i==index){
            dep2Name= depOptions[i].innerHTML
            choosedDep2.innerText=dep2Name
            localStorage.setItem('dep2',choosedDep2.innerText)
        }
    }

    drsList.classList.remove("vis")
    }}
})







/*
________________________ Display  Data ____________________________

*/ 



function displayData(clinic,table){
    table.innerHTML=''
    clinic.forEach((e,index)=>{
        table.innerHTML+=`
                    <div class="table-body ${e.cls}">
                        <span class="pat-num">${e.id}</span>
                        <span class="pat-name">${e.name}</span>
                        <span class="pat-opt opt-btn">
                            <span class='task-icon delete-icon' onclick='removeItem(${index})'></span>
                            <span class='task-icon edit-icon' onclick='editItem(${index})'></span>
                            <span class='task-icon wait-icon' onclick='waitItem(${index})'></span>
                           
                        </span>
                    </div>
        `
    })
}
let clinicOne=document.querySelector('#table-1 #cont')
let clinicTwo=document.querySelector('#table-2 #cont')
displayData(c1,clinicOne)
displayData(c2,clinicTwo)









/*
________________________ ADD NEW  Data ____________________________

*/ 


let theName=document.querySelector('#thename')
let addBtn=document.querySelector('#add')

    let btnVal
    function addPatient(text){
        btnVal=text.innerHTML

  if(btnVal!="تعديل"){
    let n=theName.value
    if(n!=''){
        if(x=="عيادة 1"){
            num1++
            let p={
                id:num1,    
                name:n,
                cls:'new'
            }
            c1.push(p)
            addStorage('clinicOne',c1)
            displayData(c1,clinicOne)
        }
        else if(x=="عيادة 2"){
            num2++
            let p={
                id:num2,    
                name:n,
                cls:'new'
    
            }
            c2.push(p)    
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
    
          }
    }
    n=''
    theName.value=n
    
    }
    }






// Add to storage

function addStorage(name,data){
localStorage.setItem(name,JSON.stringify(data))
}                                     
                  


/*
________________________ Data OPTIONS ____________________________

*/ 


/*
________________________1- Remove  Data ____________________________

*/ 


let target
let clin= document.querySelectorAll('.table')
clin.forEach(e=>{
    e.onmouseenter=()=>{
        target=e.id
    }}
)

function removeItem(item){
    if(target=='table-1'){
        c1.splice(item,1)
        addStorage('clinicOne',c1)
        displayData(c1,clinicOne)
        if(next1>0&&next1>item){
            next1--
            localStorage.n1=next1
            
        }
        else if(next1>0&&next1<item){
            next1=next1
            localStorage.n1=next1

        }
        else{
            next1=0
            localStorage.n1=next1
            
        }
    }
    if(target=='table-2'){
        c2.splice(item,1)
        addStorage('clinicTwo',c2)
        displayData(c2,clinicTwo)
        if(next2>0&&next2>item){
            next2--
            localStorage.n2=next2
            
        }
        else if(next2>0&&next2<item){
            next2=next2
            localStorage.n2=next2
            
        }
        else{
            next2=0
            localStorage.n2=next2
            
        }

    }
}






let removeAllBtn
let removeAllBtns= document.querySelectorAll('.deleteall')
removeAllBtns.forEach(e=>{
    e.onmouseenter=()=>{
        removeAllBtn=e.id
    }}
)

function removeAll(){
    if(removeAllBtn=='deleteall1'){
        c1=[]
        num1=0
        next1=0
        localStorage.n1=next1
        addStorage('clinicOne',c1)
        displayData(c1,clinicOne)
        nextOneBtn.textContent='ابـــدا'
        n1BtnVal=nextOneBtn.textContent
        localStorage.n1Btn=n1BtnVal
        dr1Name=''
        choosedDr1.innerText=dr1Name
        localStorage.dr1=dr1Name
        dep1Name=''
        choosedDep1.innerText=dep1Name
        localStorage.dep1=dep1Name
    }
    if(removeAllBtn=='deleteall2'){
        c2=[]
        num2=0
        next2=0
        localStorage.n2=next2
        addStorage('clinicTwo',c2)
        displayData(c2,clinicTwo)
        nextTwoBtn.textContent='ابـــدا'
        n2BtnVal=nextTwoBtn.textContent
        localStorage.n2Btn=n2BtnVal
        dr2Name=''
        choosedDr2.innerText=dr2Name
        localStorage.dr2=dr2Name
        dep2Name=''
        choosedDep2.innerText=dep2Name
        localStorage.dep2=dep2Name
        
    }
    
}

/*
________________________2- Edit  Data ____________________________

*/ 

function editItem(item){
    aside.classList.add('show-aside')
    if(target=='table-1'){
        theName.value=c1[item].name
        addBtn.innerHTML='تعديل'
        addBtn.onclick=()=>{
            if(addBtn.innerHTML=='تعديل'){
                c1[item].name=theName.value
                addStorage('clinicOne',c1)
                displayData(c1,clinicOne)
                btnVal='اضافة'
                addBtn.innerHTML=btnVal
                theName.value=''
                location.reload()
            }
            
}


}

if(target=='table-2'){
    theName.value=c2[item].name
    addBtn.innerHTML='تعديل'
    addBtn.onclick=()=>{
        if(addBtn.innerHTML=='تعديل'){
            c2[item].name=theName.value
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
            btnVal='اضافة'
            addBtn.innerHTML=btnVal
            theName.value=''
                location.reload()
            }
        }
    }
}



/*
________________________3- wait  Data ____________________________

*/ 


function waitItem(item){
    if(target=='table-1'){

       if(c1[item].cls!='waiting'){
        c1[item].cls='waiting'
       }else{
        c1[item].cls='completed'

       }
        addStorage('clinicOne',c1)
        displayData(c1,clinicOne)
    }

    if(target=='table-2'){

       if(c2[item].cls!='waiting'){
        c2[item].cls='waiting'
       }else{
        c2[item].cls='completed'

       }
        addStorage('clinicTwo',c2)
        displayData(c2,clinicTwo)
    }



}



























/*
________________________1- Next  Data ____________________________

*/ 

let nextOneBtn=document.querySelector('#next1')
nextOneBtn.textContent=n1BtnVal
nextOneBtn.onclick=()=>{ 
    if(c1.length){
    if(nextOneBtn.textContent=='ابـــدا'){
        nextOneBtn.textContent = 'التالي'
        localStorage.setItem('n1Btn',nextOneBtn.textContent)
        if(next1==0){
            c1[next1].cls='now'
            sound1.play()
     
            addStorage('clinicOne',c1)
            displayData(c1,clinicOne)
            localStorage.setItem('n1',next1)
            
        }
    }
    else{
        if(next1!=(c1.length)-1){
            c1[next1].cls='completed'
            addStorage('clinicOne',c1)
            displayData(c1,clinicOne)
            next1++
            localStorage.n1=next1
            sound1.play()
            c1[next1].cls='now'
            addStorage('clinicOne',c1)
            displayData(c1,clinicOne)
            
        }
        else{
            
            c1[next1].cls='completed'
            addStorage('clinicOne',c1)
            displayData(c1,clinicOne)
            localStorage.n1=next1


        
    }
}  
} 
}
      







let nextTwoBtn=document.querySelector('#next2')
nextTwoBtn.textContent=n2BtnVal
nextTwoBtn.onclick=()=>{ 
    if(c2.length){
    if(nextTwoBtn.textContent=='ابـــدا'){
        nextTwoBtn.textContent = 'التالي'
        localStorage.setItem('n2Btn',nextTwoBtn.textContent)
        if(next2==0){
            c2[next2].cls='now'
            sound2.play()
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
            localStorage.setItem('n2',next2)
            
        }
    }
    else{
        if(next2!=(c2.length)-1){
            c2[next2].cls='completed'
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
            next2++
            localStorage.n2=next2
            sound2.play()
            c2[next2].cls='now'
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
 
        }
        else{
            
            c2[next2].cls='completed'
            addStorage('clinicTwo',c2)
            displayData(c2,clinicTwo)
            localStorage.n2=next2


        
    }
}  
} 
}
      






