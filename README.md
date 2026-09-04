# Gbemisola Foundation — Frontend

Frontend web application for the **Gbemisola Foundation**, built with React. The application provides the public-facing website for the foundation and connects to a Node.js/Express backend API for dynamic content, registrations, and other services.

## 🌐 Project

* **Live Website:** https://gbemisolafoundation.org/
* **Backend API:** https://gbemisola-backend.onrender.com
* **Backend Repository:** https://github.com/ebuka-chris-dev/gbemisola_backend

## 🚀 What I Built

I developed the React frontend for the Gbemisola Foundation website, implementing the site's pages, reusable components, API integration, responsive layouts, and user interactions.

The application includes sections for:

* Foundation information
* About the organization
* Our work and programs
* Capacity building for teachers
* Read to Lead program
* Smart Learning Hub
* Sokoto Learn
* News and media
* Donations
* Partnerships
* Contact and communication
* Work with us
* Registration forms

## 📚 Programs & Organization

The frontend presents information about the foundation's programs and initiatives through dedicated pages and reusable components.

Some of the implemented sections include:

* **Our Work**
* **Capacity Building for Teachers**
* **Read to Lead**
* **Smart Learning Hub**
* **Sokoto Learn**
* **Partnership**
* **Organization**

These sections allow visitors to learn about the foundation and its educational initiatives.

## 📝 Sokoto Learn Registration

I implemented the frontend registration flow for the **Sokoto Learn** program.

The frontend provides registration interfaces that collect information required by the backend, including details related to:

* Competition
* Zone
* School type
* Education level
* Participant registration

The registration forms communicate with the backend API using Axios.

## 📰 News & Media

The website includes dedicated interfaces for displaying foundation news and media content.

Implemented functionality includes:

* News listing
* Individual news views
* Media section
* Dynamic content retrieved from the backend API

## 💰 Donations

The frontend includes dedicated donation pages and interfaces that provide visitors with information about supporting the foundation.

## 📞 Contact & Communication

I implemented frontend pages and forms for communication-related sections of the website, including:

* Contact
* Messages
* Partnership
* Work with us

API requests are handled through Axios where backend interaction is required.

## 🛠️ Technology Stack

* **React 19**
* **JavaScript**
* **React Router**
* **Axios**
* **Bootstrap**
* **Reactstrap**
* **React Toastify**
* **Swiper**
* **Font Awesome**
* **CSS**

## 🏗️ Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── about-us/
│   ├── contact-us/
│   ├── donation/
│   ├── home/
│   ├── media/
│   ├── news/
│   ├── organisation/
│   ├── partnership/
│   ├── shared/
│   ├── view-news/
│   └── work-with-us/
│
├── pages/
│   ├── about-us/
│   ├── capacity-building-for-teachers/
│   ├── contact-us/
│   ├── donation/
│   ├── home/
│   ├── media/
│   ├── news/
│   ├── organisation/
│   ├── our-work/
│   ├── partnership/
│   ├── read-to-lead/
│   ├── smart-learning-hub/
│   ├── sokoto-learns/
│   ├── sokoto-learns-registration/
│   ├── view-news/
│   └── work-with-us/
│
├── store/
├── App.js
└── index.js
```

The application separates pages and reusable UI components to keep the frontend organized and maintainable.

## 🔌 Backend Integration

The frontend communicates with the Gbemisola Foundation backend through REST API requests.

**Backend API:**

```text
https://gbemisola-backend.onrender.com
```

Axios is used to make API requests and handle communication between the React application and backend services.

## 📱 Responsive Interface

The application was developed to provide a responsive experience across different screen sizes.

Bootstrap and Reactstrap are used alongside custom styling to build and structure the user interface.

Swiper is also used for interactive content and presentation sections where applicable.

## 💻 Running Locally

### Clone the repository

```bash
git clone https://github.com/ebuka-chris-dev/gbemisola_frontend.git

cd gbemisola_frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will be available through the local development server.

### Create a production build

```bash
npm run build
```

## 🔗 Related Project

This frontend is part of the Gbemisola Foundation web platform and works together with the Node.js backend API.

**Backend Repository:**

https://github.com/ebuka-chris-dev/gbemisola_backend

## 👨‍💻 Developer

**Ebuka Christian Ugwu**

Full-Stack JavaScript Developer
