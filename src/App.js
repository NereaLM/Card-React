import './App.css';
import contacts from './contacts';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
      <h1>My Contact</h1>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              img={contact.imgSrc}
              telf={contact.phone}
              email={contact.email}
            />
          );
        }
        )}

    </div>
  );
}

export default App;
