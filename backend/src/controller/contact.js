import { isValidEmail } from "../utils/validator.js";
import { saveContactMessage,getContactMessages } from "../services/contact-service.js"
import { getEmailMessages, saveEmailMessage } from "../services/email-service.js";
import { getBlogData, saveBlogData } from "../services/blog-service.js";
import { sendThankYouEmail } from "../utils/sendEmail.js";

export async function handleContactForm(req,res){
    const { full_name,email,message } = req.body; 
    

    if (!full_name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, error: "Invalid email format." });
    }

    if (message.length < 10) {
        return res.status(400).json({ success: false, error: "Message should be at least 10 characters long." });
    }

    try {
        await saveContactMessage(full_name, email, message);
        await sendThankYouEmail(email,full_name)
        return res.status(200).json({ success: true, message: "Form submitted successfully." });
    } catch (err) {
        console.error("Contact form error:", err);
        return res.status(500).json({ success: false, error: "Internal server error." });
    }
}




export async function handleGetContacts(req, res) {
    try {
        const messages = await getContactMessages();
        res.status(200).json({ success: true, data: messages });
    } catch (err) {
        console.error("Get contacts error:", err);
        res.status(500).json({ success: false, error: "Unable to fetch messages." });
    }
}


export async function handleEmailContactForm(req,res){
    const { first_name,last_name,email } = req.body;

    if (!first_name || !email || !last_name) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, error: "Invalid email format." });
    }

    

    try {
        await saveEmailMessage(first_name,last_name,email);
        res.status(200).json({ success: true, message: "Form submitted successfully." });
    } catch (err) {
        console.error("Email form error:", err);
        res.status(500).json({ success: false, error: "Internal server error." });
    }
}

export async function handleGetEmailContacts(req, res) {
    try {
        const messages = await getEmailMessages();
        res.status(200).json({ success: true, data: messages });
    } catch (err) {
        console.error("Get email contacts error:", err);
        res.status(500).json({ success: false, error: "Unable to fetch messages." });
    }
}


export async function handleBlogForm(req,res){
     const { first_name,email,website,message } = req.body;

    if (!first_name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, error: "Invalid email format." });
    }

    if (message.length < 10) {
        return res.status(400).json({ success: false, error: "Message should be at least 10 characters long." });
    }

    try {
        await saveBlogData(first_name, email, message, website || null);
        res.status(200).json({ success: true, message: "Form submitted successfully." });
    } catch (err) {
        console.error("Blog form error:", err);
        res.status(500).json({ success: false, error: "Internal server error." });
    }
}

export async function handleGetBlogData(req, res) {
    try {
        const messages = await getBlogData();
        res.status(200).json({ success: true, data: messages });
    } catch (err) {
        console.error("Blog error:", err);
        res.status(500).json({ success: false, error: "Unable to fetch messages." });
    }
}


