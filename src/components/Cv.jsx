import '../styles/cv.css'

function Cv({ obj }) {
    const { name, email, phone, eduArr, pracArr } = obj
    return (
        <div className="cv">
            <div className="header">
                <h1>{name}</h1>
                <div className="contact">
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </div>
            <div className="desc">
                <div className="edu">
                    <h2>Education</h2>
                    {eduArr.map(({ name, study, date }, index) => (
                        <div key={index} className="item">
                            <h3>/{name}</h3>
                            <p>{study}</p>
                            <p>{date}</p>
                        </div>
                    ))}
                </div>
                <div className="prac">
                    <h2>Experience</h2>
                    {pracArr.map(({ name, position, date }, index) => (
                        <div key={index} className="item">
                            <h3>/{name}</h3>
                            <p>{position}</p>
                            <p>{date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cv
