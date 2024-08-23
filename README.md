# 📸 AMZ Photography Website


Overview
AMZ Photography is a dynamic web application designed to showcase and sell photography services. The project leverages AWS Serverless Services for the backend and a modern web stack for the frontend, hosted on Vercel.
![Capturing your timeless memories 2](https://github.com/user-attachments/assets/e5dba8fc-39da-4fb1-a8d2-72ce310005b2)

Project Structure

🖥️ Frontend
Technologies: HTML, CSS, JavaScript
Hosting: Vercel
The frontend is a responsive web interface that allows users to view and purchase photography services. It is built using:

HTML: for structure
CSS: for styling
JavaScript: for interactivity
The frontend is deployed and hosted on Vercel, ensuring fast and reliable access for users.

☁️ Backend
Technologies: AWS Lambda, API Gateway, DynamoDB
Services: AWS S3
Framework: Serverless Framework
The backend is fully serverless, with the following components:

AWS Lambda: Handles application logic (e.g., user sessions, service requests)
API Gateway: Acts as the entry point for the frontend to communicate with backend services
DynamoDB: Stores user data and service information
AWS S3: Used for static asset storage
🔗 Frontend and Backend Integration
The frontend communicates with the backend via RESTful APIs managed by AWS API Gateway. These APIs are consumed in the JavaScript code, allowing users to:

Book photography sessions
View available packages

🚀 Deployment Instructions
Frontend
Clone the frontend repository:
bash
Copy code
git clone https://github.com/MarcieD1/amz-photography-frontend.git
cd amz-photography-frontend

Deploy the project:
bash
Copy code
vercel
Follow the on-screen instructions to complete the deployment.

Backend
Set up the Serverless Framework:
Install the Serverless Framework:
bash
Copy code
npm install -g serverless
Deploy the backend:
bash
Copy code
serverless deploy
This will create the necessary AWS resources and deploy the Lambda functions, API Gateway, and DynamoDB tables.

🛠️ Challenges Encountered
Integration Issues: Initial difficulties in integrating the Vercel-hosted frontend with the AWS-hosted backend. Resolved by configuring CORS settings in API Gateway.
Serverless Deployment: Understanding the Serverless Framework and setting up AWS permissions was challenging but resolved with thorough documentation and practice.

🎓 Lessons Learned
Serverless Architecture: Gained hands-on experience with AWS Serverless technologies, facilitating scalable and manageable backend services.
Frontend-Backend Integration: Learned how to effectively connect a modern frontend with a serverless backend, emphasizing API design and deployment strategies.

🚧 Future Improvements
Enhanced Authentication: Consider implementing AWS Cognito for a more robust authentication system.
Caching Strategy: Implement more efficient caching with CloudFront to reduce latency and improve load times.

�� Conclusion
AMZ Photography is a robust and scalable platform combining modern frontend technologies with powerful serverless backend services. The project is designed for easy extensibility, allowing for future enhancements.
