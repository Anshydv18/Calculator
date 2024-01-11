const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.style.setProperty('--bgcolor','#01080a');
        document.documentElement.style.setProperty('--gradiant','linear-gradient(135deg, #01080a 0%, #204559 100%)');
        document.documentElement.style.setProperty('--text','#0a2929');
        document.documentElement.style.setProperty('--equal','black');
    }
    else{
        document.documentElement.style.setProperty('--bgcolor','#D9AFD9');
        document.documentElement.style.setProperty('--gradiant','linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)');
        document.documentElement.style.setProperty('--text','#D67BFF');
        document.documentElement.style.setProperty('--equal','rgba(85, 17, 70, 0.847)');
    }
})



let res = document.getElementById('display');

function append(value){
    res.value+=value;
    playsound();
}

function backspace(){
    if(res.value=='Error'){
        res.value = '';
    }
    res.value = res.value.slice(0,-1);
    playsound();
}

function saaf(){
    res.value='';
    playsound();
}
function cal(){
    playsound();
    try{
        if(res.value=='') {
            res.value='0';
        }
        res.value=eval(res.value);

    }
    catch(e){
        res.value='ERROR';
    }
}

// function for playing sound

function playsound(){
    const music = document.getElementById('sound');
    music.currentTime=0;
    music.play();
}