
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.l=1;
}

var state = {
    i:0, // 0. nextDress> +1 , 1. nextDress> +1 , 0.
    j:0,
    k:0,
    l:0
};

var dresses = ['dress-1.png', 'dress-2.png']

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);

    var dress = document.getElementById("clothes");

    // state.i = (state.i + 1) % length(dresses)
    // dress.src = dresses[state.i]

    if(state.i===0){
        dress.src =  'dress-1.png'
        state.i++;
        console.log(state.i);
    }
    else
    if(state.i===1){
        dress.src =  'dress-2.png'
        state.i++;
        console.log(state.i);
    }
    else
    if(state.i===2){
        dress.src =  'dress-3.png'
        state.i++;
        console.log(state.i);
    }
    else
    if(state.i===3){
        dress.src = 'dress-4.png'
        state.i=0;
        console.log(state.i);
    } 
}

// TODO: bug here. 
function nextshirt()
{
    console.log("inside function nextshirt");
    console.log(state.l);

    var shirt = document.getElementById("shirt");

    if(state.l === 0){
        shirt.src = ""
        state.l++;
        console.log(state.l);
    }
    else
    if(state.l===1){
        shirt.src = "shirt-1.png"
        state.l = 0;
        console.log(state.l);
    }
}

function nextskin()
{
    console.log("inside function nextskin");
    console.log(state.j);

    var skin = document.getElementById("skin");

    if(state.j===0){
        skin.src = "skin-1.png"
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
        skin.src = "skin-2.png"
        state.j++;
        console.log(state.j);
    }
    if(state.j===2){
        skin.src = "skin-3.png"
        state.j++;
        console.log(state.j);
    }
    if(state.j===3){
        skin.src = "skin-4.png"
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===4){
        skin.src = "skin-5.png"
         state.j=0;
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairFront = document.getElementById("hairfront");
    var hairBack = document.getElementById("hairback");
    
    if(state.k===0){
        hairFront.src = "hairfront-1.png"
        hairBack.src = "hairback-1.png"
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
        hairFront.src = "gingerhairfront.png"
        hairBack.src = "gingerhairback.png"
        state.k = 0;
        console.log(state.k);
    }
}