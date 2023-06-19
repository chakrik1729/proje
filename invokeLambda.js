const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});
let lambda = new AWS.Lambda();


exports.handler = async (event) => {
    // TODO implement
    
    let params = {
        FunctionName: 'test-rds',
        InvocationType: 'RequestResponse',
        Payload: '{ "check" : "I from outside VPC"}'
    };
    
    let return_val = await lambda.invoke(params).promise();
    
    console.log(return_val);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
