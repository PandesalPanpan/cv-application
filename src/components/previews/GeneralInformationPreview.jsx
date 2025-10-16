export default function GeneralInformationPreview({
    name,
    email,
    phone,
    github
}) {

    return (
        <section className="general-information-preview">
            <h1>{name}</h1>
            <div className="contact-details">
                <p>{email}</p>
                <p>{phone}</p>
                <a href={"https://"+github} target="_blank">{github}</a>
            </div>
        </section>
    )
}