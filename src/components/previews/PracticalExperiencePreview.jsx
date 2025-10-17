export default function PracticalExperiencePreview({
    companies
}) {

    return (
        <section className="practical-experience-preview">
            {companies ? companies.map((job) => {
                return (
                    <li key={job.company + job.date + job.position} className="job-list">
                        <div className="company-information">
                            <div className="company-and-year">
                                <h3>{job.company}</h3>
                                <h4>{job.date}</h4>
                            </div>
                            <h4>{job.position}</h4>
                        </div>
                        <ul className="job-responsibilities">
                            {job.responsibilities.map((responsibility) => {
                                if (responsibility !== '') return <li key={responsibility}>{responsibility}</li>
                            })}
                        </ul>
                    </li>
                )
            }) : <h3>It's down there somewhere</h3>}
        </section>
    )
}