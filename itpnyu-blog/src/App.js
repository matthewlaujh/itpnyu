import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom"

// General Navigation
import Home from "./views/Home/Home"
import { NavProvider, useNav } from "./context/NavContext"

// Fall 2023
import Fall2023 from "./views/Fall2023/Fall2023"
// Applications
// import ITPG_GT_2000_Applications from "./views/Fall2023/ITPG_GT_2000_Applications/ITPG_GT_2000_Applications";
// import LabOne_ITPG_GT_2000 from "./views/Fall2023/ITPG_GT_2000_Applications/LabOne";
// Communications Lab Hypercinema
import ItpgGt2004CourseOverview from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/CourseOverview"
import ItpgGt2004Week1 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week1"
import ItpgGt2004Week2 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week2"
import ItpgGt2004Week3 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week3"
import ItpgGt2004Week4 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week4"
import ItpgGt2004Week5 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week5"
import ItpgGt2004Week6 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week6"
import ItpgGt2004Week7 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week7"
import ItpgGt2004Week8 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week8"
import ItpgGt2004Week9 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week9"
import ItpgGt2004Week10 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week10"
import ItpgGt2004Week11 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week11"
import ItpgGt2004Week12 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week12"
import ItpgGt2004Week13 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week13"
import ItpgGt2004Week14 from "./views/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week14"
// Intro to Computational Media
import ItpgGt2233CourseOverview from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/CourseOverview"
import ItpgGt2233Week1 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week1"
import ItpgGt2233Week2 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week2"
import ItpgGt2233Week3 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week3"
import ItpgGt2233Week4 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week4"
import ItpgGt2233Week5 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week5"
import ItpgGt2233Week6 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week6"
import ItpgGt2233Week7 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week7"
import ItpgGt2233Week8 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week8"
import ItpgGt2233Week9 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week9"
import ItpgGt2233Week10 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week10"
import ItpgGt2233Week11 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week11"
import ItpgGt2233Week12 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week12"
import ItpgGt2233Week13 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week13"
import ItpgGt2233Week14 from "./views/Fall2023/ItpgGt2233IntroToComputationalMedia/Week14"
//  Intro to Physical Computing
import ItpgGt2301CourseOverview from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/CourseOverview"
import ItpgGt2301Week1 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week1"
import ItpgGt2301Week2 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week2"
import ItpgGt2301Week3 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week3"
import ItpgGt2301Week4 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week4"
import ItpgGt2301Week5 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week5"
import ItpgGt2301Week6 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week6"
import ItpgGt2301Week7 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week7"
import ItpgGt2301Week8 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week8"
import ItpgGt2301Week9 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week9"
import ItpgGt2301Week10 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week10"
import ItpgGt2301Week11 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week11"
import ItpgGt2301Week12 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week12"
import ItpgGt2301Week13 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week13"
import ItpgGt2301Week14 from "./views/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week14"

function App() {
  return (
    <Router>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </Router>
  )
}

function AppContent() {
  const { isNavCollapsed, setNavCollapsed } = useNav()
  const location = useLocation()

  const displayActiveRoute = () => {
    const parts = location.pathname.split("/").filter(Boolean)
    const academicSemester = {
      Fall2023: "Fall 2023",
    }
    const courseNames = {
      ItpgGt2004CommunicationsLabHypercinema:
        "ITPG GT 2004 Communications Lab Hypercinema",
      ItpgGt2233IntroToComputationalMedia:
        "ITPG GT 2233 Intro to Computational Media",
      ItpgGt2301IntroToPhysicalComputing:
        "ITPG GT 2301 Intro to Physical Computing",
    }
    const blogWeek = {
      CourseOverview: "Course Overview",
      Week1: "Week 1",
      Week2: "Week 2",
      Week3: "Week 3",
      Week4: "Week 4",
      Week5: "Week 5",
      Week6: "Week 6",
      Week7: "Week 7",
      Week8: "Week 8",
      Week9: "Week 9",
      Week10: "Week 10",
      Week11: "Week 11",
      Week12: "Week 12",
      Week13: "Week 13",
      Week14: "Week 14",
    }
    let displayPath = parts
      .map((part) => {
        if (academicSemester[part]) return academicSemester[part]
        if (courseNames[part]) return courseNames[part]
        if (blogWeek[part]) return blogWeek[part]
        return part.charAt(0).toUpperCase() + part.slice(1) // Capitalize first letter of other paths
      })
      .join(" / ")
    return displayPath || "Home"
  }

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavCollapsed(true)
    } else {
      setNavCollapsed(false)
    }
  }, [location.pathname])

  return (
    <div>
      <nav className={`nav ${isNavCollapsed ? "collapsed" : ""}`}>
        {isNavCollapsed ? (
          <>
            <div className="collapsedNavTextMenu">
              <Link to="/">Menu</Link>
            </div>
            <div className="collapsedNavTextRoute">
              <span className="displayActiveRoute">{displayActiveRoute()}</span>
            </div>
          </>
        ) : (
          <>
            <ul className="navColumn">
              <li>
                <Link to="/">Home</Link>
              </li>
              <p>—</p>
            </ul>
            <ul className="navColumn">
              <li>
                <Link to="/fall-2023">Fall 2023</Link>
                <ul className="subNav">
                  {/* <li>
                    <Link to="/fall-2023/itpg-gt-2000-applications">
                      ITPG-GT 2000: Applications
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2000-applications/lab-one">
                          Lab One
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/CourseOverview">
                      ITPG-GT 2004: Communications Lab Hypercinema
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week1">
                          Week 1
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week2">
                          Week 2
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week3">
                          Week 3
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week4">
                          Week 4
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week5">
                          Week 5
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week6">
                          Week 6
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week7">
                          Week 7
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week8">
                          Week 8
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week9">
                          Week 9
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week10">
                          Week 10
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week11">
                          Week 11
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week12">
                          Week 12
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week13">
                          Week 13
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week14">
                          Week 14
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/CourseOverview">
                      ITPG-GT 2233: Intro to Computational Media
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week1">
                          Week 1
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week2">
                          Week 2
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week3">
                          Week 3
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week4">
                          Week 4
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week5">
                          Week 5
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week6">
                          Week 6
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week7">
                          Week 7
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week8">
                          Week 8
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week9">
                          Week 9
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week10">
                          Week 10
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week11">
                          Week 11
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week12">
                          Week 12
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week13">
                          Week 13
                        </Link>
                      </li>
                      <li>
                        <Link to="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week14">
                          Week 14
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Fall2023/ItpgGt2301IntroToPhysicalComputing/CourseOverview">
                      ITPG-GT 2301: Intro to Physical Computing
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week1">
                          Week 1
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week2">
                          Week 2
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week3">
                          Week 3
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week4">
                          Week 4
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week5">
                          Week 5
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week6">
                          Week 6
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week7">
                          Week 7
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week8">
                          Week 8
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week9">
                          Week 9
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week10">
                          Week 10
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week11">
                          Week 11
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week12">
                          Week 12
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week13">
                          Week 13
                        </Link>
                      </li>
                      <li>
                        <Link to="Fall2023/ItpgGt2301IntroToPhysicalComputing/Week14">
                          Week 14
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="aboutColumn-mobile">
              <div className="about">
                <p>
                  About:<br></br>
                  <br></br>Blog is currently functional but I haven't had the
                  opportunity to style the components yet. I will take some time
                  to work out the design and aesthetics over the next few weeks.
                  Please bear with it for now, I promise it'll look better with
                  each week, Thank you!
                  <br></br>
                  <br></br>
                  Portfolio:{" "}
                  <a href="https://matthewlaujh.com">matthewlaujh.com</a>
                  <br></br>
                  <br></br>
                  Contact me at{" "}
                  <a href="mailto:matthewlau@nyu.edu">matthewlau@nyu.edu.</a>
                  <br></br>
                  <br></br>
                  Documenting work completed as part of the MPS Interactive
                  Telecommunications Program at NYU.
                  <br></br>
                  <br></br>This blog is designed and built from scratch using
                  React, as a way for me to learn React and push my front-end
                  capabilities. This blog is being co created with Generative AI
                  assistance (ChatGPT + GitHub Copilot) and will be consistently
                  updated throughout my time at NYU ITP.
                  <br></br>
                  <br></br>The text is output in typeface Austin News Deck by
                  Commercial Type (Paul Barnes), New York City.
                  <br></br>
                  <br></br>© 2023 Lau Jun Hui Matthew or source as noted.
                </p>
              </div>
            </div>
          </>
        )}
      </nav>
      <Routes>
        {/* General Navigation */}
        <Route path="/" element={<Home />} />
        {/* Fall 2023 */}
        <Route path="/fall-2023" element={<Fall2023 />} />
        {/* <Route
          path="/fall-2023/itpg-gt-2000-applications"
          element={<ITPG_GT_2000_Applications />}
        />
        <Route
          path="/fall-2023/itpg-gt-2000-applications/lab-one"
          element={<LabOne_ITPG_GT_2000 />}
        /> */}
        {/* Communications Lab Hypercinema */}
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/CourseOverview"
          element={<ItpgGt2004CourseOverview />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week1"
          element={<ItpgGt2004Week1 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week2"
          element={<ItpgGt2004Week2 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week3"
          element={<ItpgGt2004Week3 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week4"
          element={<ItpgGt2004Week4 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week5"
          element={<ItpgGt2004Week5 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week6"
          element={<ItpgGt2004Week6 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week7"
          element={<ItpgGt2004Week7 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week8"
          element={<ItpgGt2004Week8 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week9"
          element={<ItpgGt2004Week9 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week10"
          element={<ItpgGt2004Week10 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week11"
          element={<ItpgGt2004Week11 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week12"
          element={<ItpgGt2004Week12 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week13"
          element={<ItpgGt2004Week13 />}
        />
        <Route
          path="/Fall2023/ItpgGt2004CommunicationsLabHypercinema/Week14"
          element={<ItpgGt2004Week14 />}
        />
        {/* Intro to Computational Media */}
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/CourseOverview"
          element={<ItpgGt2233CourseOverview />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week1"
          element={<ItpgGt2233Week1 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week2"
          element={<ItpgGt2233Week2 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week3"
          element={<ItpgGt2233Week3 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week4"
          element={<ItpgGt2233Week4 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week5"
          element={<ItpgGt2233Week5 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week6"
          element={<ItpgGt2233Week6 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week7"
          element={<ItpgGt2233Week7 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week8"
          element={<ItpgGt2233Week8 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week9"
          element={<ItpgGt2233Week9 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week10"
          element={<ItpgGt2233Week10 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week11"
          element={<ItpgGt2233Week11 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week12"
          element={<ItpgGt2233Week12 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week13"
          element={<ItpgGt2233Week13 />}
        />
        <Route
          path="/Fall2023/ItpgGt2233IntroToComputationalMedia/Week14"
          element={<ItpgGt2233Week14 />}
        />
        {/* Intro to Physical Computing */}
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/CourseOverview"
          element={<ItpgGt2301CourseOverview />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week1"
          element={<ItpgGt2301Week1 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week2"
          element={<ItpgGt2301Week2 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week3"
          element={<ItpgGt2301Week3 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week4"
          element={<ItpgGt2301Week4 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week5"
          element={<ItpgGt2301Week5 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week6"
          element={<ItpgGt2301Week6 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week7"
          element={<ItpgGt2301Week7 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week8"
          element={<ItpgGt2301Week8 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week9"
          element={<ItpgGt2301Week9 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week10"
          element={<ItpgGt2301Week10 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week11"
          element={<ItpgGt2301Week11 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week12"
          element={<ItpgGt2301Week12 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week13"
          element={<ItpgGt2301Week13 />}
        />
        <Route
          path="/Fall2023/ItpgGt2301IntroToPhysicalComputing/Week14"
          element={<ItpgGt2301Week14 />}
        />
      </Routes>
    </div>
  )
}

export default App
