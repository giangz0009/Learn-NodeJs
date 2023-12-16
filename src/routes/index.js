const newsRouter = require("./news");
const siteRouter = require("./site");

function mainRoute(app) {
  // News Router
  app.use("/news", newsRouter);

  // Site Router
  app.use("/", siteRouter);
}

module.exports = mainRoute;
