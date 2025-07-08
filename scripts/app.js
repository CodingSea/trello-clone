function init()
{
    let insertBtnsElem = document.querySelectorAll("#insertBtn");
    let insertBtnFrmElem = document.querySelectorAll("#insertBtnFrm");
    const closeBtnFrmElem = document.querySelector("#closeBtnFrm");
    const inputTitleElem = document.querySelector("#inputTitle");
    const inputContentElem = document.querySelector("#inputContent");
    let deleteBtnsElem = document.querySelectorAll(".deleteBtn");
    let editBtnsElem = document.querySelectorAll(".editBtn");
    const insertFormElem = document.querySelector(".insertForm");
    let sectionsContentElem = document.querySelectorAll(".sectionContent");
    let deleteSectionBtnsElem = document.querySelectorAll("#deleteSectionBtn");
    const sectionsContainerElem = document.querySelector("#sectionsContainer");
    const sectionInsertBtnsElem = document.querySelector("#sectionInsertBtn");

    let editMode = false;
    let selectedCard;

    function openInsertForm()
    {
        insertBtnFrmElem.textContent = "Insert";
        insertFormElem.classList.add("open");
        editMode = false;
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
        inputTitleElem.value = "";
        inputContentElem.value = "";
        checkForButtons();
    }

    function insertCardForm(button)
    {
        if(editMode == false)
        {
            let content = inputContentElem.value;

            // this line is learned from the internet
            content = content.replace(/\n/g, '<br>');

            sce = button.parentNode.querySelectorAll(".sectionContent");
            
            sce.innerHTML += `<div class="card">
                                                <h2 class="title">${inputTitleElem.value}</h2>
                                                <hr>
                                                <p class="content">${content}</p>
                                                <button class="editBtn">Edit</button>
                                                <button class="deleteBtn">Delete</button>
                                            </div>`;

            inputTitleElem.value = "";
            inputContentElem.value = "";
            checkForButtons();
            closeInsertForm();
        }
        else
        {
            let title = selectedCard.querySelector(".title");
            let content = selectedCard.querySelector(".content");

            title.textContent = inputTitleElem.value;
            content.textContent = inputContentElem.value;

            inputTitleElem.value = "";
            inputContentElem.value = "";
            closeInsertForm();
        }
    }

    function deleteCard(button)
    {
        const card = button.parentNode;
        card.remove();
    }

    function editCard(button)
    {
        const card = button.parentNode;
        selectedCard = card;

        let title = card.querySelector(".title");
        let content = card.querySelector(".content");

        inputTitleElem.value = title.textContent;
        inputContentElem.value = content.textContent;
        openInsertForm();
        insertBtnFrmElem.textContent = "Save";
        checkForButtons();
        editMode = true;
    }

    function checkForButtons()
    {
        insertBtnsElem = document.querySelectorAll("#insertBtn");
        insertBtnsElem.forEach(button => 
        {
            button.addEventListener("click", openInsertForm);
        });

        sectionsContentElem = document.querySelectorAll(".sectionContent");
        insertBtnFrmElem = document.querySelectorAll("#insertBtnFrm");
        insertBtnFrmElem.forEach(button =>
        {
            button.addEventListener("click", function()
            {
                insertCardForm(button);
            });
        });

        deleteBtnsElem = document.querySelectorAll(".deleteBtn");
        deleteBtnsElem.forEach(button => 
        {
            button.addEventListener("click", function()
            {
                deleteCard(this);
                console.log(button.parentNode);
            });
        });

        editBtnsElem = document.querySelectorAll(".editBtn");
        editBtnsElem.forEach(button =>
        {
            button.addEventListener("click", function()
            {
                editCard(button);
            });
        });

        deleteSectionBtnsElem = document.querySelectorAll("#deleteSectionBtn");
        deleteSectionBtnsElem.forEach(button =>
        {
            button.addEventListener("click", function()
            {
                deleteCard(button);
            });
        });
    }

    function insertSection()
    {
        sectionsContainerElem.innerHTML += `<div class="columnContainer">
            <h1><input type="text" value="Section"></h1>
            <button class="sectionBtn" id="insertBtn">+</button>
            <button class="sectionBtn" id="deleteSectionBtn">Delete</button>
            <hr>
            <div class="sectionContent">

            </div>
        </div>`;

        checkForButtons();
    }

    console.log(sectionInsertBtnsElem);

    insertBtnsElem.forEach(button => 
    {
        button.addEventListener("click", openInsertForm);
    });
    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    checkForButtons();
    sectionInsertBtnsElem.addEventListener("click", insertSection);
    
}

document.addEventListener('DOMContentLoaded', init);