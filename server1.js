import mysql from 'mysql2/promise';

export const venkatesh = mysql.createPool({
  host: 'localhost',      // Change if using a remote database
  user: 'root',           // Replace with your MySQL username
  password: 'Viratkohli@18',           // Replace with your MySQL password
  database: 'userinput',  // Replace with your actual database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
