function createElllement(quaryElement){
    return document.createElement(quaryElement)
}

function getSelector(className){
    return document.querySelector(className)
}

const worksConainer = getSelector(".works")
const addTaskInp = getSelector(".addTaskInp")
//the main fnc that will take every thing of all elements

function createElementHandel(quaryElement, className1 , className2 , className3,textContentValue , ParentOfChild ,fncClickHandel){
    var element1 = createElllement(quaryElement)
    element1.classList.add(className1 , className2 , className3)
    element1.textContent = textContentValue
    ParentOfChild.appendChild(element1)
    element1.onclick = fncClickHandel
    return element1
}

function fncToggleHidden(element){
    element.classList.toggle("hidden")
}

var taskName = addTaskInp.value
getSelector(".addBtn").onclick = function(){
    if(!addTaskInp.value){
        addTaskInp.placeholder = "You must write any word to add*"
    }
    else{
        //hole div of pragraph and icons
        var addDiv = createElementHandel( "div" , "tasktDiv" , false , null , null , worksConainer)
        //task name that has been taken from adding
        var taskNameAdded = createElementHandel("p" ,"taskNameAdded" , null , null ,addTaskInp.value ,addDiv)
        // console.log(taskNameAdded)
        //div of icons
        var  addIconDiv = createElementHandel("div" , "addEditIcon" , null , null , null , addDiv)
        //right Button
        var rightBtn = createElementHandel("button" , "rightBtn" , "iconBtn" , null , null, addIconDiv , rightButtonClickHandel)
        var iconRightChk = createElementHandel("i" , "ri-check-line" , "rightChk" , "icon" , null , rightBtn )
        //edit Button
        var editBtn = createElementHandel("button" , "closeBtn" , "iconBtn" , null , null , addIconDiv , editButtonClickHandel)
        createElementHandel("i" , "ri-edit-2-fill" , "icon" , null , null , editBtn )
        //close Button
        var closeBtn = createElementHandel("button" , "closeBtn" , "iconBtn" , null , null , addIconDiv , closeButtonClickHandel)
        createElementHandel("i" , "ri-close-line" ,"icon" ,"flaseChk" , null , closeBtn)
        //removing the value of the input after adding value
        addTaskInp.value = ""
        function rightButtonClickHandel(){
            taskNameAdded.style.textDecoration = "line-through";
            rightBtn.disabled = true
            iconRightChk.classList.remove("rightChk")
            editBtn.onclick = function(){
                rightBtn.disabled = false
                iconRightChk.classList.add("rightChk")
                taskNameAdded.style.textDecoration = "none";
                editButtonClickHandel()
            }
        }
        function closeButtonClickHandel(){
            addDiv.remove()
        }
        var nothing = getSelector(".taskNameAdded").value
        function editButtonClickHandel(){
            var addingInpInsOfPra = createElllement("input")
            addingInpInsOfPra.value = getSelector(".taskNameAdded").textContent
            console.log(document.querySelector(".taskNameAdded"))
            addingInpInsOfPra.classList.add("inputMsg")
            addDiv.appendChild(addingInpInsOfPra)
            addingInpInsOfPra.focus()
            fncToggleHidden(taskNameAdded)
            var rightnullDiv = createElementHandel("div" , "addEditIcon" , null , null , null , addDiv)
            fncToggleHidden(addIconDiv)
            //right Button
            var rightBtn = createElementHandel("button" , "rightBtn" , "iconBtn" , null , null , rightnullDiv , rightBtnEditHandel)
            createElementHandel("i" , "nothing" , "rightChk" , "icon_msg" , "Update" , rightBtn )
            //close Button
            var closeBtn = createElementHandel("button" , "closeBtn" , "iconBtn" , null , null , rightnullDiv , closeBtnEditHandel)
            createElementHandel("i" , "nothing" ,"icon_msg" ,"flaseChk" , "Cancel" , closeBtn)

            function fncRightCloseBtn(){
                fncToggleHidden(rightnullDiv)
                fncToggleHidden(addingInpInsOfPra)
                fncToggleHidden(addIconDiv)
                fncToggleHidden(taskNameAdded)
            }
            function rightBtnEditHandel(){
                fncRightCloseBtn()
                taskNameAdded.textContent = addingInpInsOfPra.value
                if(addingInpInsOfPra.value <= 0)
                    addDiv.remove()
            }
            function closeBtnEditHandel(){
                fncRightCloseBtn()
            }
        }
    }
}