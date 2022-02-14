const express = require("express");
const mypageRouter = require('./routes/mypage');
const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({ extended: false })); // enable to use req.body.(input field)

// views engine (convert ejs code to HTML)
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.engine("html", require("ejs").renderFile);

// routes
app.get("/", async (req, res) => {
    res.redirect("/mypage");
});

app.use('/mypage', mypageRouter);

// web server
app.listen(3000, () => {
    // port: 3000 app success
    console.log("localhost:3000 OK");
});
