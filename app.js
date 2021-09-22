
const express = require("express")
const app = express()

// Items that will be added to ToDo List
let items = ["Buy food", "Make food", "Eat food"]


// No need for requiring ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

// Telling app the location of our static files(in public folder)
app.use(express.static("public"))

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/index.html")
    let today = new Date;
    let options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    let dayString = today.toLocaleDateString("en-US", options);
    // res.render("name of ejs file located in views folder", "object of all variables in ejs file")
    res.render("list", { dayOfWeek: dayString, newListItems: items });
})


app.post("/", function (req, res) {
    console.log(req.body.newItem)
    items.push(req.body.newItem);
    res.redirect("/")
})


// Note: 3000 is an int, not a string.
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on localhost:3000");
})