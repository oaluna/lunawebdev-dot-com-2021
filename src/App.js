import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Homepage from "./components/Homepage";
import CaseHistory from "./components/CaseHistory";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactPage from "./components/contact/ContactPage";
import Marketing from "./components/Marketing";
import SocialMediaManagement from "./components/SocialMediaManagement";
import DigitalCreations from "./components/DigitalCreations";
import ServicesPage from "./components/services/ServicesPage";
import SkillsPage from "./components/Brands/SkillsPage";
import Footer from "./components/footer/Footer";
import HeadBar from "./components/headbar/HeadBar";
import AboutMePage from "./components/AboutMePage";
import Chat from "./components/Chat/Chat";
import BlogPage from "./components/blogpage/BlogPage";
import ErrorPage from "./components/404/404";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };

    this.mainPageRef = React.createRef();
  }

  componentDidMount() {
    this.mainPageRef.current.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    this.mainPageRef.current.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    if (this.mainPageRef.current.scrollTop > 20) {
      this.setState({
        isTop: false
      });
    } else {
      this.setState({
        isTop: true
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.mainPageRef.current.scrollTop = 0;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mainPage" ref={this.mainPageRef}>
          <HeadBar isTop={this.state.isTop} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Services" component={ServicesPage} />
            <Route path="/Skills" component={SkillsPage} />
            <Route path="/Marketing" component={Marketing} />
            <Route path="/Marketing" component={Marketing} />
            <Route path="/DigitalCreations" component={DigitalCreations} />
            <Route
              path="/SocialMediaManagement"
              component={SocialMediaManagement}
            />
            <Route path="/Contacts" component={ContactPage} />
            <Route path="/Projects" component={CaseHistory} />
            <Route path="/ProjectPage/:Project" component={ProjectPage} />
            <Route path="/AboutMe" component={AboutMePage} />
            <Route path="/BlogPage" component={BlogPage} />
            <Route path="*" component={ErrorPage} />
         
          </Switch>
          <Chat />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
