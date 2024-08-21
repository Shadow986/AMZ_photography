const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuidv4 = require('uuid').v4;

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    const token = event.headers.Authorization ? event.headers.Authorization.split(' ')[1] : null;
    console.log("Token:", token);

    const validToken = 'rhVHdZG7kb32cRrOSq5Ch9IRourm7WyfL1fSxL6gb';

    if (token !== validToken) {
      console.log("Invalid token");
      return {
        statusCode: 403,
        body: JSON.stringify({ message: 'Forbidden: Invalid token' }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      };
    }

    if (event.httpMethod === 'POST') {
      const requestBody = JSON.parse(event.body);
      console.log("Request body:", requestBody);

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

      await dynamoDb.put(params).promise();
      console.log("Item successfully stored in DynamoDB.");

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully!' }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    };
  }
};
