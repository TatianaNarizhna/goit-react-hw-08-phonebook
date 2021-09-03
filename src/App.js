import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePageView from "./views/HomePageView/HomePageView";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import ContactsView from "./views/ContactsView/ContactsView";
// import Input from "./components/ContactForm/InputForm";
// import Filter from "./components/Filter/Filter";
// import PhonebookList  from "./components/PhonebookList/PhonebookList";


  function App() {

    return (
      <Container>
        <AppBar />

        <Switch>
        <Route path="/" exact component={HomePageView}/>
        <Route path="/register" component={RegisterView}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/contacts " component={ContactsView} />
        </Switch>

        {/* <h1>Phonebook</h1>
        <Input />
        <Filter />
        <PhonebookList
          title="Contacts"
        /> */}
      </Container>
    );
}


export default App;


