
import {venkatesh} from './server1.js'; // Import the entire module
  

export const sameer =async (req, res) => {
  const { sId,sName,smobil, scollege } = req.body;
  console.log(sId);
  console.log(sName);
  console.log(smobil);
  console.log(scollege);
  try {
    const [rows, fields] = await venkatesh.query(
      'INSERT INTO studentdata(sId,sName,smobil,scollege) VALUES (?,?,?,?)',
      [sId,sName,smobil,scollege]
    );
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  
};