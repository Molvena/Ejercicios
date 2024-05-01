import "./experience.css";

export const Experience = ({experience}) => {
  return (
    <div className="experience-card">
      <h2>EXPERIENCE</h2>
        {experience.map((item)=>(
           <div key={JSON.stringify(item)}>
            <p className="name">✅{item.name}</p>
            <p>{item.date}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
           </div> 
        ))}
    </div>
  )
}
