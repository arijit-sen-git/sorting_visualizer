var i, inp_as = document.getElementById("a_size")
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var array_size = inp_as.value;
var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [], divs = [], margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

for (i = 0; i < butts_algos.length; i++)
    butts_algos[i].addEventListener("click", runalgo);

function disable_buttons() {
    for(i = 0;i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");

    if (this.innerHTML === "Bubble") 
        Bubble();
    else if (this.innerHTML === "Selection") 
        Selection_sort();
    else if (this.innerHTML === "Insertion") 
        Insertion();
    else if (this.innerHTML === "Merge") 
        Merge();
    else if (this.innerHTML === "Quick") 
        Quick();
    else if (this.innerHTML === "Heap") 
        Heap();
}