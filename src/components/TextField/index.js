import './TextField.css'

const TextField = (props) => {

    const onTyping = (event) => {
        props.onAlterned( event.target.value )
    }


    return(
        <div className='text-field'>
            <label>{ props.label }</label>
            <input value={ props.value } onChange={onTyping} placeholder={ props.placeholder } type={ props.type } required={ true }/>
        </div>
    )
}

export default TextField