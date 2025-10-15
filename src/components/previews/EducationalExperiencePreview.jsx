export default function EducationalExperiencePreview({
    children,
    school,
    study,
    date
}) {

    return (
        <section className="education-experience-preview">
            <h2>Education Experience</h2>
            <div className="school-and-year">
                <h3>{school}</h3>
                <h4>{date}</h4>
            </div>
            <h4>{study}</h4>
        </section>
    )
}