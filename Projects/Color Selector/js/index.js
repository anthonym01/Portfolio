//window load listener
window.addEventListener('load',function(){
    // Checks if previous configuration file exists
    if(localStorage.getItem("cfg")){
        confighandler.load();
    }else{
        confighandler.save();
    }

    //Begins the instruction buttons flamboyance
    UI.instruction.btncolor();
    setInterval(()=>{UI.instruction.btncolor()},7000);

    //Opens or closes the instruction pannel depending on previous config
    document.getElementById('instructionpane').style.transitionDuration='0ms';
    UI.instruction.panetoggle();
    setTimeout(()=>{document.getElementById('instructionpane').style.transitionDuration='500ms'},500);

    //Sets the slider positions
    mainprocess.RGB.setsliders();
    mainprocess.HSL.setsliders();

    //Set the Hex pannel
    document.getElementById('HEXpanneler').style.backgroundColor=config.HEX_put;
    document.getElementById('HEX_put').value=config.HEX_put;

    //clsoes loading screen after initalization is complete, loading screen is necicary becase not everyone has an SSD
    setTimeout(()=>{document.getElementById('loadingscreen').style.display="none";document.getElementById('loader').style.animation='none';},500);
    

});
    /*  Configuaration file handling    */
var config = {
    instructionpane:false,
    RED_slider:128,
    GREEN_slider:128,
    BLUE_slider:128,
    HUE_slider:180,
    SATURATION_slider:100,
    LIGHTNESS_slider:50,
    HEX_put:'#ffffff',
}
confighandler={
    save:function(){
        localStorage.setItem("cfg",JSON.stringify(config));
    },
    load:function(){
        config=JSON.parse(localStorage.getItem("cfg"));
    },
    validate:function(){
        if(config.instructionpane==undefined){
            config.instructionpane=false;
        }
        if(config.BLUE_slider==undefined){
            config.BLUE_slider=128;
        }
        if(config.GREEN_slider==undefined){
            config.GREEN_slider=128;
        }
        if(config.RED_slider==undefined){
            config.RED_slider=128;
        }
        if(config.HEX_put==undefined){
            config.HEX_put='#ffffff';
        }
        if(config.HUE_slider==undefined){
            config.HUE_slider=180;
        }
        if(config.SATURATION_slider==undefined){
            config.SATURATION_slider=100;
        }
        if(config.LIGHTNESS_slider==undefined){
            config.LIGHTNESS_slider=50;
        }
    },
    delete:function(){
        localStorage.clear("cfg");
    }
}

    /*  Main Process    */
mainprocess={
    RGB:{
        //Red slider handlers
        RED_slidermove:document.getElementById('RED_slider').addEventListener('mousemove',()=>{mainprocess.RGB.process_RED()}),
        RED_sliderclick:document.getElementById('RED_slider').addEventListener('click',()=>{mainprocess.RGB.process_RED()}),
        RED_slidertouchstart:document.getElementById('RED_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_RED()}),
        RED_slidertouchmove:document.getElementById('RED_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_RED()}),
        process_RED:function(){
            setTimeout(()=>{
                config.RED_slider = document.getElementById('RED_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Green slider handlers
        GREEN_slidermove:document.getElementById('GREEN_slider').addEventListener('mousemove',()=>{mainprocess.RGB.process_GREEN()}),
        GREEN_sliderclick:document.getElementById('GREEN_slider').addEventListener('click',()=>{mainprocess.RGB.process_GREEN()}),
        GREEN_slidertouchstart:document.getElementById('GREEN_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_GREEN()}),
        GREEN_slidertouchmove:document.getElementById('GREEN_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_GREEN()}),
        process_GREEN:function(){
            setTimeout(()=>{
                config.GREEN_slider = document.getElementById('GREEN_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Blue slider handlers
        BLUE_slidermove:document.getElementById('BLUE_slider').addEventListener('mousemove',()=>{mainprocess.RGB.process_BLUE()}),
        BLUE_sliderclick:document.getElementById('BLUE_slider').addEventListener('click',()=>{mainprocess.RGB.process_BLUE()}),
        BLUE_slidertouchmove:document.getElementById('BLUE_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_BLUE()}),
        BLUE_slidertouchstart:document.getElementById('BLUE_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_BLUE()}),
        process_BLUE:function(){
            setTimeout(()=>{
                config.BLUE_slider = document.getElementById('BLUE_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Random RGB button handler
        randomRGB:document.getElementById('randRGB').addEventListener('click',function(){
            var temprandRGB=rand.RGB();
            config.RED_slider=temprandRGB.RED;
            config.GREEN_slider=temprandRGB.GREEN;
            config.BLUE_slider=temprandRGB.BLUE;
            mainprocess.RGB.setsliders();
            confighandler.save();
        }),
        //Sets the sliders psoitions to the configuration files values
        setsliders:function(){
            document.getElementById('RED_slider').value=config.RED_slider;
            document.getElementById('GREEN_slider').value=config.GREEN_slider;
            document.getElementById('BLUE_slider').value=config.BLUE_slider;
            mainprocess.RGB.outputrgb();
        },
        //Output the RGB value to the RGB pannel
        outputrgb:function(){
            document.getElementById('RGB_header').innerHTML='RGB('+config.RED_slider+','+config.GREEN_slider+','+config.BLUE_slider+')';
            document.getElementById('RGBpanneler').style.backgroundColor='RGB( '+config.RED_slider+' , '+config.GREEN_slider+' , '+config.BLUE_slider+' )';
            if(config.RED_slider<128 && config.GREEN_slider<128 && config.BLUE_slider<128){
                //background color is dark
                document.getElementById('RGBpanneler').style.color='white';
                document.getElementById('randRGB').style.color='white';
                document.getElementById('randRGB').style.borderColor='white';
                document.getElementById('randRGB').style.boxShadow='white';
            }
            else{
                //background color is light
                document.getElementById('RGBpanneler').style.color='black';
                document.getElementById('randRGB').style.color='black';
                document.getElementById('randRGB').style.borderColor='black';
                document.getElementById('randRGB').style.boxShadow='black';
            }
            document.getElementById('randRGB').style.backgroundColor='RGB( '+(config.RED_slider-40) +' , '+(config.GREEN_slider-40) +' , '+(config.BLUE_slider-40) +' )';
        },
        
    },
    HSL:{
        //Hue Slider handlers
        HUE_slidermove:document.getElementById('HUE_slider').addEventListener('mousemove',()=>{mainprocess.HSL.process_HUE()}),
        HUE_sliderclick:document.getElementById('HUE_slider').addEventListener('click',()=>{mainprocess.HSL.process_HUE()}),
        HUE_slidertouchstart:document.getElementById('HUE_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_HUE()}),
        HUE_slidertouchmove:document.getElementById('HUE_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_HUE()}),
        process_HUE:function(){
            setTimeout(()=>{
                config.HUE_slider = document.getElementById('HUE_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Saturation Slider Handlers
        SATURATION_slidermove:document.getElementById('SATURATION_slider').addEventListener('mousemove',()=>{mainprocess.HSL.process_SATURATION()}),
        SATURATION_sliderclick:document.getElementById('SATURATION_slider').addEventListener('click',()=>{mainprocess.HSL.process_SATURATION()}),
        SATURATION_slidertouchstart:document.getElementById('SATURATION_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_SATURATION()}),
        SATURATION_slidertouchmove:document.getElementById('SATURATION_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_SATURATION()}),
        process_SATURATION:function(){
            setTimeout(()=>{
                config.SATURATION_slider = document.getElementById('SATURATION_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Lightness slider handlers
        LIGHTNESS_slidermove:document.getElementById('LIGHTNESS_slider').addEventListener('mousemove',()=>{mainprocess.HSL.process_Lightness()}),
        LIGHTNESS_sliderclick:document.getElementById('LIGHTNESS_slider').addEventListener('click',()=>{mainprocess.HSL.process_Lightness()}),
        LIGHTNESS_slidertouchstart:document.getElementById('LIGHTNESS_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_Lightness()}),
        LIGHTNESS_slidertouchmove:document.getElementById('LIGHTNESS_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_Lightness()}),
        process_Lightness:function(){
            setTimeout(()=>{
                config.LIGHTNESS_slider = document.getElementById('LIGHTNESS_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Random HSL Button handler
        randomHSL:document.getElementById('randHSL').addEventListener('click',function(){
            // splicing fucntion  Number(HSL.LIGHTENESS.slice(0,-1)
            var temprandHSL=rand.HSL();
            config.HUE_slider=temprandHSL.HUE;
            config.SATURATION_slider=Number(temprandHSL.SATURATION.slice(0,-1));
            config.LIGHTNESS_slider=Number(temprandHSL.LIGHTENESS.slice(0,-1));
            mainprocess.HSL.setsliders();
            confighandler.save();
        }),
        //Sets the sliders to the values in the config file
        setsliders:function(){
            document.getElementById('HUE_slider').value=config.HUE_slider;
            document.getElementById('SATURATION_slider').value=config.SATURATION_slider;
            document.getElementById('LIGHTNESS_slider').value=config.LIGHTNESS_slider;
            mainprocess.HSL.outputhsl();
        },
        //Outputs the HSL value to the HSL pannel
        outputhsl:function(){
            document.getElementById('HSL_header').innerHTML='HSL('+config.HUE_slider+','+config.SATURATION_slider+'%,'+config.LIGHTNESS_slider+'%)';
            document.getElementById('HSLpanneler').style.backgroundColor='HSL( '+config.HUE_slider+' , '+config.SATURATION_slider+'% , '+config.LIGHTNESS_slider+'% )';
            if(config.LIGHTNESS_slider<50){
                //background color is dark
                document.getElementById('HSLpanneler').style.color='white';
                document.getElementById('randHSL').style.color='white';
                document.getElementById('randHSL').style.borderColor='white';
                document.getElementById('randHSL').style.boxShadow='white';

            }
            else{
                //background color is light
                document.getElementById('HSLpanneler').style.color='black';
                document.getElementById('randHSL').style.color='black';
                document.getElementById('randHSL').style.borderColor='black';
                document.getElementById('randHSL').style.boxShadow='black';

            }
            document.getElementById('randHSL').style.backgroundColor='HSL( '+config.HUE_slider+' , '+config.SATURATION_slider+'% , '+(config.LIGHTNESS_slider-20)+'% )';
        }
    },
    HEX:{
        randHEX:document.getElementById('randHEX').addEventListener('click',function(){
            var randhex = rand.HEX();
            document.getElementById('HEXpanneler').style.backgroundColor = randhex;
            document.getElementById('HEX_put').value=randhex;
            config.HEX_put=randhex;
            confighandler.save();
        }),
        HEX_put:document.getElementById('HEX_put').addEventListener('keydown',function(){
            setTimeout(()=>{
                document.getElementById('HEXpanneler').style.backgroundColor = document.getElementById('HEX_put').value;
                document.getElementById('HEX_put').value=document.getElementById('HEX_put').value;
                config.HEX_put=document.getElementById('HEX_put').value;
                confighandler.save();
            },50);
        }),
    },
    NAME:{
    
    },  
}

    /*  UI trickery */
UI={
    instruction:{
        btnclick:document.getElementById('instructionbtn').addEventListener('click',function(){//Toggles between the pannel being false and true
            if(config.instructionpane){
                config.instructionpane=false;
            }
            else{
                config.instructionpane=true;
            }
            confighandler.save();
            UI.instruction.panetoggle();
        }),
        panetoggle:function(){//sets the pannel depending on config state
            if(!config.instructionpane){
                document.getElementById('instructionpane').style.transform='translate(0,-100vh)'
            }
            else{
                document.getElementById('instructionpane').style.transform='translate(0,0vh)'
            }
        },
        btncolor:function(){//changes the instruction btn color
            var HSL = rand.HSL();
            //instructionbtn_shutter
            document.getElementById('instructionbtn_shutter').style.backgroundColor='hsl('+ HSL.HUE +', 100% ,'+ HSL.LIGHTENESS +')';
            document.getElementById('instructionbtn_shutter').style.height='400vh';
            document.getElementById('instructionbtn_shutter').style.width='400vh';
            setTimeout(()=>{
                document.getElementById('instructionbtn').style.backgroundColor='hsl('+ HSL.HUE +', 100% ,'+ HSL.LIGHTENESS +')';
                setTimeout(()=>{
                    document.getElementById('instructionbtn_shutter').style.height='0vh';
                    document.getElementById('instructionbtn_shutter').style.width='0vh';
                },100);
            },1600);
            //Checks the lightness of the new color and sets the text color accordingly
            if(Number(HSL.LIGHTENESS.slice(0,-1))<50){
                //background color is dark
                document.getElementById('instructionbtn').style.boxShadow='#ffffff';
                document.getElementById('instructionbtn').style.color='#ffffff';
                document.getElementById('instructionbtn').style.borderColor='#ffffff';
            }
            else{
                //background color is light
                document.getElementById('instructionbtn').style.boxShadow='#000000';
                document.getElementById('instructionbtn').style.color='#000000';
                document.getElementById('instructionbtn').style.borderColor='#000000';
            }
        },
    },
}

    /*Random color generator*/
rand={
    HEX:function(){// I recomend using Random HEX values, as there is only one value to work with, but it is harder to control the outcome
        var randhex ='#'+Math.floor(Math.random()*16777215).toString(16);
        console.log('Random color generated :',randhex);
        return randhex;
    },
    RGB:function(){//RGB colors returned in an object
        //Because of the was pseudo random numbers and RGB work, darker colors will be produced more often
        var RGB_obj = { RED:this.number(255,0), GREEN:this.number(255,0), BLUE:this.number(255,0) }   
        console.log('RGB index generated: rgb('+ RGB_obj.RED +','+ RGB_obj.GREEN +','+ RGB_obj.BLUE +')');
        return RGB_obj;
    },
    HSL:function(){//HSL colors returned in an object
        //Because of the was pseudo random numbers and HSL colors work, darker colors will be produced more often
        var HSL_obj = { HUE:this.number(360,0), SATURATION:this.number(100,0)+'%', LIGHTENESS:this.number(100,1)+'%', }
        console.log('HSL index generated: hsl('+ HSL_obj.HUE +','+ HSL_obj.SATURATION +','+ HSL_obj.LIGHTENESS +')');
        return HSL_obj;
    },
    number(max,min){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
