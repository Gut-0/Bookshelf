import './CustomForm.css'
import TextField from "../TextField";
import CustomDropdown from "../CustomDropdown";
import CustomButton from "../CustomButton";
import { useState } from "react";

const CustomForm = (props) => {

    const [ title, setTitle ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ image, setImage ] = useState('')
    const [ type, setType ] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onBookSave({
            title,
            price,
            image,
            type
        })
        setTitle('')
        setPrice('')
        setImage('')
        setType('')
    }

    return(
        <section className='custom-form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card de livro</h2>
                <TextField
                    label='Titulo'
                    placeholder='Digite o titulo do livro'
                    value={ title }
                    onAlterned={value => setTitle(value)}
                />
                <TextField
                    label='Preço'
                    placeholder='Digite o preço do livro'
                    value={ price }
                    onAlterned={ value => setPrice(value) }
                    type='number'
                />
                <TextField
                    label='Imagem'
                    placeholder='Digite a url da imagem'
                    value={image}
                    onAlterned={ value => setImage(value) }
                />
                <p>
                    *Ou use esse exemplo:
                </p>
                <p>
                    https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575226568.jpg
                </p>
                <CustomDropdown
                    label='Tipo'
                    itens={ props.types }
                    value={ type }
                    onAlterned={ value => setType(value) }
                />
                <CustomButton>
                    Adicionar Livro
                </CustomButton>
            </form>
        </section>
    )
}

export default CustomForm