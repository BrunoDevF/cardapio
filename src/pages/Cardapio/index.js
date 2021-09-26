import { useState, useEffect } from 'react'
import './styles.css';
import Modal from 'react-modal';
import List from '../../components/List'
import {AiOutlineSearch} from 'react-icons/ai'


export default function Cardapio() {
    const customStyle = {
        content: {
            zIndex: 10,
            background: '#fff',
            top: "50%",
            left: "61%",
            right: "auto",
            bottom: "auto",
            width: "auto",
            maxHeight: "90vh",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: 'none'
        },
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            zIndex: 10,
        },
    };
    const [nomeIngrediente, setNomeIngrediente] = useState('');
    const [precoIngrediente, setPrecoIngrediente] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [ingredientes, setIngredientes] = useState([]);

    const [search, setSearch] = useState('');
    const [cardapioSearch, setCardapioSearch] = useState([]);
    const [modalAdd, setModalAdd] = useState(false)
    const [cardapio, setCardapio] = useState([
        {
            nome: 'Calzone',
            preco: 5,
            ingredientes: [
                { nome: 'pao' },
                { nome: 'frango' },
                { nome: 'catupiry' }
            ]
        },
        {
            nome: 'Calzone2',
            preco: 5,
            ingredientes: [
                { id: 165165, nome: 'pao' },
                { id: 255616, nome: 'frango' },
                { id: 151688, nome: 'catupiry' }
            ]
        },
    ])

    const addIngrediente = () => {
        let idRandom = Math.floor(Math.random() * 100 + 1)
        let object = { id: idRandom, nome: ingrediente }
        setIngredientes([...ingredientes, object]);
    }
    const removeItem = (id) => {
        let ingrediente = ingredientes.findIndex(item => item.id === id);
        let newArray = ingredientes.splice(ingrediente, 1);
        console.log('meu arra', ingredientes);
        setIngredientes(ingredientes)
    }
    const resetStates = () => {
        setNomeIngrediente('');
        setPrecoIngrediente('');
        setIngrediente('');
        setIngredientes([]);
    }

    const registerNewIngrediente = () => {
        let newObject = {
            nome: nomeIngrediente,
            preco: precoIngrediente,
            ingredientes: ingredientes
        }
        let notFound = cardapio.filter(item => item.nome == newObject.nome)
        if (notFound.length == 0) {
            setCardapio([...cardapio, newObject])
            localStorage.setItem('cardapio', JSON.stringify({ 'cardapio': [...cardapio, newObject] }));
            setModalAdd(false);
            resetStates();
            return
        } else {
            alert('Já existe um prato com esse nome')
        }
    }

    const findItem = () => {
        let newArray = cardapio.filter(item => item.nome == search)
        if (newArray) {
            setCardapioSearch(newArray)
        } else {
            alert("Não foi encontrado nenhum item do cardapio com esse nome.");
            setCardapioSearch(cardapio)
        }
    }


    return (
        <div className="container">
            <div className="bar">
                <div className="w50">
                    <input className="inputSearch" type="text" placeholder="Pesquise aqui..." onChange={(e) => {
                        if (e.target.value.length == 0) setCardapioSearch([])
                    }} onBlur={(e) => setSearch(e.target.value)} />
                    <button className="btnSearch"onClick={() => findItem()}><AiOutlineSearch className="icon"/> Procurar</button>
                </div>
                <div className="w50 flexEnd" >
                    <button className="buttonAdd" onClick={() => setModalAdd(true)}>Adicionar novo cardapio</button>
                </div>
            </div>
            <div className="containerCardapio">
                {
                    cardapioSearch.length > 0 ? <List cardapio={cardapioSearch} /> : <List cardapio={cardapio} />
                }
            </div>
            <Modal
                isOpen={modalAdd}
                style={customStyle}
                contentLabel="Example Modal"
            >
                <div className="modalAddNewCardapio">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>

                        <div>
                            <label htmlFor="">Nome</label>
                            <input required type="text" onBlur={(e) => setNomeIngrediente(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Preço</label>
                            <input required type="text" onBlur={(e) => setPrecoIngrediente(e.target.value)} />
                        </div>
                        <div>
                            <input required type="text" onBlur={(e) => setIngrediente(e.target.value)} />
                            <button onClick={() => addIngrediente()}>adicionar</button>
                        </div>
                        <div>
                            <label htmlFor="">meu ingrediente</label>
                            {/* lista de ingredientes */}
                            {ingredientes && ingredientes.map(item => {
                                return <div>
                                    <label onClick={() => removeItem(item.id)}>{item.nome}</label>
                                </div>
                            })}
                        </div>
                        <input type="submit" value="salvar" onClick={() => registerNewIngrediente()} />
                    </form>

                </div>
            </Modal>
        </div>
    )
}