import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./Landingpage/Navbar/Navbar"
import HeroSection from "./Landingpage/HeroSection/HeroSection"
import Footer from "./LandingPage/Footer/Footer"
import Course from "./LandingPage/Course/Course"
import Youtube from "./LandingPage/Youtube/Youtube"
import LatestBook from "./LandingPage/LatestBook/LatestBook"
import Author from "./LandingPage/Author/Author"
import Lift from "./LandingPage/Lift/Lift"
import BuyingBook from "./LandingPage/BuyingBook/BuyingBook"
import Expert from "./LandingPage/Expert/Expert"
import Studies from "./LandingPage/Studies/Studies"
import OurVideos from "./LandingPage/OurVideos/OurVideos"
import SpeakerCard from "./LandingPage/SpeakerCard/SpeakerCard"
import Aboutpage from "./LandingPage/AboutPage/AboutPage"
import AboutSection from "./About/AboutSection/AboutSection"
import Blog from "./Blog/BlogMain/Blog"
import Hero from "./About/Hero/Hero"
import Work from "./About/Work/Work"
import BookPage from "./Book/BookPage/BookPage"
import Contact from "./Contact/Contact"
import Contactform from "./Contactform/Contactform"
import Maparea from "./Maparea/Maparea"
import Adminlogin from "./Admin/AdminLogin"
import BookOrderPage from "./Book/BookOrderPage/BookOrderPage"
import Userregistration from "./Register/UserRegister"
import UserLogin from "./Login/UserLoginPage"
import AdminBookForm from "./Admin/AdminBookForm/AdminBookForm"
import Admindatapage from "./Admin/Admindatapage/Admindatapage"
import ViewBooks from "./Admin/ViewBooks/ViewBooks"
import Updatebookdetails from "./Admin/Bookdetails/Updatebookdetails"
import Drkenhome from "./Drken/Drkenhomepage/Drkenhome"
import "bootstrap/dist/css/bootstrap.css"
import Drmenubar from "./Drken/Drmenubar/Drmenubar"
import Testimonialpart from "./Testimonialpart/Testimonialpart"
import Addblog from "./Blog/Addblog/Addblog"
import Updateblog from "./Blog/Updateblog/Updateblog"
import Blogs from "./Blog/RenderBlog/RenderBlogs"
import ProtectedRoute from "./ProtectedRoute"
import UpdateBlogPage from "./Blog/RenderBlog/UpdateBlog"
import AddYoutubeData from "./Admin/Youtube/AddYoutube"
import BlogPreview from "./Blog/BlogPreview/BlogPreview"
import Reviews from "./Admin/Review/Testimonial/Testimonial"
import Mainbanner from "./LandingPage/Banner/Banner"
import Adminblogview from "./Admin/Adminblogview/Adminblogview"
import Adminblogpreview from "./Blog/Addblog/Adminblogpreview"
import Checkoutpage from "./Checkout/Checkoutpage"
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/register" element={[<Userregistration/>]} />
        <Route path="/login" element={[<UserLogin/>]} /> 
        <Route path="/" element={[<Navbar/>,<Mainbanner/>,<HeroSection/>,<Aboutpage/>,<Course/>,<Youtube/>,< LatestBook/>,<Author/>,<Lift/>,<BuyingBook />,<Expert/>,<Studies/>,<OurVideos/>,<SpeakerCard/>,<Footer/>]} />
        <Route path="/about" element={[<Navbar/>,<Hero/>,<AboutSection/>,<Work/>,<Footer/>]} />
        <Route path="/blog" element={[<Navbar/>,<Blog/>,<Footer/>]} />
        <Route path="/blog/:blogId" element={[<Navbar/>,<BlogPreview/>,<Footer/>]} />
        <Route path="/book" element={[<Navbar/>,<BookPage />,<Footer/>]} />
        <Route path="/book/:id" element={[<Navbar/>,<BookOrderPage/>,<Footer/>]} />
        <Route path="/contact" element={[<Navbar/>,<Contact/>,<Maparea/>,<Contactform/> ,<Footer/>]} />
        <Route path="*" element={[<Navbar/>,<HeroSection/>,<Aboutpage/>,<Course/>,<Youtube/>,< LatestBook/>,<Author/>,<Lift/>,<BuyingBook />,<Expert/>,<Studies/>,<OurVideos/>,<SpeakerCard/>,<Footer/>]} />
        <Route path="/bookarea" element={<ViewBooks/>}/>
        <Route path="/myspinecoach" element={[<Drmenubar/>,<Drkenhome/>]}/>
        <Route path="/checkout" element={[<Navbar/>,<Checkoutpage/>,<Footer/>]}/>

        <Route path="/addblog" element={[<ProtectedRoute><Addblog/></ProtectedRoute>]}/>
        <Route path="/admin/login" element={[<Adminlogin/>]}/>
        <Route path="/adminpage" element={[<Navbar/>,<ProtectedRoute><Admindatapage/></ProtectedRoute>]}/>
        <Route path="/admin/book" element={[<ProtectedRoute><AdminBookForm/></ProtectedRoute>]} />
        <Route path="/updateblog" element={[<ProtectedRoute><Updateblog/></ProtectedRoute>]}/>
        <Route path="/renderblog" element={[<ProtectedRoute><Blogs/></ProtectedRoute>]} />
        <Route path="/bookupdate/:blogId" element={[<ProtectedRoute><Updatebookdetails/></ProtectedRoute>]}/>
        <Route path="/admin/blog/:blogId" element={[<Navbar/>,<Adminblogpreview/>,<Footer/>]} />
        <Route path="/renderblog/:blogId" element={[<ProtectedRoute><UpdateBlogPage/></ProtectedRoute>]} />
        <Route path="/admin/youtube" element={[<ProtectedRoute><AddYoutubeData/></ProtectedRoute>]} />
        <Route path="/admin/review" element={[<ProtectedRoute><Reviews/></ProtectedRoute>]} />
        <Route path="/admin/blogview" element={[<ProtectedRoute>,<Adminblogview/>,</ProtectedRoute>]}/>
      </Routes>
   </Router>
  )
}

export default App
