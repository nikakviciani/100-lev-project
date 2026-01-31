// File: App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AboutUs from "./About_us.jsx";
import MMA from "./MMA.jsx";
import Courses from "./Courses.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

export default function App() {
  const [page, setPage] = useState("home");           // current page
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  // check localStorage login on mount
  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(logged);
  }, []);

  // update body class for MMA mode
  useEffect(() => {
    if (page === "mma") {
      document.body.classList.add("mma-mode");
    } else {
      document.body.classList.remove("mma-mode");
    }
  }, [page]);

  // logout handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setPage("home"); // go to home after logout
  };
  
  // choose component based on current page
  let MainComponent;
  switch (page) {
    case "about": MainComponent = AboutUs; break;
    case "mma": MainComponent = MMA; break;
    case "courses": MainComponent = Courses; break;
    case "register":
      MainComponent = () => <Register setIsLoggedIn={setIsLoggedIn} setPage={setPage} />;
      break;
    case "login":
      MainComponent = () => <Login setIsLoggedIn={setIsLoggedIn} setPage={setPage} />;
      break;
    default:
      MainComponent = () => (
        <div className="content">
          <h1>Welcome to Goal-Oriented Academy (GOA)</h1>
          <p>
            Goal-Oriented Academy (GOA) is a modern educational academy designed to empower students 
            with the skills and knowledge needed to excel in technology and creative industries. 
            Our main focus is programming, where learners can start from the basics and advance to 
            complex software development projects.
          </p>
          <p>
            Goal-Oriented Academy (GOA) არის თანამედროვე სასწავლო აკადემია, რომელიც მიზნად ისახავს სტუდენტების აღზრდას 
            საჭირო უნარებით და ცოდნით, რათა წარმატებულები გახდნენ ტექნოლოგიურ და კრეატიულ ინდუსტრიებში. 
            ჩვენი მთავარი ფოკუსია პროგრამირება, სადაც სტუდენტები იწყებენ საფუძვლებიდან და მიიწევენ რთულ 
            პროგრამული უზრუნველყოფის პროექტებამდე.
          </p>
          <br />
          <img src="https://goa-project-swart.vercel.app/Images/Goal.jpg" alt="" />
          <p>
            In addition to programming, GOA offers a variety of complementary courses, including 
            game development, digital design, 3D modeling, and artificial intelligence. 
            Students gain hands-on experience, work on real projects, and develop both technical 
            expertise and creative problem-solving skills.
          </p>
          <p>
            პროგრამირებასთან ერთად, GOA სთავაზობს სხვადასხვა დამატებით კურსებს, მათ შორის თამაშების განვითარება, 
            ციფრული დიზაინი, 3D მოდელირება და ხელოვნური ინტელექტი. სტუდენტები იღებენ პრაქტიკულ გამოცდილებას, 
            მუშაობენ რეალურ პროექტებზე და ავითარებენ ტექნიკურ ექსპერტიზას და შემოქმედებით პრობლემების გადაჭრის უნარებს.
          </p>
          <br />
          <p>
            Whether you aim to build innovative applications, create games, design immersive 3D worlds, 
            or explore AI solutions, GOA provides the guidance, mentorship, and practical learning 
            environment to help you reach your full potential. 
            Join us today and start your journey toward becoming a skilled, confident, and versatile 
            tech professional.
          </p>
          <p>
            მიუხედავად იმისა, რომ გსურთ ინოვაციური აპლიკაციების შექმნა, თამაშების შემუშავება, 
            ჩასაფრებული 3D სამყაროს დიზაინი, ან AI-ს კვლევა, GOA სთავაზობს ხელმძღვანელობას, მენტორინგს 
            და პრაქტიკულ სასწავლო გარემოს, რათა მიაღწიოთ თქვენს სრულ პოტენციალს. 
            შეუერთდით დღეს და დაიწყეთ თქვენი გზა გახდომისთვის კვალიფიცირებული, თავდაჯერებული და მრავალმხრივი ტექნოლოგიის სპეციალისტი.
          </p>
        </div>
      );
  }

  return (
    <>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        setPage={setPage} 
        handleLogout={handleLogout} 
      />
      <main className="content">
        <MainComponent />
      </main>
      <Footer />
    </>
  );
}
