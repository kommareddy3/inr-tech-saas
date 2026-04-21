const express=require('express');const app=express();app.get('/',(r,s)=>s.send('OK'));app.listen(5001,()=>console.log('Server running on port 5001'));
