import { useState } from 'react'

export default function LetsChatForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(null)
    const [message, setMessage] = useState('')
    const [created, setCreated] = useState()
    const [response, setResponse] = useState({
        type: '',
        message: '',
    })

    // Form submit handler
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact-form', {
                method: 'POST',
                body: JSON.stringify({ name, email, phone, message, created }),
            })

            if (res.status === 201) {
                setResponse({
                    type: 'success',
                    message: 'Thank for keeping in touch!',
                })
            } else {
                throw new Error()
            }
        } catch (e) {
            setResponse({
                type: 'error',
                message: e.message,
            })
            console.error(e)
        } finally {
            if (response.type === 'success')
                setTimeout(() => {
                    response.type = ''
                    response.message = ''
                }, 5000)
        }
    }

    return response.type !== 'success' ? (
        <form onSubmit={submitForm} className="w-full space-y-8 md:w-3/4">
            <InputWLabel label="Name *">
                <Input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </InputWLabel>
            <InputWLabel label="Email *">
                <Input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputWLabel>
            <InputWLabel label="Phone">
                <Input
                    type="tel"
                    required={false}
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </InputWLabel>
            <InputWLabel label="Message *">
                <textarea
                    className="w-full border border-2 py-3 px-3 dark:bg-black"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </InputWLabel>
            <button
                id="interactable"
                data-type="submit"
                onClick={() => {
                    setCreated(new Date())
                }}
                className="float-right border border-2 border-black bg-black py-3 px-6 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            >
                Submit
            </button>
        </form>
    ) : (
        <div>{response.message}</div>
    )
}

function InputWLabel({ children, label }) {
    return (
        <fieldset className="relative">
            <label className="absolute -top-3 left-3 bg-white px-2 dark:bg-black">
                {label}
            </label>
            {children}
        </fieldset>
    )
}

function Input({ required = true, type, ...props }) {
    return (
        <input
            required={required}
            type={type}
            className="w-full border border-2 py-3 px-3 dark:bg-black"
            {...props}
        />
    )
}
