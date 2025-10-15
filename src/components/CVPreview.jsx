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

const companies = [
    {
        company: "Ntek Systems Inc",
        position: "PHP Developer",
        responsibilities: [
            "Create a reporting system",
            "API Integration"
        ]
    },
    {
        company: "Mash Garage",
        position: "Software Developer",
        responsibilities: [
            "Inventory Management System"
        ]
    }
]

const educations = [
    {
        school: "Polytechnic University of the Philippines",
        date: "2021-2027",
        course: "Bachelors of Computer Engineering"
    }
]

export default function CVPreview() {

    return (
        <div className="cv-preview">
            <GeneralInformationPreview
                name={person.name}
                github={person.github}
                gmail={person.gmail}
                number={person.number}
            />
            <hr className="section-separator" />
            <EducationalExperiencePreview
                studies={educations}
            />
            <hr className="section-separator" />
            <PracticalExperiencePreview
                jobs={companies}
            >
            </PracticalExperiencePreview>
        </div>
    )
}