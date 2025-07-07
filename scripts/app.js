function init()
{
    const insertBtnElem = document.querySelector("#insertBtn");
    const insertBtnFrmElem = document.querySelector("#insertBtnFrm");
    const closeBtnFrmElem = document.querySelector("#closeBtnFrm");

    const insertFormElem = document.querySelector(".insertForm");

    function openInsertForm()
    {
        insertFormElem.classList.add("open");
    }

    function closeInsertForm()
    {
        insertFormElem.classList.remove("open");
    }

    insertBtnElem.addEventListener("click", openInsertForm);
    closeBtnFrmElem.addEventListener("click", closeInsertForm);
}

document.addEventListener('DOMContentLoaded', init);