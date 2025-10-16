export default function PracticalExperiencePreview({
    jobs
}) {

    return (
        <section className="practical-experience-preview">
            {jobs.map((job) => {
                return (
                    <li key={job.company+job.date+job.position}>
                        <div className="company-information">
                            <div className="company-and-year">
                                <h3>{job.company}</h3>
                                <h4>{job.date}</h4>
                            </div>
                            <h4>{job.position}</h4>
                        </div>
                        <ul className="job-responsibilities">
                            {job.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                        </ul>
                    </li>
                )
            })}
        </section>
    )
}