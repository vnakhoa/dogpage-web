let k = document.querySelector('#nav');
document.querySelector('.menu').addEventListener('click', ()=> {
    
    if(k.className == 'link'){
        console.log('khoaaa');
        k.className += ' dblock';
    }
    else{
        k.className = 'link';
    }
})


