const btnS=document.querySelector('#darkandlight');

btnS.addEventListener('click',()=>{
    document.body.classList.toggle('dark');  
    btnS.classList.toggle('active');

});