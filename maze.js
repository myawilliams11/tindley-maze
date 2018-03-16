const mazeDiv = document.getElementById("mazeDiv");
const avatar = document.getElementById("avatar");

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
var avatarRow, avatarCol;

// Initial scan of the map
// Create all the visual elements (divs)
// The static parts of the map will be a grid of flex positioned divs.
// They will get created here, and never modified again.
// The moving player will be an absolutely positioned div on top.
for(var row = 0; row < map.length; row++) {
    var rowStr = map[row];
    var rowDiv = document.createElement("div");
    rowDiv.className = "row";
    
    for(var i = 0; i < rowStr.length; i++) {
        const cellClass = rowStr[i];
        var cellDiv = document.createElement("div");
        cellDiv.className = "cell " + cellClass;
        if(cellClass === "S") {
            avatarCol = i;
            avatarRow = row;
        }
        if(cellClass === "S" || cellClass === "F") {
            cellDiv.innerHTML = cellClass;
        }
        rowDiv.appendChild(cellDiv);
    }
    mazeDiv.appendChild(rowDiv);
}

// Update the coordinates of the player's avatar.
// Add a class indicating which animation to show.
// Set a timeout to remove the animation class after the animation completes.
function redrawAvatar(anim) {
    avatar.className = "";
    avatar.style.top = avatarRow*delta + "px";
    avatar.style.left = avatarCol*delta + "px";
    avatar.className = anim;
    setTimeout(function() {
		avatar.classList.remove(anim);
	}, 100);
}

redrawAvatar("slideRight");

// Move the player's avatar in the specified direction
// dRow is the desired change in row (-1, 0, or +1)
// dCol is the desired change in column (-1, 0, or +1)
function move(dRow, dCol, anim) {
    // "avatarRow" and "avatarCol" are the current row and column the player is on.
    // The way this function should work, is that dRow is used to determine how many
    // rows to move the player by, and dCol is used to determine how many columns to move the player by.
    // Calculate the coordinates the player wants to move to.

    // Using avatarRow and dRow, compute destRow (where the player should move
    // vertically). You'll need to replace "undefined" to do so.
    const destRow = undefined; 
    // Using avatarCOl and dCol, compute destCol (where the player should move
    // vertically). You'll need to replace "undefined" to do so.
    const destCol = undefined;

    const destCell = map[destRow][destCol];

    // Check that it is within the bounds of the map, and not a wall.
    if(destCell && destCell !== "W") {
        avatarRow += dRow;
        avatarCol += dCol;
        redrawAvatar(anim);
        if(destCell === "F") {
            document.getElementById("youWonDiv").style.display = "block";
            var audio = new Audio('wow.mp3');
            audio.play();
        }
    }
}

document.addEventListener('keydown', (event) => {
    // keyName will be one of "ArrowDown", "ArrowUp", "ArrowLeft" or "ArrowRight"
    const keyName = event.key;

    // START HERE

    // move takes 3 arguments: a row offset, a column offset, and an animation.
    // For example move(1, 0, "slideDown") would move the player 1 square down,
    // 0 squares to the right, and use a "slideDown" animation when moving the player.

    // Write some logic to check the value of "keyName" and call "move()" with
    // the proper arguments
});
