import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { StoreProvider } from "./context";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <StoreProvider>
            <BrowserRouter>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <Home
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        )}
                    />
                    <Route
                        path="/login"
                        exact
                        // component={Login}
                        render={(props) => (
                            <Login
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        )}
                    />
                    <Route
                        path="/join"
                        exact
                        render={(props) => (
                            <Join
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    );
};

export default App;
