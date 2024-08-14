// index.js
exports.handler = async (event) => {
    // Your business logic here
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
