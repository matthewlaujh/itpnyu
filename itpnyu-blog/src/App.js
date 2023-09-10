import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Subheader } from "./components/Subheader";
import { Text } from "./components/Text";
import { ExternalText } from "./components/ExternalText";
import { Quotes } from "./components/Quotes";
import { Images } from "./components/Images";
import { CodeSnippets } from "./components/CodeSnippets";
import { Iframe } from "./components/Iframes";

// General Navigation
import Home from "./views/Home/Home";
import { NavProvider, useNav } from "./context/NavContext";

// Fall 2023
import Fall2023 from "./views/Fall2023/Fall2023";
// Applications
import ITPG_GT_2000_Applications from "./views/Fall2023/ITPG_GT_2000_Applications/ITPG_GT_2000_Applications";
import LabOne_ITPG_GT_2000 from "./views/Fall2023/ITPG_GT_2000_Applications/LabOne";
// Hypercinema
import ITPG_GT_2004_CL_Hypercinema from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/ITPG_GT_2004_CL_Hypercinema";
import LabOne_ITPG_GT_2004 from "./views/Fall2023/ITPG_GT_2004_CL_Hypercinema/LabOne";
// Intro to Comp Media
import ITPG_GT_2233_Intro_to_Comp_Media from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/ITPG_GT_2233_Intro_to_Comp_Media";
import LabOne_ITPG_GT_2233 from "./views/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/LabOne";
//  Intro to Physical Comp
import ITPG_GT_2301_Intro_to_Physical_Comp from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/ITPG_GT_2301_Intro_to_Physical_Comp";
import LabOne_ITPG_GT_2301 from "./views/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne";
// Intro to Fabrication
import ITPG_GT_2637_Intro_to_Fabrication from "./views/Fall2023/ITPG_GT_2637_Intro_to_Fabrication/ITPG_GT_2637_Intro_to_Fabrication";
import LabOne_ITPG_GT_2637 from "./views/Fall2023/ITPG_GT_2637_Intro_to_Fabrication/LabOne";

function App() {
  return (
    <Router>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </Router>
  );
}

function AppContent() {
  const { isNavCollapsed, setNavCollapsed } = useNav();
  const location = useLocation();

  const displayActiveRoute = () => {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "Home";
    if (parts.length === 1 && parts[0] === "about") return "About";

    const displayNames = {
      "fall-2023": "Fall 2023",
      "itpg-gt-2000-applications": "ITPG-GT 2000: Applications",
      "itpg-gt-2004-cl-hypercinema": "ITPG-GT 2004: CL Hypercinema",
      "itpg-gt-2233-intro-to-comp-media": "ITPG-GT 2233: Intro to Comp Media",
      "itpg-gt-2301-intro-to-physical-comp":
        "ITPG-GT 2301: Intro to Physical Comp",
      "itpg-gt-2637-intro-to-fabrication": "ITPG-GT 2637: Intro to Fabrication",
      "lab-one": "Lab One",
    };

    return parts.map((part) => displayNames[part] || part).join(" — ");
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavCollapsed(true);
    } else {
      setNavCollapsed(false);
    }
  }, [location.pathname]);

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
              <div className="about">
                <p>
                  <a href="mailto:matthewlau@nyu.edu">
                    Contact me at matthewlau@nyu.edu.
                  </a>
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
            </ul>
            <ul className="navColumn">
              <li>
                <Link to="/fall-2023">Fall 2023</Link>
                <ul className="subNav">
                  <li>
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
                  </li>
                  <li>
                    <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema">
                      ITPG-GT 2004: CL Hypercinema
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2004-cl-hypercinema/lab-one">
                          Lab One
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
                        <Link to="/fall-2023/itpg-gt-2233-intro-to-comp-media/lab-one">
                          Lab One
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
                        <Link to="/fall-2023/itpg-gt-2301-intro-to-physical-comp/lab-one">
                          Lab One
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                  <li>
                    <Link to="/fall-2023/itpg-gt-2637-intro-to-fabrication">
                      ITPG-GT 2637: Intro to Fabrication
                    </Link>
                    <ul className="labNav">
                      <li>
                        <Link to="/fall-2023/itpg-gt-2637-intro-to-fabrication/lab-one">
                          Lab One
                        </Link>
                      </li>
                      <p>—</p>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}
      </nav>
      <Routes>
        {/* General Navigation */}
        <Route path="/" element={<Home />} />

        {/* Fall 2023 */}
        <Route path="/fall-2023" element={<Fall2023 />} />
        <Route
          path="/fall-2023/itpg-gt-2000-applications"
          element={<ITPG_GT_2000_Applications />}
        />
        <Route
          path="/fall-2023/itpg-gt-2000-applications/lab-one"
          element={<LabOne_ITPG_GT_2000 />}
        />

        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema"
          element={<ITPG_GT_2004_CL_Hypercinema />}
        />
        <Route
          path="/fall-2023/itpg-gt-2004-cl-hypercinema/lab-one"
          element={<LabOne_ITPG_GT_2004 />}
        />

        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media"
          element={<ITPG_GT_2233_Intro_to_Comp_Media />}
        />
        <Route
          path="/fall-2023/itpg-gt-2233-intro-to-comp-media/lab-one"
          element={<LabOne_ITPG_GT_2233 />}
        />

        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp"
          element={<ITPG_GT_2301_Intro_to_Physical_Comp />}
        />
        <Route
          path="/fall-2023/itpg-gt-2301-intro-to-physical-comp/lab-one"
          element={<LabOne_ITPG_GT_2301 />}
        />

        <Route
          path="/fall-2023/itpg-gt-2637-intro-to-fabrication"
          element={<ITPG_GT_2637_Intro_to_Fabrication />}
        />
        <Route
          path="/fall-2023/itpg-gt-2637-intro-to-fabrication/lab-one"
          element={<LabOne_ITPG_GT_2637 />}
        />
      </Routes>
    </div>
  );
}

export default App;
