const socket = io(); // Establish a connection

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000, //5 sec
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}

const map = L.map("map").setView([0, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href=''>KARTIKEY BHARDWAJ TRACKER</a> "
}).addTo(map);

const markers =  {}

socket.on("receive-location" , (data)=>
{
    const {id , latitude , longitude} = data;
    map.setView([latitude,longitude] ,16);
    if(markers[id])
    {
        markers[id].setLatLng([latitude,longitude]);
    }
    else{
        markers[id] = L.marker([latitude,longitude]).addTo(map);
    }
});

socket.on("user-disconnected" , (id)=>
{
    if(markers[id])
    {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});