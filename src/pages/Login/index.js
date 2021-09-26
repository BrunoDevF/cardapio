import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function Login() {
    const history = useHistory();
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')

    const login = () => {
        if(user === 'admin' && pass === '123'){
            localStorage.setItem('user', JSON.stringify({'user':login}));
            history.push('/')
        }
        return
    }

    return (
        <div>

            <div>
                <label htmlFor="">Login: </label>
                <input type="text" onBlur={(e) =>setUser(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input type="text" onBlur={(e) => setPass(e.target.value)} />
            </div>
            <div>
                <input type="submit" onClick={() => login()}/>
            </div>
        </div>
    )
}