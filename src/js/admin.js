import '../scss/main.scss';

document.addEventListener("DOMContentLoaded", ()=> {

    document.getElementById('portal-btn').addEventListener("click", (e)=>{
        let selection = document.getElementById("portal-select").value;
        console.log(selection);
        if (selection) window.open(selection,'_blank');
    });
})


