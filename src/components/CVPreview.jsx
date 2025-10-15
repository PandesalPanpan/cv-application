import GeneralInformationPreview from "./previews/GeneralInformationPreview"
import EducationalExperiencePreview from './previews/EducationalExperiencePreview';
import PracticalExperiencePreview from './previews/EducationalExperiencePreview';
import '../styles/CVPreview.css';

export default function CVPreview() {

    return (
        <div className="cv-preview">
            <GeneralInformationPreview
            name={"Alison Burgers"}
            github={"github.com/PandesalPanpan"}
            gmail={"alisonburger@gmail.com"}
            number={"(63+) 912 345 6789"}
            />
            <hr className="section-separator"/>
            <EducationalExperiencePreview>

            </EducationalExperiencePreview>
            <PracticalExperiencePreview>

            </PracticalExperiencePreview>
        </div>
    )
}