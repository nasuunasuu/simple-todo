document.addEventListener('DOMContentLoaded',()=>{
    loadLists()
})

function addList(){
    var listInput=document.getElementById('listInput')
    var listContent=listInput.value.trim()

    if(listContent!==""){
        var ul=document.getElementById('lists')
        var li =document.createElement('li')

        li.textContent=listContent
        ul.appendChild(li)
        listInput.value=""
        saveLists()
    }
}

function saveLists(){
    var lists=[];
    var lis=document.querySelectorAll('#list li')
    lis.forEach(()=>{
        lists.push({
            list:  li.textContent
        })
    })
    localStorage.setItem('lists',JSON.stringify(lists))
}
