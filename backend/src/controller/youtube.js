import { addYoutube,deleteYoutubeVideo,getYoutubeVideos } from "../services/youtube-service.js";


export async function addYoutubeHandler(req, res) {
    
  try {
    const { title, yotubelLink } = req.body;

    console.log(req.body)

    console.log(title,yotubelLink)

    const adminId = req.adminId;
    if (!title || !yotubelLink) {
      return res.status(400).json({ message: "Title and link are required." });
    }

    const id = await addYoutube({ title, yotubelLink, adminId });
    return res.status(201).json({ message: "Video added", id });
  } catch (error) {
    console.error("Add YouTube error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getYoutubeVideosHandler(req, res) {
  try {
    
    const videos = await getYoutubeVideos();
    return res.status(200).json(videos);
  } catch (error) {
    console.error("Get YouTube error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteYoutubeVideoHandler(req, res) {
  try {
    const { youtubeId } = req.params;
    const adminId = req.adminId;
    const success = await deleteYoutubeVideo({ youtubeId,adminId} );

    if (!success) {
      return res.status(404).json({ message: "Video not found" });
    }

    return res.status(200).json({ message: "Video deleted" });
  } catch (error) {
    console.error("Delete YouTube error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}