function loadView(string) {  
    this.string = string;  
    this.loader = document.getElementById("loader");
    this.load = function(){
        //start loader
        loader.style.display = "flex";
        //get the page with ajax
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    //display the template
                    document.getElementById("view").innerHTML = this.responseText;
                    runWhenURLMet();
                    //end loader
                    loader.style.display = "none";  
                } else {
                    //end loader
                    loader.style.display = "none";
                }
            }
        };
        xhttp.open("GET", "templates/"+string+".html", true);
        xhttp.send();  
    };
}

//when the document is loaded we check the hash if its refreshed, or if its a new instance we go to default template
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var view;
    if(location.hash.slice(1)){
        view = new loadView(location.hash.slice(1).split("?")[0]);
        view.load(); 
    } else {
        view = new loadView("login");
        view.load();
    } 
    
}

// Adds an eventlistner on window to check whether the url changes with # 
window.addEventListener("hashchange", hashChange);
function hashChange() {
    var view;
    var loc = location.hash.slice(1);
    if(loc === ''){
        view = new loadView("login");
        view.load();
    } else if (loc === 'login') {
        view = new loadView("login");
        view.load();
    } else {
        view = new loadView(location.hash.slice(1).split("?")[0]);
        view.load();
    }
    
}

// things to do when a page is loaded
function runWhenURLMet(){
    url = location.hash.slice(1).split("?")[0];
    data = location.hash.slice(1).split("?");
    
    setActive(url);

    if (url === "home"){
        list("products", "homeul",true);
    }
    if (url === "login" || url === ""){
        document.getElementById("menu").style.display = "none";
        document.getElementById("returnBtn").style.display = "none";
    }
    if (url !== "login" && url !== ""){
        document.getElementById("menu").style.display = "flex";
        document.getElementById("returnBtn").style.display = "block";
    }
    if (url === "detail"){
        details(data[1]);
    }
}
