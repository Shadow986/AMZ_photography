const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {
    const { body } = event;
    const { fileName, fileContent } = JSON.parse(body);
    const params = {
        Bucket: 'your-bucket-name',
        Key: fileName,
        Body: Buffer.from(fileContent, 'base64'),
        ContentType: 'image/jpeg',
    };

    try {
        await S3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
