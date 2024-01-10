let res = document.getElementById('display');

function append(value){
    res.value+=value;
}

function backspace(){
    if(res.value=='Error'){
        res.value = '';
    }
    res.value = res.value.slice(0,-1);

}

function saaf(){
    res.value='';
}
function cal(){
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