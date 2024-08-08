const AWS = require('aws-sdk');
   const s3 = new AWS.S3();

   module.exports.uploadImage = async (event) => {
     const body = JSON.parse(event.body);
     const { image, filename } = body;

     const buffer = Buffer.from(image, 'base64');

     const params = {
       Bucket: 'my-images-amz', // Your bucket name
       Key: filename,
       Body: buffer,
       ContentType: 'image/jpeg', // Adjust based on your image type
     };

     await s3.putObject(params).promise();

     return {
       statusCode: 200,
       body: JSON.stringify({ message: 'Image uploaded successfully!' }),
     };
   };

   module.exports.getImages = async () => {
     const params = {
       Bucket: 'my-images-amz',
     };

     const data = await s3.listObjectsV2(params).promise();
     const images = data.Contents.map(item => item.Key);

     return {
       statusCode: 200,
       body: JSON.stringify(images),
     };
   };
