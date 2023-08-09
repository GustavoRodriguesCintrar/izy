import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { postQuestion } from '../Services';
import '../styles/message.css'


export function Chat() {
    const [question, setQuestion] = useState('');
    const [chat, setChat] = useState([]);
    
    const sendQuestion = useCallback(async() => {
        const response = await postQuestion("/", {user_message: question})
        setChat([...chat, question, response])
        setQuestion('')
    }, [question, chat])

    return (
        <div className='container'>
            <div>
                {
                chat.length === 0 ? 
                (
                <p>Ainda não foi feita nenhuma pergunta</p>
                )
                :
                chat.map((m, index) => 
                (
                <div className={index%2 === 1 ? "message-blue" : "message-orange"}>
                    <p className="message-content">{m}</p>
                </div>)
                 )
                }
            </div>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Escreva sua pergunta..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={ question }
                onChange={ ({ target: { value } }) => setQuestion(value) }
                onKeyPress={(event) => { if (event.key === "Enter") {sendQuestion()}}}
                />
                <Button 
                variant="outline-secondary" 
                id="button-addon2"
                disabled={!(question.length > 1)}
                onClick={() => sendQuestion()}
                >
                Enviar
                </Button>
            </InputGroup>
        </div>
    )
}