import { useState } from 'react'
import '../styles/form.css'
function Prac({ obj, setObj }) {
    const { pracArr } = obj

    let [isClicked, setIsClicked] = useState(false)

    function btnClick(e) {
        e.preventDefault()
        setIsClicked(!isClicked)
    }

    function handlesubmit(e) {
        e.preventDefault()
        const newPracArr = [
            ...pracArr,
            {
                name: e.target.name.value,
                position: e.target.position.value,
                date: e.target.date.value,
            },
        ]
        setObj((currentObj) => ({
            ...currentObj,
            pracArr: newPracArr,
        }))
        setIsClicked(!isClicked)
    }

    function deleteEdu(itemToDel) {
        setObj((currentObj) => ({
            ...currentObj,
            pracArr: pracArr.filter((item, index) => index != itemToDel),
        }))
    }

    return (
        <div className="data-CD">
            {!isClicked ? (
                <button onClick={btnClick}>Add Experience</button>
            ) : (
                <form onSubmit={(e) => handlesubmit(e)} action="">
                    <input type="text" name="name" required />
                    <input type="text" name="position" required />
                    <input type="date" name="date" required />
                    <input type="submit" value="Add" />
                    <button onClick={(e) => btnClick(e)}>Cancel</button>
                </form>
            )}
            <div className="container">
                {pracArr.map(({ name }, index) => (
                    <div className="item" key={index}>
                        <p>{name}</p>
                        <button
                            onClick={() => {
                                deleteEdu(index)
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Prac
