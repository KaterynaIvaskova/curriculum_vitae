document.addEventListener('DOMContentLoaded', function(){
    let txt="";

     function menu() {
         
    
       const menu=[
        ['index.html', 'Home', 'Home'],      
        ['education.html', 'Education', 'Education'],   
        ['experience.html', 'Experience', 'Experience'],   
        ['skills.html', 'Skills', 'Skills'],   
        ['certificates.html', 'Certificates', 'Certificates'],
        ['contact.html', 'Contact', 'Contact']
        
    ];  
       
       menu.forEach(function(elementMenu){
          txt +='<a href="' + elementMenu[0] + '"' + ' title="' + elementMenu[2] + '">';
          txt +=elementMenu[1] + "</a>";
       });
       
        
    return txt;
}
document.getElementById('nav1').innerHTML=menu();   

/*const email = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();
    let error = formValidate (form);
    
}
function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    
    for (let i=0; i <formReq.length; i++){
        const input = formReq[i];
    }
} */
   
});

