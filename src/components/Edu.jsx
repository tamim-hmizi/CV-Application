import { useState } from 'react'
import '../styles/form.css'
function Edu({ obj, setObj }) {
    const { eduArr } = obj

    let [isClicked, setIsClicked] = useState(false)

    function btnClick(e) {
        e.preventDefault()
        setIsClicked(!isClicked)
    }

    function handlesubmit(e) {
        e.preventDefault()
        const newEduArr = [
            ...eduArr,
            {
                name: e.target.name.value,
                study: e.target.study.value,
                date: e.target.date.value,
            },
        ]
        setObj((currentObj) => ({
            ...currentObj,
            eduArr: newEduArr,
        }))
        setIsClicked(!isClicked)
    }

    function deleteEdu(itemToDel) {
        setObj((currentObj) => ({
            ...currentObj,
            eduArr: eduArr.filter((item, index) => index != itemToDel),
        }))
    }

    return (
        <div className="data-CD">
            {!isClicked ? (
                <button onClick={btnClick}>Add Education</button>
            ) : (
                <form onSubmit={(e) => handlesubmit(e)} action="">
                    <input type="text" name="name" required />
                    <input type="text" name="study" required />
                    <input type="date" name="date" required />
                    <input type="submit" value="Add" />
                    <button onClick={(e) => btnClick(e)}>Cancel</button>
                </form>
            )}
            <div className="container">
                {eduArr.map(({ name }, index) => (
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

export default Edu
