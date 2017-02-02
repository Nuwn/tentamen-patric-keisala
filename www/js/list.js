function loadlist(loop, target, link) {  


    this.load = function () {  
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    handleData(this.responseText); 
                } else {
                    //error
                }
            }
        };
        xhttp.open("GET", "js/fakedata.json");
        xhttp.send(); 
    };
    
    function handleData (data) {  
        var result = JSON.parse(data); 
        for(var key in result){
            var single = result[key];

             for (var key2 in single){
                 var li = document.createElement("li");
                 var elements = single[key2];
                
                 for (var i = 0; i < Object.keys(elements).length; i++){
                     var tag = Object.keys(elements)[i];
                     
                        var element = document.createElement(tag);
                        if (tag === "link"){
                            li.setAttribute("onclick", "window.location.href='"+single[key2].link+"'");
                        }  else if (tag !== "data" && tag !== "link" && tag !== "div") {
                            for(var j = 0; j < Object.keys(elements[tag]).length; j++ ){

                                if (Object.keys(elements[tag])[j] !== "text" && Object.keys(elements[tag])[j] !== "data") {
                                    var att = document.createAttribute(Object.keys(elements[tag])[j]);
                                    att.value = elements[tag][Object.keys(elements[tag])[j]];
                                    element.setAttributeNode(att);
                                } else if (Object.keys(elements[tag])[j] === "text") {
                                    var text = document.createTextNode(elements[tag].text);
                                    element.appendChild(text);
                                } 
                            } 
                            li.appendChild(element);
                        } else if (tag === "div") {
                            var Div = document.createElement("div");
                            var divTag = Object.keys(single[key2].div);
                            

                            for(var k in divTag ){
                                
                                var divElements = document.createElement(divTag[k]);
                                var divElemTag = Object.keys(single[key2].div[divTag[k]]);
                                
                                for(var l = 0; l < Object.keys( single[key2].div[divTag[k]]).length; l++ ){
                                    var node = Object.keys(single[key2].div[divTag[k]])[l];
                                    var nodevalue = single[key2].div[divTag[k]].text;

                                   if (node === "text") {
                                        var text2 = document.createTextNode(nodevalue);
                                        divElements.appendChild(text2);
                                    } 
                                } 

                                Div.appendChild(divElements);
                            } 
                            li.appendChild(Div);           
                        }    
                 } 
                 document.getElementById(target).appendChild(li);
            }
        }
    }
}

function list(loop, target, link){
    // what to loop, target ullist to add to, child menu true/false
    var list = new loadlist(loop, target, link);
    list.load();
}


