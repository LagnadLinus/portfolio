





const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'ap-southeast-2' }); // Replace with your region

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);
    const params = {
        Destination: {
            ToAddresses: ['dangalsunil@gmail.com'], // Your email address
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                },
            },
            Subject: {
                Data: 'New Contact Form Submission',
            },
        },
        Source: 'dangalsunil@gmail.com', // Must be the same email you verified
    };

    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' }),
        };
    }
};
