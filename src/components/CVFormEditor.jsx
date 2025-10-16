import GeneralForm from "./GeneralForm";

export default function CVFormEditor({
    handleGeneralSave: handleSectionSave
}) {
    return (
        <div className="cv-form-container">
            <section className="general-information-section">
                <GeneralForm handleSectionSave={handleSectionSave}></GeneralForm>
            </section>
            <section className="educational-experience-section">

            </section>
            <section className="practical-experience-section">

            </section>

        </div>
    )
}