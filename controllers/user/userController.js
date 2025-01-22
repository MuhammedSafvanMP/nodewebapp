const User = require("../../models/userSchema");




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


const loadSignup = async (req, res) => {
    try {
        return res.render('signup')
    } catch (error) {
        console.log('Signup page not loading', error);
        res.status(500).send('Server Error');
    }
}


const signup = async (req, res) => {
    try {
        const { name,  email, phone, password } = req.body;

        const newUser = new User({ name, email, phone, password });

        await newUser.save();

        return res.redirect("/signup");

    } catch (error) {
       console.error('Error for save user', error);
       res.status(500).send('Internal server error');   
    }
}


// const loadShopping = async (req, res) => {
//     try {
//         return res.render('shop');
//     } catch (error) {
//         console.log('Shopping page not loading', error);
//         res.status(500).send('Server Error');
//     }
// }


module.exports = {
    loadHomepage,
    pageNoteFound,
    loadSignup,
    signup
}