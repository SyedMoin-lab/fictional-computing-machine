import User from "../models/user.model.js";

export const getUsersForSidebar = async (req , res) => {
    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password"); // if you don't want to see yourself in chat like as 'you' in whstpp

        // if want to do so othen const filteredUsers = await User.find();

        res.status(200).json(filteredUsers);



    } catch (error) {
        console.error("Error in getUserForSidebar", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}