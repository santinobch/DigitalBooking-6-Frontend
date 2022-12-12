// Constants.js
const prod = {
    API_URL: 'http://ec2-18-190-159-203.us-east-2.compute.amazonaws.com:8080',
};
const dev = {
    API_URL: 'http://localhost:8080'
};
const test = {
    API_URL: 'http://localhost:8080'
};

export const config = (process.env.NODE_ENV === 'development') ? dev : ( (process.env.NODE_ENV === 'test') ? test : prod)

