import './styles.css'
import { MdRestaurantMenu } from 'react-icons/md'

export default function List({ cardapio }) {
    console.log('mwu cardapio', cardapio);
    return (
        <div className="containerMenu">
            {
                cardapio.map(item => {
                    console.log(item.nome)
                    return (
                        <div className="cardapioItem">
                            <div>
                                <MdRestaurantMenu />
                            </div>


                            <label>{item.nome}</label>

                            <span>R$ {item.preco}</span>

                        </div>
                    )
                })
            }
        </div >
    )
}