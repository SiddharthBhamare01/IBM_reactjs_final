import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017';
const databaseName = 'ibm';

mongoose.connect(`${connectionString}/${databaseName}`)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
