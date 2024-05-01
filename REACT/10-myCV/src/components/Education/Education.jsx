import "./education.css";


export const Education = ({education}) => {
  return (
    <div>
      <div className="education-card">
        <h2>EDUCATION</h2>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
