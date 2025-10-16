import GeneralInformationPreview from "./previews/GeneralInformationPreview"
import EducationalExperiencePreview from './previews/EducationalExperiencePreview';
import PracticalExperiencePreview from './previews/PracticalExperiencePreview';
import '../styles/CVPreview.css';

const person = {
    name: "Alison Burgers",
    github: "github.com/PandesalPanpan",
    gmail: "alisonburger@gmail.com",
    number: "(63+) 912 345 6789"
}

export default function CVPreview({
    generals,
    educations,
    companies
}) {

    return (
        <div className="cv-preview">
            <GeneralInformationPreview
                name={generals.name}
                github={generals.github}
                email={generals.email}
                phone={generals.phone}
            />
            <hr className="section-separator" />
            <EducationalExperiencePreview
                studies={educations}
            />
            <hr className="section-separator" />
            <PracticalExperiencePreview
                companies={companies}
            >
            </PracticalExperiencePreview>
        </div>
    )
}