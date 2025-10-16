import GeneralForm from "./GeneralForm";

export default function CVFormEditor({
    handleGeneralSave
}) {
    return (
        <div className="cv-form-container">
            <section className="general-information-section">
                <GeneralForm handleGeneralSave={handleGeneralSave}></GeneralForm>
            </section>
            <section className="educational-experience-section">

            </section>
            <section className="practical-experience-section">

            </section>

        </div>
    )
}