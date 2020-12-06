$(document).ready(function(){
    $("#readMore1").click(function(){
        $("#hidden1").fadeToggle("slow"); 
        let $this = $(this)
        $this.html() == "Read More..." ? $this.html("Read Less") : $this.html("Read More...")
    });
});      
$(document).ready(function(){
    $("#readMore2").click(function(){
        $("#hidden2").fadeToggle("slow");
        let $this = $(this)
        $this.html() == "Read More..." ? $this.html("Read Less") : $this.html("Read More...")      
    });
});  
$(document).ready(function(){
    $("#readMore3").click(function(){
        $("#hidden3").fadeToggle("slow");
        let $this = $(this)
        $this.html() == "Read More..." ? $this.html("Read Less") : $this.html("Read More...")      
    });
});
function popup(){
    document.querySelector(".login-form").style.display ="flex"
    $(".login-form").animate({opacity: "1"}, "slow")
    document.body.style.overflow = "hidden"
}

function closePopup(){
    $(".login-form").animate({opacity: "0"}, "slow")
    document.querySelector(".login-form").style.display ="none"
    document.body.style.overflow = "scroll"
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
}


let map, map1, map2;

function initMap() {
    const myLatlng = { lat: 43.551232021571565, lng: 7.0187694668257326};
    const myLatlng1 ={ lat: 34.10340260427896, lng:  -118.33775484891183};
    const myLatlng2 = { lat: 52.5200, lng: 13.4050 };
    var options = {
        zoom: 10,
        center: myLatlng,
    }
    var options1 = {
        zoom: 10,
        center: myLatlng1,
    }
    var options2 = {
        zoom: 10,
        center: myLatlng2  ,
    }
    map = new google.maps.Map(document.getElementById("map"), options)
    map1 = new google.maps.Map(document.getElementById("map1"), options1);
    map2 = new google.maps.Map(document.getElementById("map2"), options2);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    })
    var marker1 = new google.maps.Marker({
        position: {lat:34.1025142229975, lng: -118.33994353125857},
        map: map1
    })
    var marker2 = new google.maps.Marker({
        position: {lat:52.52400831269571, lng:  13.389250151555647},
        map: map2
    })
    map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
        map.panTo(marker.getPosition());
        }, 3000);
    });
    map1.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
        map1.panTo(marker1.getPosition());
        }, 3000);
    });
    map2.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
        map2.panTo(marker2.getPosition());
        }, 3000);
    });
    
    marker.addListener("click", () => {
        map.setZoom(17);
        map.setCenter(marker.getPosition());
    });
    marker1.addListener("click", () => {
        map1.setZoom(17);
        map1.setCenter(marker1.getPosition());
    });
    marker2.addListener("click", () => {
        map2.setZoom(17);
        map2.setCenter(marker2.getPosition());
    });
}

$(document).ready(function(){
    $("#see-location").click(function(){
        $(".maps").fadeToggle("slow");  
        
    });
});
$(document).ready(function(){
    $("#see-location1").click(function(){
        $(".another-map").fadeToggle("slow");  
        
    });
});
$(document).ready(function(){
    $("#see-location2").click(function(){
        $(".and-another-map").fadeToggle("slow");  
        
    });
});