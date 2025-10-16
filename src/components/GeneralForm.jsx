export default function GeneralForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="email">Email:
                <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="phone">Phone:
                <input type="tel" name="phone" id="phone" />
            </label>
            <label htmlFor="github">GitHub:
                <input type="text" name="github" id="github"/>
            </label>
        </form>
    )
}