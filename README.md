# 🚍 Amana Transportation Assignment – Solution Repository

Welcome to the solution repository for **Unit 02: Homework Assignment – AI Blitz** from the Amana Full Stack Development Bootcamp. This project transforms a simple prototype into a fully functional Amana Transportation application utilizing **Next.js** ⚛️, **Tailwind CSS** 🎨, and **Leaflet.js** 🗺️—with the power of AI to accelerate development.

---

## 📝 Project Overview

This assignment demonstrates how AI can be leveraged to rapidly build and deploy a modern web application for a Malaysian public bus service. The solution provides real-time transit information, interactive mapping, and enhanced data visualization, all powered by live API data.

---

## 🎓 Learning Outcomes

This week, we mastered:

- **AI-Driven Development** 🤖: Using AI tools to scaffold code, generate UI components, and solve problems efficiently.
- **Front-End Frameworks** ⚛️: Understanding and applying Next.js, React.js, and Tailwind CSS for scalable interfaces.
- **Map Integration** 🗺️: Implementing Leaflet.js to visualize geospatial data and live bus positions.
- **Best Practices** ✅: Accessibility, responsiveness, and cross-browser compatibility.
- **Deployment** 🚀: Publishing web apps using Vercel for public access.

---

## 🎯 Assignment Objectives

1. **Initialize the project**  
   Set up a public Next.js boilerplate repository.
2. **Leverage AI for development**  
   Use AI-assisted prompts to build UI components: Header, Hero, Map, Bus Stop Table, Footer.
3. **Fetch & display transit data**  
   Integrate the Amana API to show real-time bus routes, stops, and positions.
4. **Enhance & extend features**  
   Improve UI/UX and add features (e.g., bus occupancy statistics, charts).
5. **Thorough documentation**  
   Provide screenshots, code samples, and explanations in a shared Google Doc.
6. **Deploy to Vercel**  
   Launch the application for public access and feedback.

---

## 💻 Technology Stack

- **Next.js** ⚛️ – React-based framework for scalable web apps  
- **Tailwind CSS** 🎨 – Utility-first styling for rapid UI development  
- **Leaflet.js** 🗺️ – Interactive map integration  
- **Vercel** 🚀 – Deployment and hosting

---

## 🗂️ Amana Transportation Data

This application is powered by live data from the Amana API, providing comprehensive transit information:

### 🏢 Company Profile
| Name                   | Founded | HQ                  | Industry             | Description                                                                 |
|------------------------|---------|---------------------|----------------------|-----------------------------------------------------------------------------|
| Amana Transportation   | 2019    | Kuala Lumpur, MY    | Public Transportation| Modern public bus service focused on reliability and comfort                 |

### 🚏 Bus Lines
Five primary routes:
- **KLCC - Petaling Jaya Express** (`B101`)
- **Old Town - Mont Kiara Connector** (`B205`)
- **Airport - City Circle** (`B350`)
- **University Express** (`B410`)
- **Shopping District Shuttle** (`B520`)

Each bus route provides:
- Real-time position and status
- Driver and vehicle details
- List of bus stops with arrival estimates
- Incident reports and status
- Route distance, speed, and frequency

### 📊 Operational Summary
- **Total Buses:** 5
- **Active:** 4
- **Maintenance:** 1
- **Total Capacity:** 215
- **Current Passengers:** 117
- **Average Utilization:** 53%

---

### 🗄️ API Data Shape (JSON Example)

Below is a simplified JSON schema demonstrating the structure of data retrieved from the Amana API:

```json
{
  "company_info": {
    "name": "Amana Transportation",
    "founded": "2019",
    "headquarters": "Kuala Lumpur, Malaysia",
    "industry": "Public Transportation",
    "description": "Modern public bus service connecting key areas in Kuala Lumpur and surrounding regions, focused on reliability and passenger comfort."
  },
  "bus_lines": [
    {
      "id": 1,
      "name": "KLCC - Petaling Jaya Express",
      "route_number": "B101",
      "current_location": {
        "latitude": 3.158,
        "longitude": 101.711,
        "address": "Jalan Ampang, near KLCC Twin Towers, Kuala Lumpur"
      },
      "status": "Active",
      "passengers": {
        "current": 32,
        "capacity": 45,
        "utilization_percentage": 71
      },
      "driver": { "name": "Ahmad Rahman", "id": "DRV001" },
      "bus_stops": [
        { "id": 1, "name": "KLCC Station", "latitude": 3.1578, "longitude": 101.7114, "estimated_arrival": "14:20", "is_next_stop": true }
        // ...more stops
      ],
      "incidents": [
        { "id": 1, "type": "Mechanical", "description": "AC malfunction", "reported_time": "9:33 AM", "status": "Canceled", "priority": "Medium" }
        // ...more incidents
      ],
      "vehicle_info": { "license_plate": "WKL 2891", "model": "Scania K230UB", "year": 2019, "fuel_level": 75 },
      "route_info": { "total_distance": 28.5, "average_speed": 25, "estimated_completion": "16:00", "frequency_minutes": 20 }
    }
    // ...more bus lines
  ],
  "operational_summary": {
    "total_buses": 5,
    "active_buses": 4,
    "maintenance_buses": 1,
    "out_of_service_buses": 0,
    "total_capacity": 215,
    "current_passengers": 117,
    "average_utilization": 53
  },
  "filters": {
    "available_statuses": ["Active", "Maintenance", "Out of Service"],
    "available_routes": ["B101", "B205", "B350", "B410", "B520"]
  }
}
```


## 🚀 Solution Features

- **Modern UI:** Responsive and accessible design with Tailwind CSS.
- **Header & Hero:** Sticky navigation, branding, and intro section.
- **Map Component:** Leaflet.js-powered, displays bus stops, lines, and live positions.
- **Bus Stop Table:** Shows all stops and highlights the next arrival.
- **Bus Occupancy Statistics:** Bar and pie charts for utilization per line.
- **AI-Enhanced Coding:** Implementation assisted by AI prompts for speed and clarity.
- **Documentation:** Screenshots, code snippets, and process explanations in a shared Google Doc.
