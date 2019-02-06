import express from 'express';
import config from './config';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


require('./routes')(app);

app.listen(config.PORT,()=>{
  console.info(`Server running on ${config.PORT}`);
});