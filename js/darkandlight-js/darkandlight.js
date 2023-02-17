const btnS=document.querySelector('#darkandlight');

btnS.addEventListener('click',()=>{
    document.body.classList.toggle('light');  
    btnS.classList.toggle('active');

});