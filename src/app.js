const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

const mainRoute = require('./routes');

const viewsPath = path.join(__dirname, 'resource\\views');

// Setup static file
app.use(express.static(path.join(__dirname, 'public')));

// Http Logger
app.use(morgan('combined'));

// Set Template Engine
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: `${viewsPath}\\layouts`,
  }),
);
app.set('view engine', 'handlebars');
app.set('views', viewsPath);

// Init Route
mainRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
