let title = document.querySelectorAll('.product__title')
let block = document.querySelectorAll('.block')
let tab = document.getElementById('row')




if (document.documentElement.clientWidth > 768) {
    destop()
}
if (document.documentElement.clientWidth <= 768) {
    mobile()
}


function destop(){
hideContent(1)
 function hideContent(a){
    for(let i= a; i<block.length;i++){
        block[i].classList.remove('show')
        block[i].classList.add('none')
        title[i].classList.add('out')
    }
 }
tab.addEventListener('click',func)
function func(event){
    let target = event.target
        if(target.classList.contains('tab')){
            for(let i =0;i<title.length;i++){
                if(target == title[i]){
                    showContent(i);
                    break
                }
            }
        }
}
function showContent(b){
    if(block[b].classList.contains('none')){
        hideContent(0);
        title[b].classList.remove('out');
        block[b].classList.remove('none');
        block[b].classList.add('show')
    }
}
}
function mobile(){
    hideContent(0)
 function hideContent(a){
    for(let i= a; i<block.length;i++){
        block[i].classList.remove('show')
        block[i].classList.add('none')
        title[i].classList.remove('borderbotton')
        title[i].classList.add('vector--up')
        
    }
 }
 tab.addEventListener('click',func)
function func(event){
    let target = event.target
    
        if(target.classList.contains('vector--up')){
            for(let i =0;i<title.length;i++){
                if(target == title[i]){
                    showContent(i);
                    break
                }
            }
        }else if( ! target.classList.contains('vector--up')){
            for(let i =0;i<title.length;i++){
                if(target == title[i]){
                hideContent(i)
                title[i].classList.add('vector--up')
                title[i].classList.remove('vector--down')
                }
            }
    }
      

}
function showContent(b){
    if(block[b].classList.contains('none')){
        hideContent(0);
        title[b].classList.remove('vector--up')
        title[b].classList.add('vector--down')
        title[b].classList.add('borderbotton');
        block[b].classList.remove('none');
        block[b].classList.add('show')
    }
  
}
}
