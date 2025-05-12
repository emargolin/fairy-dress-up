let skins = ["skins/skin-1.png", "skins/skin-2.png", "skins/skin-3.png", "skins/skin-4.png", "skins/skin-5.png"]
let dresses = ['dresses/dress-1.png', 'dresses/dress-2.png', 'dresses/dress-3.png', 'dresses/dress-4.png']
let hairs = [["hair/gingerhairfront.png", "hair/gingerhairback.png"], ["hair/hairfront-1.png", "hair/hairback-1.png"]]

window.onload = () => {
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.l=1;
}

var state = {
    i:0,
    j:0,
    k:0,
    l:0
};

function nextdress()
{
    var dress = document.getElementById("clothes");
    state.i = (state.i + 1) % dresses.length
    dress.src = dresses[state.i];
}

function nextshirt()
{
    var shirt = document.getElementById("shirt");

    if (state.l === 0) {
        shirt.hidden = false
        state.l = 1;
    }
    else if (state.l === 1) {
        shirt.hidden = true
        state.l = 0;
    }
}

function nextskin()
{
    var skin = document.getElementById("skin");
    state.j = (state.j + 1) % skins.length
    skin.src = skins[state.j];
}

function nexthair()
{
    var hairFront = document.getElementById("hairfront");
    var hairBack = document.getElementById("hairback");

    state.k = (state.k + 1) % hairs.length
    hairFront.src = hairs[state.k][0];
    hairBack.src = hairs[state.k][1];
}