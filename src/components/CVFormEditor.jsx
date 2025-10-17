import GeneralForm from "./forms/GeneralForm";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
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
                <ExperienceForm handleSectionSave={handleSectionSave}/>
            </section>

        </div>
    )
}