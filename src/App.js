import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

const HomePageView = lazy(() => import("./views/HomePageView/HomePageView" /* webpackChunkName: 'home-page-view' */ ));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView" /* webpackChunkName: 'register-view' */));
const LoginView = lazy(() => import("./views/LoginView/LoginView" /* webpackChunkName: 'login-view' */));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView" /* webpackChunkName: 'contacts-view' */));


  function App() {
    const dispatch = useDispatch();
    const isLoadingCurrentUser = useSelector(authSelectors.getIsLoadingCurrentUser);

    useEffect(() => {
      dispatch(authOperations.fetchCurrentUser())
    }, [dispatch]);

    return (
      !isLoadingCurrentUser && (
        <Container>
        <AppBar />

         <Suspense fallback={<h1>Loading...</h1>}>

           <Switch>
            <PublicRoute path="/" exact>
              <HomePageView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" exact>
              <ContactsView />
            </PrivateRoute>

          </Switch>
         </Suspense>

        </Container>
      )
    );
}


export default App;


