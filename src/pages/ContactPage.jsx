import { useState } from 'react'
import { validateEmail } from '../../src/utils/helpers'

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === 'email') {
        setEmail(inputValue)
        } else if (inputType === 'name') {
        setName(inputValue)
        } else {
        setMessage(inputValue)
        }
    }

    const handleMouseEvent = (e) => {
        if (e.target.name === 'email') {
            const validation = validateEmail(email)
            if (!validation) {
                setErrorMessage('Invalid Email')
            }
        }
        
        if (e.target.name === 'message' && !message) {
            setErrorMessage('Please enter a message')
            return
        } else if (e.target.name === 'name' && !name) {
            setErrorMessage('Please enter your name')
            return
        } else if (e.target.name === 'email' && !email) {
            setErrorMessage('Please enter your email')
            return
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        setName('')
        setMessage('')
        setEmail('')
    }

    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                id='email'
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                onMouseLeave={handleMouseEvent}
                />
                <input
                id='name'
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                onMouseLeave={handleMouseEvent}
                />
                <textarea
                id='message'
                value={message}
                name="message"
                onChange={handleInputChange}
                placeholder="Message"
                onMouseLeave={handleMouseEvent}
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}
