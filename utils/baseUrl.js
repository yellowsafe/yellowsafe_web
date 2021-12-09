const baseUrl = process.env.NODE_ENV === "production"
? 'https://yellowsafe.cl/'
: 'http://localhost:3000';

export default baseUrl;
