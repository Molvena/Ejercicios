import { Paragraph } from "../Paragraph/Paragraph"
import { Image } from "../index"
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
        <Image
        src = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1712246326/copyright_shjol7.png"
        alt ="imagen guardada"
        clase = "imagen"
        width = "50px"
        height=""
        />
        <Paragraph
        text= "Todos los derechos reservados"/>
    </footer>
  )
}
