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
import Blogs from "./Blog/RenderBlog/RenderBlog"

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/register" element={[<Userregistration/>]} />
        <Route path="/login" element={[<UserLogin/>]} />
        <Route path="/admin/login" element={[<Adminlogin/>]}/>
        <Route path="/admin/book" element={[<AdminBookForm/>]} />
        <Route path="bookupdate/:id" element={[<Updatebookdetails/>]}/>
        <Route path="/" element={[<Navbar/>,<HeroSection/>,<Aboutpage/>,<Course/>,<Youtube/>,< LatestBook/>,<Author/>,<Lift/>,<BuyingBook />,<Expert/>,<Studies/>,<OurVideos/>,<SpeakerCard/>,<Testimonialpart/>,<Footer/>]} />
        <Route path="/about" element={[<Navbar/>,<Hero/>,<AboutSection/>,<Work/>,<Footer/>]} />
        <Route path="/blog" element={[<Navbar/>,<Blog/>,<Footer/>]} />
        <Route path="/book" element={[<Navbar/>,<BookPage />,<Footer/>]} />
        <Route path="/book/:title" element={[<Navbar/>,<BookOrderPage/>,<Footer/>]} />
        <Route path="/contact" element={[<Navbar/>,<Contact/>,<Maparea/>,<Contactform/> ,<Footer/>]} />
        <Route path="/adminpage" element={[<Navbar/>,<Admindatapage/>]}/>
        <Route path="*" element={[<Navbar/>,<HeroSection/>,<Aboutpage/>,<Course/>,<Youtube/>,< LatestBook/>,<Author/>,<Lift/>,<BuyingBook />,<Expert/>,<Studies/>,<OurVideos/>,<SpeakerCard/>,<Testimonialpart/>,<Footer/>]} />
        <Route path="/bookarea" element={<ViewBooks/>}/>
        <Route path="/myspinecoach" element={[<Drmenubar/>,<Drkenhome/>]}/>
        <Route path="/addblog" element={<Addblog/>}/>
         <Route path="/updateblog" element={<Updateblog/>}/>
         <Route path="/renderblog" element={<Blogs/>} />
      </Routes>
   </Router>
  )
}

export default App
