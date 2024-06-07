


const User = require("../models/userScheme");

exports.userpost = async (req, res) => {
   try {
      const { firstName, email, mobile } = req.body;
      const userData = new User({
         firstName,
         email,
         mobile
      });
      await userData.save();
      res.status(200).json({
         message: "user added successfully"
      });
   } catch (error) {
      res.status(500).json({
         message: error.message
      });
   }
};

// get all users
exports.userget = async (req, res) => {
   try {
      const users = await User.find();
      res.status(200).json({ users });
   } catch (error) {
      res.status(500).json({ message: "Internal server error" });
   }
};


// update users

exports.userpatch=async(req,res)=>{
try {
   const id=req.params.id;
const {firstName,email,mobile}=req.body
const updateUser = await User.findByIdAndUpdate(id, {
   firstName,
   email,
   mobile
}, { new: true }); 
res.send(updateUser);
} catch (error) {
   res.status(500).json({ message: "Internal server error" });
}
}

exports.userdelete = async (req, res) => {
   try {
      const id = req.params.id;
      const deleteUser = await User.deleteOne({ _id: id });

      res.status(200).json({ success: true, message: "User deleted successfully" ,deleteUser});
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
   }
};
