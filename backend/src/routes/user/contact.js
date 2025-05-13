import Router  from "express";
import { handleBlogForm, handleContactForm, handleEmailContactForm, handleGetBlogData, handleGetContacts, handleGetEmailContacts } from "../../controller/contact.js";


const router = Router();


router.post("/contact-form",handleContactForm)
router.get("/contact-form",handleGetContacts)
router.post("/email-form",handleEmailContactForm)
router.get("/email-form",handleGetEmailContacts)
router.post("/blog-form",handleBlogForm)
router.get("/blog-form",handleGetBlogData)

export default router