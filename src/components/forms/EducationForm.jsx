import { useState } from "react";
export default function EducationForm({
    handleSectionSave
}) {
    const schoolObject = {id: crypto.randomUUID(), school: "", date: "", course: "" };
    const [entries, setEntries] = useState([schoolObject])

    const updateEntry = (index, field, value) => {
        setEntries((prev) => prev.map((e, i) => i === index ? { ...e, [field]: value } : e));
    }

    const addEntry = () => setEntries((prev) => [...prev, schoolObject]);
    const removeEntry = (index) => setEntries((prev) => prev.filter((current, i) => i !== index));


    return (
        <form onSubmit={(event) => {
            handleSectionSave(event, 'education');
        }}>
            {entries.map((entry, index) => {
                return <div key={entry.id} className="education-row">
                    <input type="hidden" name="id" value={entry.id}/>
                    <label htmlFor={`school-${index}`}>School:
                        <input id={`school-${index}`} type="text" name={`school`} value={entry.school} onChange={(e) => updateEntry(index, 'school', e.target.value)}/>
                    </label>
                    <label htmlFor={`date-${index}`}>Date:
                        <input id={`date-${index}`} type="text" name={`date`} onChange={(e) => updateEntry(index, 'date', e.target.value)}/>
                    </label>
                    <label htmlFor={`course-${index}`}>Course:
                        <input id={`course-${index}`} type="text" name={`course`}  onChange={(e) => updateEntry(index, 'course', e.target.value)}/>
                    </label>
                    <button type="button" onClick={() => removeEntry(index)}>Remove Entry</button>
                </div>
            })}

            <button type="button" onClick={addEntry}>Add school</button>
            <button type="submit">Save</button>
        </form>
    )
}