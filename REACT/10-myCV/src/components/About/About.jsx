import "./about.css";


export const About = ({hero}) => {
  return (
    <div className="about">
      <h2>ABOUT ME</h2>
        {hero.aboutMe.map((item) =>(
           <div key={JSON.stringify(item)}>
            <p>{item.info}</p>
           </div>
        ))}
    </div>
  )
}
