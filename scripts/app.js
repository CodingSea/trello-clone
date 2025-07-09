function init()
{
    let insertBtnsElem = document.querySelectorAll("#insertBtn");
    let insertBtnFrmElem = document.querySelector("#insertBtnFrm");
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
            selectedSection = button.parentNode.parentNode.parentNode;
            selectedCard = button.parentNode;
        }
        else
        {
            insertBtnFrmElem.textContent = "Insert";
            insertFormElem.classList.add("open");
            selectedSection = button.parentNode;
        }
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
        inputTitleElem.value = "";
        inputContentElem.value = "";
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
                deleteCard(cardDeleteBtn);
            });

            const cardEditBtn = newCard.querySelector(".editBtn");
            cardEditBtn.addEventListener("click",function(event)
            {
                editCard(cardEditBtn);
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
        editMode = true;

        let title = card.querySelector(".title");
        let content = card.querySelector(".content");

        inputTitleElem.value = title.textContent;
        inputContentElem.value = content.textContent;
        openInsertForm(button);
    }

    function insertSection()
    {
        const tempSection = document.createElement("div");
        tempSection.classList.add("sectionContainer");

        tempSection.innerHTML += `<h1><input type="text" value="Section"></h1>
            <button class="sectionBtn" id="insertBtn">+</button>
            <button class="sectionBtn" id="deleteSectionBtn">Delete</button>
            <hr>
            <div class="sectionContent">

            </div>`;

        const sectionInsertBtn = tempSection.querySelector("#insertBtn");
        const sectionDeleteBtn = tempSection.querySelector("#deleteSectionBtn");

        sectionInsertBtn.addEventListener("click", function()
        {
            editMode = false;
            openInsertForm(sectionInsertBtn);
        });

        sectionDeleteBtn.addEventListener("click", function()
        {
            deleteCard(sectionDeleteBtn);
        });

        sectionsContainerElem.appendChild(tempSection);
    }

    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    insertBtnFrmElem.addEventListener("click", function(event)
    {
        insertCardForm(event);
    });
    sectionInsertBtnsElem.addEventListener("click", insertSection);
    
}

document.addEventListener('DOMContentLoaded', init);