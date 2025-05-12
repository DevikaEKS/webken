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
import Testimonial from "./LandingPage/Testimonial/Testimonial"
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

function App() {
 

  return (
   <Router>
      <Routes>
        <Route path="/admin/login" element={[<Adminlogin/>]}/>
        <Route path="/" element={[<Navbar/>,<HeroSection/>,<Aboutpage/>,<Course/>,<Youtube/>,< LatestBook/>,<Author/>,<Lift/>,<BuyingBook />,<Expert/>,<Studies/>,<OurVideos/>,<SpeakerCard/>,<Testimonial/>,<Footer/>]} />
        <Route path="/about" element={[<Navbar/>,<Hero/>,<AboutSection/>,<Work/>,<Footer/>]} />
        <Route path="/blog" element={[<Navbar/>,<Blog/>,<Footer/>]} />
        <Route path="/book" element={[<Navbar/>,<BookPage />,<Footer/>]} />
        <Route path="/contact" element={[<Navbar/>,<Contact/>,<Maparea/>,<Contactform/> ,<Footer/>]} />
      </Routes>
   </Router>
  )
}

export default App
