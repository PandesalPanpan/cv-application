export default function GeneralInformationPreview({
    name,
    gmail,
    number,
    github
}) {

    return (
        <section className="general-information-preview">
            <h1>{name}</h1>
            <div className="contact-details">
                <p>{gmail}</p>
                <p>{number}</p>
                <a href={"https://"+github} target="_blank">{github}</a>
            </div>
        </section>
    )
}