# Visa Navigator Portal

The **Visa Navigator Portal** is a web application designed to streamline the visa application process. It offers features for viewing visa details, adding and managing visas, and tracking applications. Users can register, log in, and navigate through private and public routes for a seamless experience.


## Assignment Category: Sunflower


## **Live Site**
- Visit Live Site: [ Visa Navigator Portal ]()
- Visit github Repo Link Client Site:[ Github repo.](https://github.com/programming-hero-web-course2/b10-a10-client-side-Mehedihasan-99)
- Visit github Repo Link Server Site:[ Github repo.](https://github.com/programming-hero-web-course2/b10-a10-server-side-Mehedihasan-99)

---

## Features

### General Features
- **Navbar**: Dynamic navigation bar with authentication-dependent options.
- **Footer**: Consistent footer with website details and social links.
- **Dark/Light Mode**: Toggle for improved accessibility.
- **404 Page**: Custom page for non-existent routes.
- **Loading Spinner**: Displays during data loading.

### Authentication
- **Login Page**:
  - Email and password fields with validation.
  - Google Social Login.
  - Redirection to the intended page or Home after successful login.
- **Register Page**:
  - Form fields: Name, Email, Photo URL, Password.
  - Password validation:
    - At least one uppercase letter.
    - At least one lowercase letter.
    - Minimum length of 6 characters.
  - Google Social Login.

### Home Page
- **Banner**: Rotating slides with meaningful content.
- **Latest Visas**: Displays six latest visa cards using MongoDB limit operator.
  - Includes Country, Visa Type, Processing Time, Fee, Validity, Application Method.
  - "See Details" button navigates to the Visa Details page.
  - "See All Visas" button redirects to the All Visas page.
- **Extra Sections**:
  - Travel Tips.
  - Visa Success Stories.

### Add Visa Page
- Private/protected route.
- Form to add new visas with fields:
  - Country Image .
  - Country Name, Visa Type, Processing Time, Required Documents, Description, Age Restriction, Fee, Validity, Application Method.
- On submission, data is stored in the database and displayed on the All Visas page.

### All Visas Page
- Public route with a 4-column grid layout displaying visa cards.
- Filter dropdown by visa types.
- "See Details" button navigates to the Visa Details page.

### Visa Details Page
- Private/protected route displaying all stored visa details.
- "Apply for Visa" button opens a modal for application submission:
  - Form fields: Email, First Name, Last Name, Applied Date (current date), Fee.
  - Submitted data appears on My Visa Applications page.

### My Added Visas Page
- Private/protected route displaying visas added by the logged-in user.
- Card layout with "Update" and "Delete" buttons:
  - **Update**: Opens a modal to edit and update visa details in the database.
  - **Delete**: Removes visa data from the database and page.

### My Visa Applications Page
- Private/protected route displaying visas applied for by the logged-in user.
- Card layout with search functionality by country name.
- "Cancel" button removes applications from the database and page.

## Technologies Used
- **Frontend**:
  - React.js
  - TailwindCSS
  - DaisyUI
  - React Icons
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB
- **Authentication**:
  - Firebase Authentication
- **Hosting**:
  - FireBase Hosting -for frontend
  - Vercel for backend

## Deployment
- **Frontend**: Deploy the React app to FireBase Hosting.
- **Backend**: Deploy the Node.js server to Vercel

## Future Enhancements
- Implement email verification and password recovery.
- Add support for more authentication providers (e.g., Facebook, GitHub).
- Optimize database queries for better performance.
- Improve UI/UX with advanced animations and transitions.

