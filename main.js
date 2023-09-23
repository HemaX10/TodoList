function gettingElements(quaryElement){
    return document.querySelector(quaryElement)
}
const addBtn = gettingElements(".addBtn")
const worksConainer = gettingElements(".works")
const addTaskInp = gettingElements(".addTaskInp")

// function createElement(ElementWanted){
//     return document.createElement(ElementWanted)
// }
//the main fnc that will take every thing of all elements

// function createElementHandel(element1 ,quaryElement1, class1Name1 , class1Name2 ,element2, quaryElement2 , class2Name1 , class2name2 , class2name3 ,textContentValue , ParentOfChild ,fncClickHandel){
//     var element1 = createElement(quaryElement1)
//     element1.classList.add(class1Name1 , class1Name2)
//     element1.textContent = textContentValue
//     ParentOfChild.appendChild(element1)
//     var element2 = createElement(quaryElement2)
//     element2.classList.add(class2Name1 , class2name2 , class2name3)
//     element1.appendChild(element2)
// }

addBtn.onclick = function(){
    if(!addTaskInp.value){
        addTaskInp.placeholder = "You must write any word to add*"
    }
    else{
    //adding the main Div
    var addDiv = document.createElement("div")
    addDiv.classList.add("tasktDiv")

    //adding the task name value
    var taskNameAdded = document.createElement("p")
    taskNameAdded.classList.add("taskNameAdded" , "taskNameAdded")
    taskNameAdded.textContent = addTaskInp.value
    addDiv.appendChild(taskNameAdded)

    //icon div 
    var addIconDiv = document.createElement("div")
    addIconDiv.classList.add("addEditIcon")
    addDiv.appendChild(addIconDiv)

    //icons right and edit and close
    //right btn
    const rightBtn = document.createElement("button")
    rightBtn.classList.add("rightBtn"  , "iconBtn")
    var addChkRight = document.createElement("i")
    addChkRight.classList.add("ri-check-line" , "rightChk" , "icon")
    rightBtn.appendChild(addChkRight)
    addIconDiv.appendChild(rightBtn)

    //edit btn
    var editBtn = document.createElement("button")
    editBtn.classList.add("editBtn" , "iconBtn")
    var addEditIcon = document.createElement("i")
    addEditIcon.classList.add("ri-edit-2-fill" , "icon")
    editBtn.appendChild(addEditIcon)
    addIconDiv.appendChild(editBtn)

    //remove btn
    var closeBtn = document.createElement("button")
    closeBtn.classList.add("closeBtn"  , "iconBtn")
    var addChkClose = document.createElement("i")
    addChkClose.classList.add("ri-close-line" ,"icon" ,"flaseChk")
    closeBtn.appendChild(addChkClose)
    addIconDiv.appendChild(closeBtn)
    worksConainer.appendChild(addDiv)

    //when user click on right btn
    rightBtn.onclick = function(){
        taskNameAdded.style.textDecoration = "line-through";
        rightBtn.disabled = true
        addChkRight.classList.remove("rightChk")
        editBtn.onclick = function(){
            rightBtn.disabled = false
            addChkRight.classList.add("rightChk")
            taskNameAdded.style.textDecoration = "none";
            editButtonClickHandel()
        }
    }
    }
    closeBtn.onclick = function(){
        addDiv.remove()
    }
 
    //trying to get the task name with another way and edit btn
    var taskName = addTaskInp.value

    editBtn.onclick = editButtonClickHandel
    
    function editButtonClickHandel(){
        var addingInpInsOfPra = document.createElement("input")
        addingInpInsOfPra.value = taskName
        addDiv.appendChild(addingInpInsOfPra)
        addingInpInsOfPra.focus()

        taskNameAdded.classList.toggle("hidden")
        // addIconDiv.style.display = "none"

        var rightfalseDiv = document.createElement("div")
        rightfalseDiv.classList.add("addEditIcon")
        addDiv.appendChild(rightfalseDiv)
        addIconDiv.classList.toggle("hidden") ///
        //icons right and edit and close
        //right btn
        var rightBtn = document.createElement("button")
        rightBtn.classList.add("rightBtn"  , "iconBtn")
        var addChkRight = document.createElement("i")
        addChkRight.classList.add("ri-check-line" , "rightChk" , "icon")
        rightBtn.appendChild(addChkRight)
        rightfalseDiv.appendChild(rightBtn)

        //edit btn
        var closeBtn = document.createElement("button")
        closeBtn.classList.add("closeBtn"  , "iconBtn")
        var addChkClose = document.createElement("i")
        addChkClose.classList.add("ri-close-line" ,"icon" ,"flaseChk")
        closeBtn.appendChild(addChkClose)
        rightfalseDiv.appendChild(closeBtn)

        rightBtn.onclick = function(){
            addIconDiv.classList.toggle("hidden")
            rightfalseDiv.classList.toggle("hidden")
            addingInpInsOfPra.classList.toggle("hidden")
            taskNameAdded.textContent = addingInpInsOfPra.value
            taskNameAdded.classList.toggle("hidden")
            if(addingInpInsOfPra.value <= 0){
                addDiv.remove()
            }
        }

        closeBtn.onclick = function(){
            rightfalseDiv.classList.toggle("hidden")
            addingInpInsOfPra.classList.toggle("hidden")
            addIconDiv.classList.toggle("hidden")
            taskNameAdded.classList.toggle("hidden")
            taskNameAdded.value = taskName
        }
    }
}

//145 line before doing anything




