import {useState} from "react";
import Banner from "./components/Banner";
import Bookshelf from "./components/Bookshelf";
import CustomForm from "./components/Form";

function App() {

    const types = [
        {
            title: 'Estudo',
            primaryColor: 'rgba(146,241,45,0.6)',
            secondColor: 'rgba(146, 241, 45, 0.2)',
        },
        {
            title: 'Programação',
            primaryColor: 'rgba(0, 191, 255, 0.50)',
            secondColor: 'rgba(0, 191, 255, 0.15)',
        },
        {
            title: 'Diversão',
            primaryColor: 'rgba(255, 0, 0, 0.44)',
            secondColor: 'rgba(255, 0, 0, 0.15)',
        },
        {
            title: 'Outro',
            primaryColor: 'rgba(230,241,45,0.6)',
            secondColor: 'rgba(230, 241, 45, 0.27)',
        },
    ]

    const [books, setBooks] = useState([])

    const onSavedBook = (book) => {
        setBooks([...books, book])
    }

  return (
    <div className="App">
        <Banner />
        <CustomForm types={types.map(type => type.title)} onBookSave={book => onSavedBook(book)} />

        {types.map(type => <Bookshelf
            key={type.title}
            title={type.title}
            primaryColor={type.primaryColor}
            secondColor={type.secondColor}
            books={books.filter(book => book.type === type.title)}
        />)}

    </div>
  );
}

export default App;
