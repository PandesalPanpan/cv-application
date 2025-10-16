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
                <a href={"https://github.com/"+github} target="_blank">{"github.com/"+github}</a>
            </div>
        </section>
    )
}