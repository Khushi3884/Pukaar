PUKaR: Disaster Relief Platform
Description
PUKaR is a social media-like platform where users can upload videos and text to share their experiences or request help in the case of natural disasters. Other users can vote on the validity of the situation, and once a post has more votes for being true than false, it automatically opens a fundraising campaign. The collected funds are directed to the Non-Governmental Organization (NGO) tied with the platform. NGOs can access these posts and notifications through their own dedicated interface.

Features:
Users can post videos and text about natural disaster situations.
Users can vote whether the posted situation is true or false.
When a post gets verified (more votes for "true"), a fundraising campaign is opened.
NGOs can receive notifications about posts collecting funds or being verified.
The platform includes a notification system for updates.
Technologies Used
Frontend: React.js, Axios, CSS
Backend: Node.js, Express, MongoDB
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Hosting: (You can mention your hosting platforms if any, like Heroku, Netlify, etc.)
Prerequisites
Node.js installed on your system.
MongoDB setup (locally or through a cloud service like MongoDB Atlas).
Installation
Backend
Clone the repository for the backend:
Navigate to the backend directory:
cd pukar-backend
Install dependencies:
npm install
Create a .env file in the root directory and add the following variables:
env
DB_URI=mongodb://localhost:27017/pukar
JWT_SECRET=your_jwt_secret_key
Start the backend server:
npm start
Frontend
Clone the repository for the frontend:
Navigate to the frontend directory:
cd pukar-frontend
Install dependencies:
npm install
Start the frontend React app:
npm start
Usage
For Users: Visit the homepage to submit posts about natural disaster situations. Users can vote on posts to help verify them. If a post gains enough votes as "true," it will trigger a fundraising campaign.

For NGOs: NGOs can log in to access the notifications and track the posts that are being verified or raising funds.

API Endpoints
POST /api/posts/
Description: Submit a new post about a natural disaster situation.
Request Body:
json
{
    "title": "Post Title",
    "description": "Detailed description of the situation",
    "videoUrl": "https://example.com/video.mp4"
}
Response: Returns the newly created post object.
GET /api/posts/
Description: Fetch all posts.
Response: Returns an array of post objects.
POST /api/donations/
Description: Start a fundraising campaign for a verified post.
Request Body:
json
{
    "postId": "POST_ID",
    "amount": "Amount to donate"
}
Contributing
We welcome contributions! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch.
Make your changes.
Open a pull request to the main branch.
License
This project is licensed under the MIT License - see the LICENSE file for details.
