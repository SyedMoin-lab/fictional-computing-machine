import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId , io} from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {

        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId , receiverId ] }
        });
        //  if the users are new we created a conversation within them
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId , receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });


        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        // SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            // io.to <socket.id>.emit() used to send event  to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Error in sendMessage Controller",error.message)
     res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessages = async (req, res) => {
    try {
        
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        // populate is function provided by mongoose to see the inner content of the msgs

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}