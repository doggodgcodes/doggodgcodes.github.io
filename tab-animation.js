frame = ["doggodgcodes", "d oggodgcodes", "do ggodgcodes", "dog godgcodes", "dogg odgcodes", "doggo dgcodes", "doggod gcodes", "doggodg codes", "doggodgc odes", "doggodgco des", "doggodgcod es", "doggodgcode s"];
i = 0;

function tab() {
    document.title = frame[i];
    if (i < frame.length - 1) {
        i++;
    }
    setTimeout(tab, 100);
}

tab()