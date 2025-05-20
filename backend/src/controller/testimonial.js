import { getTestimonials,addTestimonial } from "../services/testimonial.js";



export  async function addTestimonialHandler(req,res){
    
    const { patient_name,content } = req.body;
    const adminId = req.adminId;

    try {
        const result = await addTestimonial({ adminId,patient_name,content})

        if(!result){
            return res.status(400).json({ message: 'Cannot able to add Testimonials' });
        }
        res.status(200).json({
        message : "Testimonial Added Successfully",
        });
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getTestimonialHandler(req,res){
    try {
        const response = await getTestimonials();

        if(response.affectedRows === 0){
            res.status(201).json({
                message : "There is no testimonial "
            })
        }
        res.status(200).json({
            message : "Fetched Testimonial",
            testimonial : response[0]
        })
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}