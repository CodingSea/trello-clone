function init()
{
    const insertBtnElem = document.querySelector("#insertBtn");
    const insertBtnFrmElem = document.querySelector("#insertBtnFrm");
    const closeBtnFrmElem = document.querySelector("#closeBtnFrm");
    const inputTitleElem = document.querySelector("#inputTitle");
    const inputContentElem = document.querySelector("#inputContent");
    let deleteBtnsElem = document.querySelectorAll(".deleteBtn");
    let editBtnsElem = document.querySelectorAll(".editBtn");

    const insertFormElem = document.querySelector(".insertForm");
    const sectionContentElem = document.querySelector(".sectionContent");

    function openInsertForm()
    {
        insertBtnFrmElem.textContent = "Insert";
        insertFormElem.classList.add("open");
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
        checkForButtons();
    }

    function insertCardForm()
    {
        if(insertBtnFrmElem.textContent == "Insert")
        {
            let content = inputContentElem.value;

            // this line is learned from the internet
            content = content.replace(/\n/g, '<br>');
            
            sectionContentElem.innerHTML += `<div class="card">
                                                <h2>${inputTitleElem.value}</h2>
                                                <hr>
                                                <p>${content}</p>
                                                <button class="editBtn">Edit</button>
                                                <button class="deleteBtn">Delete</button>
                                            </div>`;

            inputTitleElem.value = "";
            inputContentElem.value = "";
            checkForButtons();
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

        const title = card.querySelector(".title");
        const content = card.querySelector(".content");

        inputTitleElem.value = title.textContent;
        inputContentElem.value = content.textContent;
        openInsertForm();
        insertBtnFrmElem.textContent = "Save";
    }

    function checkForButtons()
    {
        deleteBtnsElem = document.querySelectorAll(".deleteBtn");
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
            button.addEventListener("click", function()
            {
                editCard(button);
            });
        });
    }

    insertBtnElem.addEventListener("click", openInsertForm);
    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    insertBtnFrmElem.addEventListener("click", insertCardForm);
    checkForButtons();

    document.addEventListener("DOMNodeInserted", checkForButtons);
}

document.addEventListener('DOMContentLoaded', init);