

//javascript source code
$(document).ready(function(){function playSound(e)
    {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`polygon[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('active');
        console.log(audio);
       console.log(key);
    }
    const key = document.addEventListener('keyup', function(e) {                                   
    const key = document.querySelector (`polygon[data-key="${e.keyCode}"]`);
    key.classList.remove('active');
    console.log("This was destroyed");
    })

    window.addEventListener('keydown',playSound);
})

function displayResult() {
    document.getElementById("piano").innerHTML = "Final Have a nice day!";
}

