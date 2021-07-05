import React from 'react';
import {Route, Switch} from "react-router-dom";
import {aboutUsPage, contactPage, homePage, productsPage, teamPage} from "../Utils/Constants";
import Home from "./HomeWrapper/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import ScrollToTop from "../Utils/ScrollToTop/ScrollToTop";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path={`/`} exact render={() => <div><ScrollToTop/><Home/></div>}/>
                <Route path={`/${homePage}`} exact render={() => <div><ScrollToTop/><Home/></div>}/>
                <Route path={`/${productsPage}`} exact render={() => <div><ScrollToTop/><Products/></div>}/>
                <Route path={`/${aboutUsPage}`} exact render={() => <div><ScrollToTop/><About/></div>}/>
                <Route path={`/${teamPage}`} exact render={() =>
                    <div><ScrollToTop/><Team/></div>}/>
                <Route path={`/${contactPage}`} exact render={() => <div><ScrollToTop/><Contact/></div>}/>
            </Switch>
        </div>
    );
};

export default Main;