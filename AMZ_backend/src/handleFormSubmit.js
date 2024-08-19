const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const token = event.headers.Authorization.split(' ')[1];
    const validToken = 'rhVHdZG7kb32cRrOSq5Ch9IRMYm7WyfL1fSxL6gb';

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://amz-photography.vercel.app',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: JSON.stringify({ message: 'Hello from Lambda!' })
    };

    if (token !== validToken) {
        response.statusCode = 403;
        response.body = JSON.stringify({ message: 'Forbidden' });
        return response;
    }

    const requestBody = JSON.parse(event.body);
    const { name, email, message } = requestBody;

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: uuidv4(),
            name,
            email,
            message,
            submittedAt: new Date().toISOString()
        }
    };

    try {
        await dynamoDb.put(params).promise();
        response.body = JSON.stringify({ message: 'Form submitted successfully!' });
        return response;
    } catch (error) {
        response.statusCode = 500;
        response.body = JSON.stringify({ message: 'Failed to submit form', error });
        return response;
    }
};
