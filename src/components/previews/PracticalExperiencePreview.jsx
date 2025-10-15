export default function PracticalExperiencePreview({
    jobs
}) {

    return (
        <section className="practical-experience-preview">
            {jobs.map((job) => {
                return (
                    <>
                        <div className="company-information">
                            <h3>{job.company}</h3>
                            <h4>{job.position}</h4>
                        </div>
                        <ul className="job-responsibilities">
                            {job.responsibilities.map((responsibility) => <li>{responsibility}</li>)}
                        </ul>
                    </>
                )
            })}
        </section>
    )
}