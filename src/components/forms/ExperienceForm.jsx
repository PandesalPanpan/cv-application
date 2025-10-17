import { useState } from "react";
export default function ExperienceForm({
    handleSectionSave
}) {
    const experienceObject = { id: crypto.randomUUID(), company: "", date: "", responsibilities: "" };
    const [entries, setEntries] = useState([experienceObject])

    const updateEntry = (index, field, value) => {
        setEntries((prev) => prev.map((e, i) => i === index ? { ...e, [field]: value } : e));
    }

    const addEntry = () => setEntries((prev) => [...prev, experienceObject]);
    const removeEntry = (index) => setEntries((prev) => prev.filter((current, i) => i !== index));


    return (
        <form onSubmit={(event) => {
            handleSectionSave(event, 'experience');
        }}>
            {entries.map((entry, index) => {
                return <div key={entry.id} className="experience-row">
                    <input type="hidden" name="id" value={entry.id} />
                    <div className="company-item">
                        <div className="company-details">
                            <label htmlFor={`company-${index}`}>Company:<span className="required">*</span>
                            </label>
                            <input requried id={`company-${index}`} type="text" name={`company`} value={entry.company} onChange={(e) => updateEntry(index, 'company', e.target.value)} />
                            <label htmlFor={`position-${index}`}>Position:<span className="required">*</span>
                            </label>
                            <input requried id={`position-${index}`} type="text" name={`position`} value={entry.position} onChange={(e) => updateEntry(index, 'position', e.target.value)} />
                            <label htmlFor={`date-${index}`}>Date:<span className="required">*</span>
                            </label>
                            <input requried id={`date-${index}`} type="text" name={`date`} onChange={(e) => updateEntry(index, 'date', e.target.value)} />
                        </div>
                        <div className="responbilities-group">
                            <label htmlFor={`responsibility-1-${index}`}>Responbility:
                            </label>
                            <input id={`responsibility-1-${index}`} type="text" name={`responsibility-1`} onChange={(e) => updateEntry(index, 'responsibility-1', e.target.value)} />
                            <label htmlFor={`responsibility-2-${index}`}>Responbility:
                            </label>
                            <input id={`responsibility-2-${index}`} type="text" name={`responsibility-2`} onChange={(e) => updateEntry(index, 'responsibility-2', e.target.value)} />
                            <label htmlFor={`responsibility-3-${index}`}>Responbility:
                            </label>
                            <input id={`responsibility-3-${index}`} type="text" name={`responsibility-3`} onChange={(e) => updateEntry(index, 'responsibility-3', e.target.value)} />
                        </div>
                    </div>
                    <button type="button" onClick={() => removeEntry(index)}>Remove Entry</button>
                </div>
            })}

            <button type="button" onClick={addEntry}>Add Company</button>
            <button type="submit">Save</button>
        </form>
    )
}