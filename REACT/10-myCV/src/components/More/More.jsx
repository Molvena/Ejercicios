import "./more.css";

export const More = ({languages,habilities, volunteer}) => {
  return (
    <div className="more">
        <h2>LANGUAGES</h2>
        {languages.map((item) =>(
             <div key={JSON.stringify(item)}>
                <p>Language: {item.language}</p>
                <p>Wr Level: {item.wrlevel}</p>
                <p>Sp Level: {item.splevel}</p>
            </div>
        ))}
        {console.log(habilities)}
        <h2>HABILITIES</h2>
        {habilities.map((item) =>(
            <div key={JSON.stringify(item)}>
                <li>{item}</li>
            </div>
        ))}


        <h2>VOLUNTEER</h2>
        {volunteer.map((item)=>(
            <div key={JSON.stringify(item)}>
                <p>Volunteer: {item.name}</p>
                <p>Where: {item.where}</p>
                <p>Description:{item.description}</p>
            </div>
        ))}
    </div>
  )
}
