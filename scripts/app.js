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
    let deleteSectionBtnsElem = document.querySelectorAll("#deleteSectionBtn");
    const sectionsContainerElem = document.querySelector("#sectionsContainer");
    const sectionInsertBtnsElem = document.querySelector("#sectionInsertBtn");

    let editMode = false;
    let selectedCard;
    let selectedSection;

    /*
    const selectedObject =
    {
        selectedSection,
        selectedCard,
        

        getSelectedObject(section)
        {
            selectedSection = section;
            
        }
    }*/

    function openInsertForm(button)
    {
        if(editMode)
        {
            insertBtnFrmElem.textContent = "Save";
            insertFormElem.classList.add("open");
            editMode = false;
            selectedSection = button.parentNode.parentNode.parentNode;
            console.log(selectedSection);
            selectedCard = button.parentNode;
        }
        else
        {
            insertBtnFrmElem.textContent = "Insert";
            insertFormElem.classList.add("open");
            editMode = false;
            selectedSection = button.parentNode;
        }
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
        inputTitleElem.value = "";
        inputContentElem.value = "";
        //checkForButtons();
    }

    function insertCardForm(button)
    {
        if(editMode == false)
        {
            let content = inputContentElem.value;

            // this line is learned from the internet
            content = content.replace(/\n/g, '<br>');

            const contentElem = selectedSection.querySelector(".sectionContent");

            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.innerHTML += `<h2 class="title">${inputTitleElem.value}</h2>
                                                <hr>
                                                <p class="content">${content}</p>
                                                <button class="editBtn">Edit</button>
                                                <button class="deleteBtn">Delete</button>`;

            const cardDeleteBtn = newCard.querySelector(".deleteBtn");

            cardDeleteBtn.addEventListener("click",function(event)
            {
                console.log("pressed");
                deleteCard(cardDeleteBtn);
            });

            contentElem.appendChild(newCard);

            inputTitleElem.value = "";
            inputContentElem.value = "";
        }
        else
        {
            let title = selectedCard.querySelector(".title");
            let content = selectedCard.querySelector(".content");

            title.textContent = inputTitleElem.value;
            content.textContent = inputContentElem.value;
        }

        closeInsertForm();
        //checkForButtons();
        inputTitleElem.value = "";
        inputContentElem.value = "";
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
        editMode = true;
        openInsertForm(button);
        //checkForButtons();
        
    }

    function checkForButtons()
    {
        insertBtnsElem = document.querySelectorAll("#insertBtn");
        insertBtnsElem.forEach(button => 
        {
            editMode = false;
            button.removeEventListener("click", function(){openInsertForm(button);});
        });
        insertBtnsElem.forEach(button => 
        {
            editMode = false;
            button.addEventListener("click", function(){openInsertForm(button);});
        });



        insertBtnFrmElem = document.querySelectorAll("#insertBtnFrm");
        insertBtnFrmElem.forEach(function(button)
        {
            button.removeEventListener("click", function()
            {
                insertCardForm(button);
            });
        });
        insertBtnFrmElem.forEach(function(button)
        {
            button.addEventListener("click", function()
            {
                insertCardForm(button);
            });
        });



        deleteBtnsElem = document.querySelectorAll(".deleteBtn");
        deleteBtnsElem.forEach(button => 
        {
            button.removeEventListener("click", function()
            {
                deleteCard(this);
            });
        });
        deleteBtnsElem.forEach(button => 
        {
            button.addEventListener("click", function()
            {
                deleteCard(this);
            });
        });




        editBtnsElem = document.querySelectorAll(".editBtn");
        editBtnsElem.forEach(button =>
        {
            button.removeEventListener("click", function()
            {
                editMode = true;
                editCard(button);
            });
        });
        editBtnsElem.forEach(button =>
        {
            button.addEventListener("click", function()
            {
                editMode = true;
                editCard(button);
            });
        });




        deleteSectionBtnsElem = document.querySelectorAll("#deleteSectionBtn");
        deleteSectionBtnsElem.forEach(button =>
        {
            button.removeEventListener("click", function()
            {
                deleteCard(button);
            });
        });
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
        sectionsContainerElem.innerHTML += `<div class="sectionContainer">
            <h1><input type="text" value="Section"></h1>
            <button class="sectionBtn" id="insertBtn">+</button>
            <button class="sectionBtn" id="deleteSectionBtn">Delete</button>
            <hr>
            <div class="sectionContent">

            </div>
        </div>`;

        //checkForButtons();
    }

    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    checkForButtons();
    sectionInsertBtnsElem.addEventListener("click", insertSection);
    
}

document.addEventListener('DOMContentLoaded', init);