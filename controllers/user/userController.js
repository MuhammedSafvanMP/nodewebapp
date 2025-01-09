



const pageNoteFound =  async () => {
    try {
        res.render("page-404");
    } catch (error) {
        res.redirect("/pageNoteFound");
    }
}


const loadHomepage = async (req, res) => {
    try {
        return res.render("home");
    } catch (error) {
        console.log("Home page not found");
        res.status(500).send("Server error");
    }
}


module.exports = {
    loadHomepage,
    pageNoteFound
}