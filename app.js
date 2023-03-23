const { Router } = require("express");
const express = require("express");
const morgan = require("morgan")
const { render } = require("ejs")
const { appendFile } = require("fs");
const siteRoutes = require("./routes/siteRoutes");

//express app

const app = express();

// declaring port

app.listen(3000)


//register view engine

app.set("view engine", "ejs");



//middleware & static files

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.use(morgan("dev"))


// routes

app.get("/",(req, res) =>{
    res.render("index", {title: "Presh'N'Cake"});
  });
  
app.get("/about",(req, res) =>{
    res.render("about", { title: "About"});
  })

app.get("./about-us", () => {
    res.redirect("./about");
  })

app.get("/services", (req, res) => {
    res.render("services", {tittle: "services"})
})

app.get("/contactUs", (req, res) =>{
    res.render("contactUs")
})