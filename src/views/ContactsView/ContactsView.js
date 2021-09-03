import Container from "../../components/Container/Container";
import Input  from "../../components/ContactForm/InputForm";
import Filter from "../../components/Filter/Filter";
import PhonebookList from "../../components/PhonebookList/PhonebookList";

function ContactsView() {

    return (
        <Container>
                <h1>Phonebook</h1>
         <Input />
         <Filter />
         <PhonebookList
          title="Contacts"/>
         </Container>
    )
};

export default ContactsView;