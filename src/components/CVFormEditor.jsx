import GeneralForm from "./forms/GeneralForm";
import EducationForm from "./forms/EducationForm";

export default function CVFormEditor({
    handleSectionSave
}) {
    return (
        <div className="cv-form-container">
            <section className="general-information-section">
                <GeneralForm handleSectionSave={handleSectionSave}></GeneralForm>
            </section>
            <hr className="section-separator" />
            <section className="educational-experience-section">
                <EducationForm handleSectionSave={handleSectionSave} />
            </section>
            <hr className="section-separator" />
            <section className="practical-experience-section">

            </section>

        </div>
    )
}