// pour crée un text sur l'image
function generateMeme (nom) {
    // récupérer le canvas et le contexte 2D
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    // récupérer le text que on a déja saisie sur l'input 
    const text = document.getElementById("text-afficher").value;
    console.log(text);
    // dessiner le texte dans le canvas avec un texte de taille 48px et blanc
    ctx.font = '48px Impact';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';  
    ctx.fillText(text, 190, 50);
}

// pour afficher l'image dans le canva lors de notre chargment de l'image instantatement
var input = document.getElementById('image');
// déclancher le fonction lorsque ya changment dans le input fichier 
input.addEventListener('change', handleFiles);

function handleFiles(e) {
    // activer le bouton de telechargement
    document.getElementById("button-download").disabled = false;
    // récupérer le canvas et le contexte 2D
    var ctx = document.getElementById('canvas').getContext('2d');
    // récupérer l'image selectionnée
    var img = new Image;
    // afficher l'image sur le canvas
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 400, 300);
    }
}


//pour telecharger le memes
function downloadCanvas(){
    var canvas = document.querySelector("#canvas").toDataURL("image/png");
    var a = document.createElement('a');
    a.download = "meme.png";
    a.href = canvas;
    a.click();
}

