// pour crée un text sur l'image
function generateMeme (nom) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    const text = document.getElementById("text-afficher").value;
    console.log(text);
    ctx.textAlign = 'center';  
    ctx.fillText(text, 150, 100);
}

// pour afficher l'image dans le canva lors de note chargment de l'image instantatement
var input = document.getElementById('image');
input.addEventListener('change', handleFiles);

function handleFiles(e) {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 400, 300);
    }
}


//pour telecharger le memes
function downloadCanvas(){
    var canvas = document.querySelector("#canvas").toDataURL("image/png");
    var a = document.createElement('a');
    a.download = "canvas.png";
    a.href = canvas;
    a.click();
}

