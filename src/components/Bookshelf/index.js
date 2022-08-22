import './Bookshelf.css'
import Book from "../Book";

const Bookshelf = (props) => {
    return (
        (props.books.length > 0) &&
            <section
                className={'bookshelf'}
                style={{ backgroundColor: props.secondColor }}
            >
                <h3 style={{ borderColor: props.primaryColor }}>{ props.title }</h3>
                <div className='books'>
                    {props.books.map(book =>
                        <Book
                            key={ book.title }
                            background={ props.primaryColor }
                            title={ book.title }
                            price={ 'R$ ' + book.price }
                            image={ book.image }
                        />)}
                </div>
            </section>
    )
}

export default Bookshelf
