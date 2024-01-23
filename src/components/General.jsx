import '../styles/form.css'

function General({ obj, setObj }) {
    const { name, email, phone } = obj

    function update(e) {
        e.preventDefault()
        const { name, value } = e.target
        setObj((currentObj) => ({
            ...currentObj,
            [name]: value,
        }))
    }

    return (
        <div className="data-CD">
            <form action="">
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => update(e)}
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => update(e)}
                />
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => update(e)}
                />
            </form>
        </div>
    )
}

export default General
