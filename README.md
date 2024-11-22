
# Location Tracker Project



This project demonstrates a real-time location tracking system that allows users to share their geographic locations and view other users' locations on a map in real time. Built using Node.js, Express, Socket.io, and Leaflet.js, the application provides the following features:






## Features

- **Real-Time Location Sharing:** Users can share their current location, which is updated live for all connected users.
- **Dynamic Map Visualization:** Locations are displayed on a map using markers, updated as users move.
- **Multiple User Support:** Supports multiple users simultaneously, displaying all users' locations in real time.
- **User Disconnect Handling:** Automatically removes a user's marker from the map when they disconnect.


## Screenshots

![image](https://github.com/user-attachments/assets/10b1398b-0a44-49bd-bde5-b56e7c6d6a0a)


## How It Works

1. **Geolocation Tracking:**
   - Users' locations are tracked via the browser's Geolocation API.
2. **Real-Time Updates:**
   - User locations are sent to the server through WebSockets and broadcast to all connected clients.
3. **Map Integration:**
   - A map displays user locations with markers. Each marker dynamically updates as the user moves.
4. **Disconnect Handling:**
   - When a user disconnects, their marker is removed from the map, ensuring a clean interface.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Framework for building RESTful routes and serving static files.
- **Socket.io**: Enables real-time WebSocket communication.
- **Leaflet.js**: Library for interactive map rendering.
- **Geolocation API**: Retrieves users' geographical location data.
- **EJS**: Templating engine for dynamic HTML generation.
