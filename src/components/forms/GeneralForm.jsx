export default function GeneralForm({
    handleSectionSave
}) {

    return (
        <form onSubmit={(e) => {
            handleSectionSave(e ,"general")
        }}>
            <div className="form-row">
                <label htmlFor="name">Name:<span className="required">*</span>
                    <input required type="text" name="name" id="name" />
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="email">Email:<span className="required">*</span>
                    <input required type="email" name="email" id="email" />
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="phone">Phone:<span className="required">*</span>
                    <input required type="tel" name="phone" id="phone" />
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="github">GitHub:<span className="required">*</span>
                    <input required type="text" name="github" id="github"/>
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    )
}