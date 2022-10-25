export default function LetsChatForm() {
    return (
        <form className="w-full space-y-8 md:w-3/4">
            <InputWLabel label="Name *">
                <Input type="text" name="name" autoComplete="name" />
            </InputWLabel>
            <InputWLabel label="Email *">
                <Input type="email" name="email" autoComplete="email" />
            </InputWLabel>
            <InputWLabel label="Phone">
                <Input type="tel" name="phone" autoComplete="tel" />
            </InputWLabel>
            <InputWLabel label="Message *">
                <textarea
                    className="w-full border border-2 py-3 px-3"
                    rows={6}
                />
            </InputWLabel>
            <button className="float-right border border-2 border-black bg-black py-3 px-6 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                Submit
            </button>
        </form>
    )
}

function InputWLabel({ children, label }) {
    return (
        <fieldset className="relative">
            <label className="absolute -top-3 left-3 bg-white px-2">
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
            className="w-full border border-2 py-3 px-3"
            {...props}
        />
    )
}
