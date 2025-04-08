
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);

    var dress=document.getElementById("clothes");

    if(state.i===0){
        dress.src =  'dress1.png'
        // dress.setAttribute("class","dress1.png");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
        dress.src =  'dress2.png'
    // dress.setAttribute("class","dress2.png");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
        dress.src =  'dress3.png'
    // dress.setAttribute("class","dress3.png");
         state.i=0;
    }
    
}

function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
        shoe.src = "shoe1.png"
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
        shoe.src = "shoe2.png"
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
        shoe.src = "shoe3.png"
         state.j=0;
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("hairfront");
    var hairb=document.getElementById("hairback");
    hairb.setAttribute("class","hairback");
    
    if(state.k===0){
        hairf.src = "hairfront1.png"
    // hairf.setAttribute("class","hairfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
        hairf.src = "hairfront2.png"
    // hairf.setAttribute("class","hairfront2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
        hairf.src = "hairfront3.png"
    // hairf.setAttribute("class","hairfront3");
         state.k=0;
    }
    
}