API Gateway setup steps

Create an API:

Navigate to API Gateway in the AWS Management Console.
Create a new REST API.
Create a new resource (e.g., /upload).
Create a new POST method for the resource.
Integrate the Method with Lambda:

Choose "Lambda Function" as the integration type.
Enter the name of your Lambda function (uploadPhoto).
Deploy the API:

Create a new stage (e.g., prod).
Deploy the API to the new stage.
Note the invoke UR
