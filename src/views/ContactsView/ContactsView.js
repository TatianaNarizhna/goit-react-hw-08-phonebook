
import Container from "../../components/Container/Container";
import Input  from "../../components/ContactForm/InputForm";
import Filter from "../../components/Filter/Filter";
import PhonebookList from "../../components/PhonebookList/PhonebookList";
import s from "./ContactsView.module.css"

function ContactsView() {

    return (
        <Container>
            <div className={s.Contacts}>
            <h1>Phonebook</h1>
         <Input />
         <Filter />
         <PhonebookList
          title="Contacts"/>
            </div>
         </Container>
    )
};

export default ContactsView;