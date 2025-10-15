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
            <EducationalExperiencePreview
                school={"Escuela de Sophia"}
                study={"Bachelors of Computer Engineering"}
                date={"2023-2025"}
            />
            <hr className="section-separator"/>            
            <PracticalExperiencePreview>
                <h3>Company Name</h3>
                <h4>Position Title</h4>
                <ul>
                    <li>Responbility #1</li>
                </ul>
                <p>Start-End Date</p>
            </PracticalExperiencePreview>
        </div>
    )
}