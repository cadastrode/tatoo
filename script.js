var count=1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proximaImage();
}, 1000)

function proximaImage() {
    count++;
    if(count>6){
        count=1;
    }
    document.getElementById("radio"+count).checked =true;
}

function clickMenu(){
    
    if(men.style.display=='block'){
        men.style.display='none'
    }else{
        men.style.display='block'
    }
}