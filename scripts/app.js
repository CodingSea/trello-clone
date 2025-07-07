function init()
{
    const insertBtnElem = document.querySelector("#insertBtn");
    const insertBtnFrmElem = document.querySelector("#insertBtnFrm");
    const closeBtnFrmElem = document.querySelector("#closeBtnFrm");
    const inputTitleElem = document.querySelector("#inputTitle");
    const inputContentElem = document.querySelector("#inputContent");
    let deleteBtnsElem = document.querySelectorAll(".deleteBtn");

    const insertFormElem = document.querySelector(".insertForm");
    const sectionContentElem = document.querySelector(".sectionContent");

    function openInsertForm()
    {
        insertFormElem.classList.add("open");
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
    }

    function insertCardForm()
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

        deleteBtnsElem = document.querySelectorAll(".deleteBtn");
        deleteBtnsElem.forEach(button => 
        {
            button.addEventListener("click", function()
            {
                deleteCard(this);
            });
        });
    }

    function deleteCard(button)
    {
        const card = button.parentNode;
        card.remove();
    }

    insertBtnElem.addEventListener("click", openInsertForm);
    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    insertBtnFrmElem.addEventListener("click", insertCardForm);
    deleteBtnsElem.forEach(button => 
    {
        button.addEventListener("click", function()
        {
            deleteCard(this);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);