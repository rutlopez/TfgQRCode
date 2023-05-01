const app = require("./app");



//Puerto 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App is listening to port 3000")
})
