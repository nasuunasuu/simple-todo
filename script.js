document.addEventListener('DOMContentLoaded', () => {
    loadLists()
})

function addList() {
    var listInput = document.getElementById('listInput')
    var listContent = listInput.value.trim()

    if (listContent !== "") {
        var ul = document.getElementById('lists')
        var li = document.createElement('li')

        var doneButton = document.createElement('button')
        doneButton.textContent='完了'
        doneButton.addEventListener('click',()=>{
            isDone=true
            alert('完了！')
        })

        var textNode = document.createTextNode(listContent); // テキストノードを作成
        li.appendChild(textNode); // テキストノードを<li>要素に追加
        li.appendChild(doneButton)

        //li.textContent = listContent
        ul.appendChild(li)
        listInput.value = ""
        saveLists()
    }
}

function saveLists() {
    var lists = [];
    var lis = document.querySelectorAll('#lists li')
    lis.forEach(li => {
        lists.push({
            list: li.textContent,
            isDone: false,

        })
    })
    localStorage.setItem('lists', JSON.stringify(lists))
}


function loadLists() {
    var lists = JSON.parse(localStorage.getItem('lists')) || []
    var ul = document.getElementById('lists')
    lists.forEach((list) => {
        var li = document.createElement('li')
        li.textContent = list.list

        ul.appendChild(li)
    })

}