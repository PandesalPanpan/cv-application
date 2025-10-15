export default function EducationalExperiencePreview({
    studies
}) {

    return (
        <section className="education-experience-preview">
            <h2>Education Experience</h2>
            {studies.map((study) => {
                return (
                    <li key={study.school + study.date + study.course}>
                        <div className="school-and-year">
                            <h3>{study.school}</h3>
                            <h4>{study.date}</h4>
                        </div>
                        <h4>{study.course}</h4>
                    </li>
                )
            })}
        </section>
    )
}