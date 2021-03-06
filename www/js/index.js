/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};




function setActive(url){
    
    var a = document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++){
        a[i].className = "";
    }
    
    var link = document.querySelectorAll("a[href='#"+url+"']");
    
    if(link.length !== 0){
        link[0].className = "active";
    }
    
    document.getElementById("title").innerHTML = url;
}


function details(param){
    
    var detail = param;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status === 200 || this.status === 0){
                display(JSON.parse(this.responseText));
            } else {
                //error
            }
        }
    };
    xhttp.open("GET", "js/fakedata.json", true);
    xhttp.send();

    function display(param) {
        console.log(param)
        var data = param.products[detail].data;
        var element = document.getElementById("detail");
        var dateholder = element.children[0];
        var name = element.children[1];
        var info = element.children[2];
        var img = element.children[3];

        img.setAttribute("src", data.img);
        name.innerHTML = data.title;
        info.innerHTML = data.info;
        

        var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
        ];

        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        console.log(day, monthNames[monthIndex], year);
        dateholder.innerHTML = day + ' ' + monthNames[monthIndex] + ' ' + year;    
    }
}
function startConn() {
    
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    alert('Connection type: ' + states[networkState]);
}
 
