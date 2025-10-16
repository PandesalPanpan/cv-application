export default function GeneralForm({
    handleGeneralSave
}) {

    return (
        <form onSubmit={(e) => {
            handleGeneralSave(e ,"general")
        }}>
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
            <button type="submit">Save</button>
        </form>
    )
}