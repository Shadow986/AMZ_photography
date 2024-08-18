const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);

        // Extract form data (including `name`, `email`, and `message`)
        const { name, email, message } = requestBody;

        // Validate form data
        if (!name || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Name and email are required' }),
            };
        }

        // Optionally save data to DynamoDB
        const params = {
            TableName: process.env.TABLE_NAME,
            Item: {
                id: new Date().toISOString(),
                name,
                email,
                message, // Store the message in DynamoDB
            },
        };

        await dynamoDB.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
