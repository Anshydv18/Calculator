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