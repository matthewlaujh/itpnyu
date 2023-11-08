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
// Hypercinema
import ITPG_GT_2004_CL_Hypercinema from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/ITPG_GT_2004_CL_Hypercinema"
import WeekOne_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekOne"
import WeekTwo_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo"
import WeekThree_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekThree"
import WeekFour_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekFour"
import WeekFive_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekFive"
import WeekSix_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekSix"
import WeekSeven_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekSeven"
// import WeekSix_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekSix"
// Intro to Comp Media
import ITPG_GT_2233_Intro_to_Comp_Media from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/ITPG_GT_2233_Intro_to_Comp_Media"
import WeekOne_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekOne"
import WeekTwo_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekTwo"
import WeekThree_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekThree"
import WeekFour_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekFour"
import WeekFive_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekFive"
import WeekSix_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekSix"
import WeekSeven_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekSeven"
import WeekEight_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/WeekEight"
//  Intro to Physical Comp
import ITPG_GT_2301_Intro_to_Physical_Comp from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/ITPG_GT_2301_Intro_to_Physical_Comp"
import WeekOne_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekOne"
import WeekTwo_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekTwo"
import WeekThree_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekThree"
import WeekFour_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekFour"
import WeekFive_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekFive"
import WeekSix_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekSix"
import WeekSeven_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekSeven"
import WeekEight_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/WeekEight"

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
    if (parts.length === 0) return "Home"
    if (parts.length === 1 && parts[0] === "about") return "About"

    const displayNames = {
      "fall-2023": "Fall 2023",
      "itpg-gt-2000-applications": "ITPG-GT 2000: Applications",
      "itpg-gt-2004-cl-hypercinema": "ITPG-GT 2004: CL Hypercinema",
      "itpg-gt-2233-intro-to-comp-media": "ITPG-GT 2233: Intro to Comp Media",
      "itpg-gt-2301-intro-to-physical-comp":
        "ITPG-GT 2301: Intro to Physical Comp",
      "itpg-gt-2637-intro-to-fabrication": "ITPG-GT 2637: Intro to Fabrication",
      WeekOne: "Week One",
      WeekTwo: "Week Two",
      WeekThree: "Week Three",
      WeekFour: "Week Four",
      WeekFive: "Week Five",
      WeekSix: "Week Six",
      WeekSeven: "Week Seven",
      WeekEight: "Week Eight",
    }

    return parts.map((part) => displayNames[part] || part).join(" — ")
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
                    <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema">
                      ITPG-GT 2004: CL Hypercinema
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekOne">
                          Week One
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekTwo">
                          Week Two
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekThree">
                          Week Three
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekFour">
                          Week Four
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekFive">
                          Week Five
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekSix">
                          Week Six
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekSeven">
                          Week Seven
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                  <li>
                    <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media">
                      ITPG-GT 2233: Intro to Comp Media
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekOne">
                          Week One
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekTwo">
                          Week Two
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekThree">
                          Week Three
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekFour">
                          Week Four
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekFive">
                          Week Five
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekSix">
                          Week Six
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekSeven">
                          Week Seven
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekEight">
                          Week Eight
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                  <li>
                    <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp">
                      ITPG-GT 2301: Intro to Physical Comp
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekOne">
                          Week One
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekTwo">
                          Week Two
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekThree">
                          Week Three
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekFour">
                          Week Four
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekFive">
                          Week Five
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekSix">
                          Week Six
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekSeven">
                          Week Seven
                        </Link>
                      </li>
                      <li>
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekEight">
                          Week Eight
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
                  About: <br></br>— <br></br>Blog is currently functional but I
                  haven't had the opportunity to style the components yet. I
                  will take some time to work out the design and aesthetics over
                  the next few weeks. Please bear with it for now, I promise
                  it'll look better with each week, Thank you!
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
                  updated throughout the semester.
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

        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema"
          element={<ITPG_GT_2004_CL_Hypercinema />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekOne"
          element={<WeekOne_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekTwo"
          element={<WeekTwo_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekThree"
          element={<WeekThree_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekFour"
          element={<WeekFour_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekFive"
          element={<WeekFive_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekSix"
          element={<WeekSix_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/WeekSeven"
          element={<WeekSeven_ITPG_GT_2004 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media"
          element={<ITPG_GT_2233_Intro_to_Comp_Media />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekOne"
          element={<WeekOne_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekTwo"
          element={<WeekTwo_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekThree"
          element={<WeekThree_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekFour"
          element={<WeekFour_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekFive"
          element={<WeekFive_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekSix"
          element={<WeekSix_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekSeven"
          element={<WeekSeven_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/WeekEight"
          element={<WeekEight_ITPG_GT_2233 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp"
          element={<ITPG_GT_2301_Intro_to_Physical_Comp />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekOne"
          element={<WeekOne_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekTwo"
          element={<WeekTwo_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekThree"
          element={<WeekThree_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekFour"
          element={<WeekFour_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekFive"
          element={<WeekFive_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekSix"
          element={<WeekSix_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekSeven"
          element={<WeekSeven_ITPG_GT_2301 />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/WeekEight"
          element={<WeekEight_ITPG_GT_2301 />}
        />
      </Routes>
    </div>
  )
}

export default App
