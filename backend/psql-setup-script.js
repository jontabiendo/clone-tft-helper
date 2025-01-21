const db  = require('./db/models');

db.sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  if (!data.includes(process.env.SCHEMA)) {
    await db.sequelize.createSchema(process.env.SCHEMA);
  }
});
