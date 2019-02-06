import dotenv from 'dotenv';
dotenv.config({ silent: true });

module.exports  = {
  PORT: process.env.PORT || 8081
};