const btn = document.querySelector('button');

btn.addEventListener('click', () =>{

    //get and prepair files
    const files = []; 
    document.querySelectorAll('input[type="file"]').forEach((input) =>{
        files.push(input.files[0]);
    })
    
    //console.log(String(files));
    const fd = new FormData();
    files.forEach((file, i) => {
    fd.append('file'+ i, file);
})
    
     //upload file

fetch('http://httpbin.org/post',{
    method: 'POST',
    body: fd,
})
    
})


