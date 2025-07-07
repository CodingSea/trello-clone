function init()
{
    const insertBtnElem = document.querySelector("#insertBtn");
    const insertBtnFrmElem = document.querySelector("#insertBtnFrm");
    const closeBtnFrmElem = document.querySelector("#closeBtnFrm");
    const inputTitleElem = document.querySelector("#inputTitle");
    const inputContentElem = document.querySelector("#inputContent");

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

        // Replace newline characters with <br> tags
        content = content.replace(/\n/g, '<br>');
        
        sectionContentElem.innerHTML += `<div class="card">
                                            <h2>${inputTitleElem.value}</h2>
                                            <hr>
                                            <p>${content}</p>
                                            <button class="editBtn">Edit</button>
                                            <button class="deleteBtn">Delete</button>
                                        </div>`
    }

    insertBtnElem.addEventListener("click", openInsertForm);
    closeBtnFrmElem.addEventListener("click", closeInsertForm);
    insertBtnFrmElem.addEventListener("click", insertCardForm);
}

document.addEventListener('DOMContentLoaded', init);