import './Book.css'

const Book = (props) => {
    return(<div className='book'>
        <div className='header' style={{ backgroundColor: props.background }}>
            <img src={ props.image } alt={ props.title + 'book' } />
        </div>
        <div className='footer'>
            <h4>{ props.title }</h4>
            <h5>{ props.price }</h5>
        </div>
    </div>)
}

export default Book