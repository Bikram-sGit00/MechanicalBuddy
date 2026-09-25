<p align="center">
  <img src="assets/banner.svg" alt="Mechanical Buddy, roadside help tracked live" width="100%" />
</p>


<p align="center">
  <h2>A roadside assistance platform for the moment the car stops and the phone is all you have</h2>
</p>

<!-- HACKATHON DETAILS: add the hackathon name, date, and your team or result here.
Example: Built at <Hackathon name>, <month year>. Finished <position / award>. -->

<!-- LIVE DEMO: if the app is deployed, add the link here
<p align="center"><a href="https://your-link-here">🌐 Live demo</a></p>
-->

Mechanical Buddy was built during a hackathon. A driver whose vehicle breaks down can find a nearby mechanic, watch them come closer on a live map, and press an SOS button if it's urgent. Mechanics get a separate portal where they take requests and build up a rating. Both sides live in one app, so a request made on one phone shows up on the other.


<div align="center">
  <h2>🚀🧑🏻‍💻 A look at the App</h2>
</div>

### The customer home screen

<img width="1466" height="985" alt="image" src="https://github.com/user-attachments/assets/f9317602-5f9f-4ec4-ac2d-fe4585cd8a36" />


The home screen opens with two actions front and centre, **Find Mechanic** and **Emergency SOS**, so nothing stands between a stranded driver and help. Next to them is the live tracking card: a map with the mechanic's position and a strip underneath showing ETA, distance and the vehicle number. Below that are the three services on offer, repair, fuel delivery and battery jumpstart. The header shows the user's location as it's being picked up, plus a notification bell.

### Picking a side
<img width="1497" height="861" alt="image" src="https://github.com/user-attachments/assets/3f5cccb6-7fd1-4e37-938c-60412b03eeb1" />


The entry screen asks one question: are you a customer or a mechanic? Each role has its own login and its own dashboard behind it, and new users can register from the same card.

### Two portals, one app

<table>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/a0d91ede-3843-4d34-9cd8-292111006b7f" alt="Customer login" /></td> 
    <td width="50%"><img src="https://github.com/user-attachments/assets/e8eae102-1bd2-424b-8626-5c31bb875672" alt="Mechanic login" /></td>

  </tr>
  <tr>
    <td align="center"><b>Customer portal</b></td>
    <td align="center"><b>Mechanic partner portal</b></td>
  </tr>
</table>

The customer side is built around getting help quickly: nearby mechanic support, round-the-clock emergency assistance, and live tracking with alerts. The mechanic side is built around the work: managing service requests, accepting jobs, and earning ratings, reviews and rewards. Both portals let people sign in with email and password, Google, or a phone number, and both have a remember-this-device option.

## ✨ What's inside

| | |
| --- | --- |
| 🗺️ **Live tracking** | Leaflet map with ETA, distance and vehicle details for the mechanic on the way |
| 🚨 **Emergency SOS** | Sends information & location to nearest police station & mechanics |
| 🔧 **Services** | Repair, fuel delivery and battery jumpstart |
| 👥 **Two roles** | Separate customer and mechanic portals with their own logins |
| 🔐 **Sign in options** | Email, Google or phone |
| 🌐 **Language support** | Built on i18next so the interface can switch languages |
| 🎞️ **Smooth motion** | Page and card transitions with Framer Motion |

🧰 Used technologies
<p align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="52" height="52" alt="HTML5" title="HTML5" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="52" height="52" alt="CSS3" title="CSS3" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="52" height="52" alt="JavaScript" title="JavaScript" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="52" height="52" alt="React" title="React" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="52" height="52" alt="Vite" title="Vite" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/reactrouter/CA4245" width="52" height="52" alt="React Router" title="React Router" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/leaflet/199900" width="52" height="52" alt="Leaflet" title="Leaflet" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/framer/0055FF" width="52" height="52" alt="Framer Motion" title="Framer Motion" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/i18next/26A69A" width="52" height="52" alt="i18next" title="i18next" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/axios/5A29E4" width="52" height="52" alt="Axios" title="Axios" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="52" height="52" alt="Node.js" title="Node.js" /> &nbsp;&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="52" height="52" alt="MongoDB" title="MongoDB" /> &nbsp;&nbsp; <img src="https://cdn.simpleicons.org/express/000000" width="52" height="52" alt="Express" title="Express" /> </p> <p align="center">  </p> <!-- BACKEND: confirm the rest — Mongoose? JWT/auth library? Mongo Express is a dev-only DB admin UI, not part of the running app, so it belongs in a "Development" note below rather than here. -->

<!-- BACKEND: the server/ folder has its own stack. Add its icons and names here.
Example: Node.js, Express, MongoDB -->

## 🧭 How a user moves through it

```mermaid
flowchart TD
    W["Welcome screen<br/>choose your role"] --> C["Customer login<br/>email, Google or phone"]
    W --> M["Mechanic login<br/>partner portal"]
    C --> D["Customer dashboard"]
    D --> F["Find Mechanic"]
    D --> S["Emergency SOS"]
    D --> V["Repair, fuel delivery,<br/>battery jumpstart"]
    F --> T["Live tracking<br/>map, ETA, distance"]
    S --> T
    M --> P["Partner dashboard<br/>requests, jobs, ratings"]
    P -.->|accepts a request| T

    style S fill:#fee2e2,stroke:#ef4444,color:#7f1d1d
    style T fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
```

## 🧩 Under the hood
 
The backend is split the way most Node APIs are: routes receive the request, controllers hold the logic, and models describe the data. There are three models, User, Mechanic and Request, which map to the three things the app is about: people who need help, people who give it, and the service requests between them.
 
```mermaid
flowchart LR
    A["React app<br/>Axios calls"] --> R["Routes<br/>auth, mechanic, request"]
    R --> C["Controllers<br/>auth, mechanic"]
    C --> M["Models<br/>User, Mechanic, Request"]
    M --> D[("Database")]
```
 
## 🏆 Hackathon
 
<!-- CERTIFICATE: upload the image to assets/certificate.png, then remove the comment markers around the line below
![Hackathon certificate](assets/certificate.png)
-->
 
<!-- Add a line or two here about the hackathon, the theme, how long you had, and what your team built in that time. -->
 
## 📁 Project structure
 
```
MechanicalBuddy/
├── assets/                    # banner, logos and screenshots
│   ├── banner.svg
│   └── screenshots/
├── public/
│   ├── sounds/                # notification sounds
│   └── notification.mp3
├── server/
│   ├── controllers/           # authController, mechanicController
│   ├── models/                # User, Mechanic, Request
│   ├── routes/                # authRoutes, mechanicRoutes, requestRoutes
│   └── server.js              # backend entry point
├── src/
│   ├── components/            # Navbar, Hero, Services, LiveTracking, MechanicCard,
│   │                          # CustomerRequestCard, ProfileModal, FooterStats,
│   │                          # MechanicDashboardContent, logo
│   ├── pages/                 # Home, Division, Customer, CustomerReg, Mechanic,
│   │                          # MechanicReg, MechanicHome, MechanicDashboard
│   ├── App.jsx
│   ├── i18n.js                # language setup
│   └── main.jsx
├── index.html
└── vite.config.js
```
 
<p align="center">
  Built during a hackathon by <a href="https://github.com/Bikram-sGit00">Bikram-sGit00</a> 🛠️
</p>

<!-- Add a line or two here about the hackathon, the theme, how long you had, and what your team built in that time. ttps://github.com/Bikram-sGit00">Bikram-sGit00</a> 🛠️
</p>
