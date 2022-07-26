const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000


//middleware for find static assets
app.use(express.static("public"));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")))

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

// Set up routers
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => {
    console.log(`listenin to port ${PORT}`);
});


