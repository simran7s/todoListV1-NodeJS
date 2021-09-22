
const express = require("express")
const app = express()

// Requiring a local module
const date = require(__dirname + "/date.js")

// Items that will be added to ToDo List
const items = ["Buy food", "Make food", "Eat food"]
const workItems = []

// No need for requiring ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

// Telling app the location of our static files(in public folder)
app.use(express.static("public"))

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/index.html")
    dayString = date.getDate()
    // res.render("name of ejs file located in views folder", "object of all variables in ejs file")
    res.render("list", { listTitle: dayString, newListItems: items, route: "/" });
})


app.post("/", function (req, res) {



    console.log(req.body.newItem)
    items.push(req.body.newItem);


    res.redirect("/")
})


app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems, route: "/work" })
})

app.post("/work", function (req, res) {
    workItems.push(req.body.newItem);
    res.redirect("/work")
})

app.get("/about", (req, res) => {
    res.render("about")
})

// Note: 3000 is an int, not a string.
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on localhost:3000");
})