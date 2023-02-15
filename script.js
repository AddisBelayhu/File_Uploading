const btn = document.querySelector('button');

btn.addEventListener('click', () =>{

    const files = []; 
    document.querySelectorAll('input[type="file"]').forEach((input) =>{
        files.push(input.files[0]);
    })
    
})


