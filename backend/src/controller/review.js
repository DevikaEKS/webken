import { createReview,getReviews } from "../services/review.js";

export async function addReviewHandler(req,res){
    const adminId = req.adminId;
    const { name,content,stars,country,bookId } = req.body;

    if(!adminId){
        res.status(400).json({
            message :"Unauthorized"
        })
    }

    try {
        const response = await createReview({ name,content,stars,country,bookId })
        if(!response){
            res.status(400).json({
                message : "Cannot able to create review",
            })
        }
        res.status(200).json({
            message : "Review added successfully"
        })
    } catch (error) {
        console.error('Create review erro', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export async function getReviewsHandler(req,res) {
    const { bookId } = req.params

    if(!bookId){
         res.status(400).json({
            message :"Need BookId for fetching"
        })
    }
    try {
        const response = await getReviews({ bookId })

        if(!response){
            res.status(400).json({
                message :"No Reviews to fetch"
            })
        }

        res.status(200).json({
            message : "Review Fetched Successfully",
            reviews : response
        })
    } catch (error) {
         console.error("can't able to review:", error);
        res.status(500).json({ message: 'Internal server error' });
    }

    
}

