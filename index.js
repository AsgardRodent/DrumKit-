var arr = document.querySelectorAll("button.drum");

for(var a = 0; a < arr.length; a++)
{
    document.querySelectorAll(".drum")[a].addEventListener("click", function()
    {
        DrumSounds(this.innerHTML);
        DrumButtonAnimation(this.innerHTML);
    }
    )
}
document.addEventListener("keydown", function(event)
        {
            DrumSounds(event.key);
            DrumButtonAnimation(event.key);
        }
)

//-----------------------------Main Function---------------------------//
function DrumSounds(key)
{
    switch (key) {
        case "w":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play(); 
            break;
        case "a":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play(); 
        break;
        case "s":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play(); 
        break;
        case "d":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play(); 
        break;
        case "j":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play(); 
        break;
        case "k":
                var kickbass = new Audio('./sounds/kick-bass.mp3');
                kickbass.play(); 
        break;
        case "l":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play(); 
        break;
        default:
            break;
    }
}

function DrumButtonAnimation(key)
{
    var PressedButton = document.querySelector("." + key);
    PressedButton.classList.add("pressed");

    setTimeout(function(){
    PressedButton.classList.remove("pressed");    
    }, 100)
}