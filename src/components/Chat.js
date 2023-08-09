import React, { useState, useCallback } from 'react'
import FormText from 'react-bootstrap/FormText'
// import { postQuestion } from '../Services';

export function Chat() {
    const [question, setQuestion] = useState('');
    const [chat, setChat] = useState([]);
    
    const sendQuestion = useCallback(() => {
        // const response = await postQuestion("/", {content: question})
        const response = "resposta bem elaborada do chatgpt"
        setChat([...chat, question, response])
        setQuestion('')
    })

    return (
        <div>
            <div>
                {
                chat.length === 0 ? 
                (<p>Ainda não foi feita nenhuma pergunta</p>)
                :
                chat.map((m, index) => 
                (<p className={index%2 === 1 ? "response" : "question"}>{m}</p>))
                }
            </div>
            <div>
                <input
                type="text"
                value={ question }
                onChange={ ({ target: { value } }) => setQuestion(value) }
                placeholder="Escreva sua pergunta..."
                />
                <button type='button' disabled={!(question.length > 1)} onClick={() => sendQuestion()}>Enviar</button>
            </div>
        </div>
    )
}