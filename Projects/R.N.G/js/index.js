
window.addEventListener('load',function(){//Exicute on window load
    document.getElementById("NumberGenUI").style.display='block';//loads in NumberGenUI
    if(localStorage.getItem("cfg")){//check and load configuration
        loadconfig();
    }
    else{//for first use or file curruption
        config = {mininputbox:1,maxinputbox:50,theme:"light",};
        storeconfig();
        loadconfig();
    }
    if(!localStorage.getItem("nbset")){//check and load number sets
        storenumbersets();
    }
});

UI={//UI tricery handling
    changetheme:document.getElementById("themechanger").addEventListener('click',function(){//clicking button changes theme string
        if(config.theme=="light"){
            config.theme="dark";
            UI.checktheme();
        }
        else if(config.theme=="dark"){
            config.theme="light";
            UI.checktheme();
        }
        else{
            config.theme="light";
            UI.checktheme();
            console.log("The Theme was defaulted");
        }
        console.log('Theme set to '+config.theme);
    }),
    checktheme:function(){//checks what the theme should be
        if(config.theme=="light"){
            document.getElementById("theme").href='./css/line-light.css';
            storeconfig();
        }
        else if(config.theme=="dark"){
            document.getElementById("theme").href='./css/line-dark.css';
            storeconfig();
        }
    },
}

number={//Number generationn and handling
    generate:document.getElementById("generatebtn").addEventListener('click',function(){//Generate the number on "generatebtn" click
        var min=Number(document.getElementById("minput").value);
        var max=Number(document.getElementById("maxput").value);
        var randnum=Math.floor(Math.random() * (max - min + 1) ) + min;  // returns a random integer from minimum to maximum
        document.getElementById("numdisplay").innerHTML=randnum;
        document.getElementById("historytitle").style.display='none';
        copy_clipboard(randnum);
        number.history(randnum);
        console.log('Minimum: '+min+' Maximum: '+max+' Generated number: '+randnum);
    }),
    incrimentmin:document.getElementById("min++").addEventListener('click',function(){//min++
        var min=Number(document.getElementById("minput").value);
        min++;
        document.getElementById("minput").value=min;
        config.mininputbox=min;
        storeconfig();
        console.log('Minimum Incrimented to: '+min);
    }),
    decrimentmin:document.getElementById("min--").addEventListener('click',function(){//min--
        var min=Number(document.getElementById("minput").value);
        min--;
        document.getElementById("minput").value=min;
        config.mininputbox=min;
        storeconfig();
        console.log('Minimum Decriment to: '+min);
    }),
    incrimentmax:document.getElementById("max++").addEventListener('click',function(){//max++
        var max=Number(document.getElementById("maxput").value);
        max++;
        document.getElementById("maxput").value=max;
        config.maxinputbox=max;
        storeconfig();
        console.log('Maximum Incrimented to: '+max);
    }),
    decrimentmax:document.getElementById("max--").addEventListener('click',function(){//max--
        var max=Number(document.getElementById("maxput").value);
        max--;
        document.getElementById("maxput").value=max;
        config.maxinputbox=max;
        storeconfig();
        console.log('Maximum Decrimented to: '+max);
    }),
    checkmax:document.getElementById("maxput").addEventListener('keydown',function(){//evaluate and store maximum number
        setTimeout(() => {
            var max=document.getElementById("maxput").value;
            console.log('Max checked returned '+max);
            if(isNaN(max)){
                document.getElementById("maxputerror").style.display='block';
                document.getElementById("maxput").style='color:red;border-color:red;';
                document.getElementById("generatebtn").disabled = true;
            }else{
                document.getElementById("maxputerror").style.display='';
                document.getElementById("maxput").style='';
                config.maxinputbox=Number(document.getElementById("maxput").value);
                document.getElementById("generatebtn").disabled = false;
                storeconfig();
            }
        }, 500 );
    }),
    checkmin:document.getElementById("minput").addEventListener('keydown',function(){//evaluate and store minimum number
        setTimeout(() => { 
            var min=document.getElementById("minput").value;
            console.log('Max checked returned '+min);
            if(isNaN(min)){
                document.getElementById("minputerror").style.display='block';
                document.getElementById("minput").style='color:red;border-color:red;';
                document.getElementById("generatebtn").disabled = true;
            }else{
                document.getElementById("minputerror").style.display='';
                document.getElementById("minput").style='';
                config.mininputbox=Number(document.getElementById("minput").value);
                document.getElementById("generatebtn").disabled = false;
                storeconfig();
            }
        }, 500);
        
    }),
    history(historydat){//Produce number history
        var history;
        history='<table class="historyelement rounded"><tr><td class="front">'+historydat+'</td><td class="back"><button class="recopybtn rounded fat tall"  onclick="copy_clipboard('+historydat+')">Copy</button></td></tr></table>';
        document.getElementById("historydisplay").innerHTML+=history;
        document.getElementById("historydisplay").scrollBy(0,999); //scroll to a documentHeight-viewportHeight
    }
}

        /*  Number preset handling  */

var numbersets={
    min:[],
    max:[],
}
function storenumbersets(){
    localStorage.setItem("nbset",JSON.stringify(numbersets));
}
function loadnumbersets(){
    numbersets=JSON.parse(localStorage.getItem("nbset"));
}

        /*  Configuration handling    */

var config={//stores dukument configuaration for next launch
    mininputbox:"",
    maxinputbox:"",
    theme:"light",
}
function storeconfig(){//store dukument configuration
    localStorage.setItem("cfg",JSON.stringify(config));
}
function loadconfig(){//load dukument configuration
    config = JSON.parse(localStorage.getItem("cfg"));
    if(config.mininputbox==undefined){config.mininputbox=1}
    if(config.maxinputbox==undefined){config.maxinputbox=1}
    document.getElementById("minput").value=config.mininputbox;
    document.getElementById("maxput").value=config.maxinputbox;
    UI.checktheme();
}


function copy_clipboard(copydat) {//clipbord copy function
    //var copyText ='Your copy text goes here'; //The stuff u want to copy
    copydat.toString(); //Makes it a string so the clipboard will accept it
    var temptxtbox = document.createElement("textarea"); //creates an 'input' element and assigns it to 'temptxtbox'
    document.body.appendChild(temptxtbox); //Puts the input element into the document
    temptxtbox.setAttribute("id", "temp_copy"); //Assigns an id to the input element
    temptxtbox.setAttribute("rows", "10"); //Assigns an id to the input element
    document.getElementById("temp_copy").value = copydat; //Puts the txt u want to copy into the input element
    temptxtbox.select(); //Makes the curser select the text that's in the input element
    document.execCommand("copy"); //Commands the document to copy the selected text
    document.body.removeChild(temptxtbox); //Removes the input element from the document
    report(copydat+', Was coppied to clipboard');
}

function report(reportdat){//report function

}