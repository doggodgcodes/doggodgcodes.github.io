// og code from https://github.com/R74nCom/Sandboxels-Mods/blob/main/mods/1.10example.js just using as base


/* == Custom View Modes == */

viewInfo[4] = { // Small Pixels
    name: "grid",
    pre: function(ctx) {
        // run any code before pixels are rendered
        drawSquare(ctx,"#00ff00",20,20,5);
    },
    pixel: function(pixel,ctx) {
        // run any code when each individual pixel is rendered
        drawSquare(ctx,pixel.color,pixel.x,pixel.y,0.66)
    },
    post: function(ctx) {
        // run any code after pixels are rendered
        drawPlus(ctx,"#ff0000",10,10) // Like a gas
    }
};

// Number keys will automatically switch views.



/* == Custom Element Renderers == */

elements.ball.renderer = function(pixel,ctx) {
    // Draw three horizontal squares
    drawSquare(ctx,"#00ff00",pixel.x,pixel.y-1);
    drawSquare(ctx,"#ff0000",pixel.x,pixel.y);
    drawSquare(ctx,"#0000ff",pixel.x,pixel.y+1);
};



/* == Custom Global Renderers == */

renderEachPixel(function(pixel,ctx) {
    // run any code when each individual pixel is rendered
    if (pixel.element === "rock") {
        drawSquare(ctx,"#00ff00",pixel.x,pixel.y+20);
    }
})
renderPrePixel(function(ctx) {
    // run any code before pixels are rendered
    drawSquare(ctx,"#ff00ff",10,40);
})
renderPostPixel(function(ctx) {
    // run any code after pixels are rendered
    drawSquare(ctx,"#ffff00",30,40);
})

runPerPixel(function(pixel) {
    // run any code on each pixel every tick
    tryMove(pixel,pixel.x+1,pixel.y);
})

runEveryTick(function() {
    // run any code after pixels are simulated per tick
    if (pixelTicks % 90 === 0) {
        logMessage("tick"+pixelTicks);
    }
})


// If you NEED to overwrite drawPixels(), which is NOT RECOMMENDED, you must return true.
/*
oldDrawPixels = drawPixels;
drawPixels = function(forceTick=false) {
    oldDrawPixels(forceTick);
    // ...
    return true;
};
*/



/* == Custom canvas layers == */

// WARNING: Performance may decrease. Use canvasLayers.pixels unless necessary.
addCanvasLayer("effects");
// One of the following is required to have the layer render automatically.
canvasLayersPost.push(canvasLayers["effects"]); // Render after pixels
// canvasLayersPre.push(canvasLayers["effects"]); // Render before pixels

effectsCtx = canvasLayers["effects"].getContext("2d");



/* == Custom Keybinds == */

keybinds["KeyA"] = function(e) {
    logMessage("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}
keybinds["KeyW"] = function(e) {
    logMessage("WOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOW");
}
keybinds["KeyS"] = function(e) {
    logMessage("Subscribe to DoggoWing21 on YouTube!");
}
keybinds["KeyD"] = function(e) {
    logMessage("Doge is the funniest meme bro!");
}
keybinds["KeyB"] = function(e) {
    logMessage("B for Burger!")
    logMessage("Burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger is burger");
}
keybinds["KeyF"] = function(e) {
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
    logMessage("This is a dumb mod I made.")
}



/* == New Element Events == */

elements.packedSand.onPlace = function(pixel) {
    logMessage(pixel.element+" placed")
}
elements.packedSand.onDelete = function(pixel) {
    logMessage(pixel.element+" deleted at "+pixelTicks)
}
elements.packedSand.onChange = function(pixel,element) {
    logMessage(pixel.element+" changed into "+element)
}
elements.packedSand.onBreak = function(pixel) {
    // breakInto property not necessary to fire
    logMessage(pixel.element+" broken")
}
