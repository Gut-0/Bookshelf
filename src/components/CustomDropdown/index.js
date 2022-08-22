import './CustomDropdown.css'

const CustomDropdown = (props) => {
    return (
        <div className='custom-dropdown'>
            <label>{ props.label }</label>
            <select onChange={event => props.onAlterned(event.target.value)} value={ props.value }>
                <option value='' />
                { props.itens.map(item => <option key={ item }>{ item }</option>) }
            </select>
        </div>
    )
}

export default CustomDropdown