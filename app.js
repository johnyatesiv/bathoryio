/** Dependencies **/
const express = require("express");

/** Initialize App as Express obj **/
const app = express();

/** Serves assets from /public directory **/
app.use(express.static('public'));

app.set('view engine', 'ejs');

/** Helpers **/

/** Test Server is up **/
app.get('/', (req, res) => {
    res.render("index.ejs");
});

/** Starts the app, listening on 3000 by default or on the configured environment port **/
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));