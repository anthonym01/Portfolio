const { Browser, App, Toast, Device } = Capacitor.Plugins;

App.addListener('appStateChange', ({ isActive }) => {// app state is changed, usually sent to the background or suspended
    console.warn('App state changed. Is active: ', isActive);
});

App.addListener('backButton', () => {//back button on android
    console.warn('back button pressed')
})

let devinfo


window.addEventListener('load', async function () {//window loads

    console.log("             ⣀⣠⣤⣤⣤⣤⣤⣄⣀⡀")
    console.log("         ⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀")
    console.log("      ⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣆")
    console.log("    ⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆")
    console.log("  ⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆")
    console.log("  ⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿")
    console.log(" ⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄")
    console.log(" ⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇")
    console.log(" ⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇")
    console.log("  ⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇")
    console.log("  ⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃")
    console.log("   ⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟")
    console.log("    ⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞")
    console.log("     ⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦")
    console.log("        ⠛⠛⠋⠁⣠⣾⣿⣿⣿⣿⡆⠄⣿")
    console.log("                             。")
    console.log("                               ｏ")
    console.log("                                 ○")
    console.log("                               ╭◜◝  ͡  ◜  ͡  ╮  ╭◜◝  ͡  ◜◝  ͡  ◝╮")
    console.log("                              (      No     )  (     thoughts   )")
    console.log("                               ╰◟◞  ͜  ╭◜◝  ͡ ◜◝  ͡  ◝  ͡  ╮◞◟◞╯")
    console.log(" 　 　                                (   just employ me )")
    console.log("      　                              ╰◟◞  ͜    ◟◞   ͜   ◟◞  ╯")

    if (document.cookie != undefined) {
        //go to last view
        switch (document.cookie) {
            case "view=about": go_to_about(); break;
            case "view=project": go_to_project(); break;
            case "view=contact": go_to_contact(); break;
            default: go_to_project();
        }
    }
    document.body.style.backgroundImage = "url('img/Kj5cd8B.jpg')";//ios background image bug

    //Check for link variables
    var params = {};
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (let i in vars) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    //act upon
    if ('contact' in params) { go_to_contact() }

    //Un-shade the page
    document.getElementById('page_shade').style.backgroundColor = "rgba(0,0,0,0)";

    setTimeout(() => { document.getElementById('page_shade').style.display = "none"; }, 400);

    devinfo = await Device.getInfo();

    console.log(devinfo);
});


//Go to about
document.getElementById('about_btn').addEventListener('click', go_to_about);
function go_to_about() {
    document.getElementById('about_view').style.display = 'block';
    document.getElementById('project_view').style.display = 'none';
    document.getElementById('contact_view').style.display = 'none';
    document.getElementById('about_btn').className = "actionbtn_active";
    document.getElementById('project_btn').className = "actionbtn";
    document.getElementById('contact_btn').className = "actionbtn";
    document.getElementById('headbar').classList = "headbar"
    document.cookie = "view=about; SameSite=Strict";
}

//Go to Project
document.getElementById('project_btn').addEventListener('click', go_to_project);
function go_to_project() {
    document.getElementById('about_view').style.display = 'none';
    document.getElementById('project_view').style.display = 'block';
    document.getElementById('contact_view').style.display = 'none';
    document.getElementById('about_btn').className = "actionbtn";
    document.getElementById('project_btn').className = "actionbtn_active";
    document.getElementById('contact_btn').className = "actionbtn";
    document.getElementById('headbar').classList = "headbar"
    document.cookie = "view=project; SameSite=Strict";
}

//Go to Contact
document.getElementById('contact_btn').addEventListener('click', go_to_contact);
function go_to_contact() {
    document.getElementById('about_view').style.display = 'none';
    document.getElementById('project_view').style.display = 'none';
    document.getElementById('contact_view').style.display = 'block';
    document.getElementById('about_btn').className = "actionbtn";
    document.getElementById('project_btn').className = "actionbtn";
    document.getElementById('contact_btn').className = "actionbtn_active";
    document.getElementById('headbar').classList = "headbar_2"
    document.cookie = "view=contact; SameSite=Strict";
}

/* Pedistal Actions */
document.getElementById('P_shade').addEventListener('click', function () {//close P_shade on click
    closeP_shade();
    var active_pedistals = document.querySelectorAll('.pedistal_active')
    active_pedistals.forEach(pedistal => { pedistal.classList = "pedistal" })
})

//Stop Link dots from trigering pedistals
document.querySelectorAll('.link_dot').forEach(link_dot => { link_dot.addEventListener('click', function (e) { e.stopImmediatePropagation() }) })

document.querySelectorAll('.pedistal').forEach(pedistal => {//Pedistal actions
    pedistal.addEventListener('click', function (e) {//click on a pedistal
        e.stopPropagation()
        openP_shade()
        Open_pedistal(this)
    })
})

async function Open_pedistal(element) {//activate a pedistal
    console.log('Open pedistal: ', element)
    if (element.classList == "pedistal") {
        element.classList = "pedistal_active"
    }
}

async function openP_shade() {// Open pedistal shade
    document.getElementById('P_shade').style.display = "block"
}

async function closeP_shade() {//Close Pedistal shade
    document.getElementById('P_shade').style.display = "none"
}

//name container in the About
document.getElementById('name_container').addEventListener('click', function () {
    if (this.classList == 'name_container_compact') {
        this.classList = 'name_container_expansive'
    } else {
        this.classList = 'name_container_compact'
    }
})

//active contact buttons
document.getElementById('discord_btn').addEventListener('click', function () {
    clipboard('Samuel_15#4257')
    Toast.show({
        text: 'Coppied Samuel_15#4257 to clipboard',
        duration: 'long',
        position: 'bottom',
    });
})
document.getElementById('whatsapp_btn').addEventListener('click', function () {
    clipboard('18765744801')
    Toast.show({
        text: 'Coppied 18765744801 to clipboard',
        duration: 'long',
        position: 'bottom',
    });
})
document.getElementById('phone_btn').addEventListener('click', function () {
    clipboard('18765744801')
    Toast.show({
        text: 'Coppied 18765744801 to clipboard',
        duration: 'long',
        position: 'bottom',
    });
})
document.getElementById('skype_btn').addEventListener('click', function () {
    clipboard('samuelmatheson15@gmail.com')
    Toast.show({
        text: 'Coppied samuelmatheson15@gmail.com to clipboard',
        duration: 'long',
        position: 'bottom',
    });
})

async function clipboard(textpush) {//Push text to clipboard
    try {
        Clipboard.write({ string: textpush });
    } catch (error) {
        navigator.clipboard.writeText(textpush)
    }
}

let notify = {  /*  Notification handler  */
    preset_height: 17,//2 more than the height in the css
    animate_old: true,//turn on and off old notification Animation
    current: 0,//Current is incimented every time theres a new notifyer
    resizecheck: window.addEventListener('resize', () => { notify.clearall() }),
    new: function (title, body) {
        this.current++;//Inciment the current pisition

        //create the notification holder
        var tempnotif = document.createElement("div");      //create a div
        document.body.appendChild(tempnotif);               //Put the div into the body of the page
        tempnotif.setAttribute("id", "notif" + this.current); //set an id to the div

        //create the title
        var tmptitle = document.createElement("div");       //create a div
        tmptitle.setAttribute("class", "title");             //set the class of the div to 'title'
        tmptitle.setAttribute("id", "title" + this.current);   //set an id to the 'title' div
        document.getElementById("notif" + this.current).appendChild(tmptitle);    //Put the 'title' div into the 'notification' div from before
        document.getElementById("title" + this.current).innerHTML = title;  //Puts the title text into the 'title' div

        //create the body
        var tmpbdy = document.createElement("div"); //create a div
        tmpbdy.setAttribute("class", "notifbody");   //set the class of the div to 'notifbody'
        tmpbdy.setAttribute("id", "body" + this.current);  //set an id to the 'notifbody' div
        document.getElementById("notif" + this.current).appendChild(tmpbdy);  //put the 'notifbody' div into the 'notification' div from before
        document.getElementById("body" + this.current).innerHTML = body;    //puts body text into the 'notifbody' div

        // tempnotif.addEventListener('click', function () { notify.clearall() });//click to close notifications
        tempnotif.title = 'click to dismiss';

        tempnotif.setAttribute("class", "notification");    //set the class of the div to 'notification_style1'

        this.timing_effects(this.current, tempnotif);//Timing in seperate function to avoid using 'new' object calls or extra variables

        //manuver old notifications out of the way
        if (window.innerHeight >= window.innerWidth) {
            if (this.animate_old) {
                if (document.getElementById('notif' + Number(this.current - 1))) {//stars at -1 because 1 less than the latest notification
                    document.getElementById('notif' + Number(this.current - 1)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 2))) {
                    document.getElementById('notif' + Number(this.current - 2)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 3))) {
                    document.getElementById('notif' + Number(this.current - 3)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 4))) {
                    document.getElementById('notif' + Number(this.current - 4)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 5))) {
                    document.getElementById('notif' + Number(this.current - 5)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 6))) {
                    document.getElementById('notif' + Number(this.current - 6)).style.transform = 'translate(-100vw,0vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 7))) {
                    document.getElementById('notif' + Number(this.current - 7)).style.transform = 'translate(-100vw,0vh)';
                }
            }
        } else {
            if (this.animate_old) {
                if (document.getElementById('notif' + Number(this.current - 1))) {//stars at -1 because 1 less than the latest notification
                    document.getElementById('notif' + Number(this.current - 1)).style.transform = 'translate(0vw,-' + this.preset_height + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 2))) {
                    document.getElementById('notif' + Number(this.current - 2)).style.transform = 'translate(0vw,-' + this.preset_height * 2 + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 3))) {
                    document.getElementById('notif' + Number(this.current - 3)).style.transform = 'translate(0vw,-' + this.preset_height * 3 + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 4))) {
                    document.getElementById('notif' + Number(this.current - 4)).style.transform = 'translate(0vw,-' + this.preset_height * 4 + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 5))) {
                    document.getElementById('notif' + Number(this.current - 5)).style.transform = 'translate(0vw,-' + this.preset_height * 5 + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 6))) {
                    document.getElementById('notif' + Number(this.current - 6)).style.transform = 'translate(0vw,-' + this.preset_height * 6 + 'vh)';
                }
                if (document.getElementById('notif' + Number(this.current - 7))) {
                    document.getElementById('notif' + Number(this.current - 7)).style.transform = 'translate(0vw,-' + this.preset_height * 7 + 'vh)';
                }
            }
        }
        console.table(notify);
    },
    timing_effects: function (notificationindex, tempnotif) {
        setTimeout(() => { document.getElementById('notif' + notificationindex).style.transform = 'translate(0vw,0vh)' }, 50);
        setTimeout(() => { document.getElementById('notif' + notificationindex).style.opacity = '0.0' }, 10000);
        setTimeout(() => { document.body.removeChild(tempnotif); }, 11000);
    },
    clearall: function () {
        //This could be replaced with a "querySelectorAll", but this runs faster, so ill stick with it
        if (document.getElementById('notif' + Number(this.current))) {//nep them from latest going up
            document.getElementById('notif' + Number(this.current)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 1))) {
            document.getElementById('notif' + Number(this.current - 1)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 1)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 2))) {
            document.getElementById('notif' + Number(this.current - 2)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 2)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 3))) {
            document.getElementById('notif' + Number(this.current - 3)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 3)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 4))) {
            document.getElementById('notif' + Number(this.current - 4)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 4)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 5))) {
            document.getElementById('notif' + Number(this.current - 5)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 5)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 6))) {
            document.getElementById('notif' + Number(this.current - 6)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 6)).style.zIndex = '-999';
        }
        if (document.getElementById('notif' + Number(this.current - 7))) {
            document.getElementById('notif' + Number(this.current - 7)).style.opacity = '0.0';
            document.getElementById('notif' + Number(this.current - 7)).style.zIndex = '-999';
        }
    }
}
