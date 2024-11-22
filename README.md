Location Tracker Project
This project demonstrates a real-time location tracking system that allows users to share their geographic locations and view other users' locations on a map in real time. Built using Node.js, Express, Socket.io, and Leaflet.js, the application provides the following features:

Features:
Real-time Location Sharing: Users' geographical locations are sent and received in real time.
Map Visualization: Users' locations are displayed on a dynamic map, with real-time updates.
Multiple Users Support: All connected users can see the location of other users as they move.
User Disconnect Handling: When a user disconnects, their location is removed from the map.
![image](https://github.com/user-attachments/assets/10b1398b-0a44-49bd-bde5-b56e7c6d6a0a)


Technologies Used:
Node.js: JavaScript runtime to build the server.
Express: Web framework to handle HTTP requests.
Socket.io: Enables real-time communication between the server and clients.
Leaflet.js: JavaScript library for displaying and interacting with maps.
Geolocation API: Fetches the user's geographical location.
EJS: Templating engine for rendering dynamic HTML content.


How It Works:
Geolocation Tracking: Users' locations are tracked in real time using the browser's geolocation API.
Socket Communication: Socket.io is used to send location data to the server and broadcast it to other clients.
Map Updates: The location data is used to update a map, where each user is represented by a marker.
User Disconnects: When a user disconnects, their marker is removed from the map.


How to Use:
Clone the repository.
Install the required dependencies using npm install.
Start the server with node index.js.
Open a browser and navigate to http://localhost:3000 to start sharing your location.
This project can be extended further with features like user authentication, tracking history, and more advanced map interactions.


