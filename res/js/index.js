
window.addEventListener('load',function(){//window loads
    if(localStorage.getItem("SamuelAMatheson_cfg"))
    {
        config.load();
    }
    else
    {
        config.validate();
    }
    UI.initalize();
});

var config={
    data:{
    },
    save:function(){//Save the config file
        localStorage.setItem("SamuelAMatheson_cfg",JSON.stringify(config.data));
        console.log('config saved: ');
        console.table(config.data);
    },
    load:function(){//Load the config file into memory
        config.data=JSON.parse(localStorage.getItem("SamuelAMatheson_cfg"));
        console.log('config Loaded: ');
        console.table(config.data);
        this.validate();
    },
    validate:function(){//validate configuration file
        console.log('Config is being validated');
        var configisvalid = true;
        if(!configisvalid){
            console.log('config was found to be invalid and will be overwritten');
            this.save();//Save new confog because old config is no longer valid
        }else{
            console.log('config was found to be valid');
        }
    },
    delete:function(){//Does not delete the file itself. Just sets it to empty
        localStorage.clear("SamuelAMatheson_cfg");
        console.log('config deleted: ');
        console.table(config.data);
        this.validate();
    }
}

let UI = {
    initalize:function(){
        document.getElementById('service_btn').addEventListener('click',()=>{
            document.getElementById('service_view').style.display='block';
            document.getElementById('about_view').style.display='none';
            document.getElementById('project_view').style.display='none';
            document.getElementById('home_view').style.display='none';
            document.getElementById('contact_view').style.display='none';
        });
        document.getElementById('about_btn').addEventListener('click',()=>{
            document.getElementById('service_view').style.display='none';
            document.getElementById('about_view').style.display='block';
            document.getElementById('project_view').style.display='none';
            document.getElementById('home_view').style.display='none';
            document.getElementById('contact_view').style.display='none';
        });
        document.getElementById('project_btn').addEventListener('click',()=>{
            document.getElementById('service_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            document.getElementById('project_view').style.display='block';
            document.getElementById('home_view').style.display='none';
            document.getElementById('contact_view').style.display='none';
        });
        document.getElementById('home_btn').addEventListener('click',()=>{
            document.getElementById('service_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            document.getElementById('project_view').style.display='none';
            document.getElementById('home_view').style.display='block';
            document.getElementById('contact_view').style.display='none';
        });
        document.getElementById('contact_btn').addEventListener('click',()=>{
            document.getElementById('service_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            document.getElementById('project_view').style.display='none';
            document.getElementById('home_view').style.display='none';
            document.getElementById('contact_view').style.display='block';
        });
    },
}

let nav = {
    initalize:function(){

    },
}