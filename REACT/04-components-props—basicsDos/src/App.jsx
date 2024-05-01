import { useState } from 'react'


import './App.css'
import { Image, Paragraph, SubTitle, Title, Header, Main, Footer } from "./components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
        <Header texto ="Soy el Header">
        <Title
        text = "Soy el título hijo del Header"
        />
        <SubTitle
        text = "Soy el subtitulo"
        />
        <p>Prueba de children del footer</p>
        </Header>
         

          
        <Main text = "Main">
        <Paragraph
        text = "Soy un primer parrafo"
        />
        <Image
        src = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
        alt ="imagen guardada"
        clase = "imagen"
        width = "500px"
        height= "500px"
        />
        <Paragraph
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consequat augue. Ut tincidunt pharetra nisl in euismod. Nam enim leo, consequat vel convallis et, egestas et magna. Maecenas condimentum hendrerit finibus. Pellentesque lacinia ante vitae elit eleifend semper rhoncus at nisl. Ut id maximus massa. Aliquam commodo sed neque in maximus. Praesent interdum quam et risus viverra ultricies. Mauris sit amet metus at enim condimentum rutrum eget at magna. Suspendisse at tortor pharetra augue varius maximus sit amet non lacus. Phasellus rhoncus neque ultrices erat pharetra consectetur. Vestibulum a tellus tempor, ullamcorper elit sed, sagittis leo. Aliquam at ullamcorper diam. Etiam feugiat, ex id sollicitudin euismod, nulla sem vehicula nisi, eu varius dolor eros vitae odio.In mauris sem, pulvinar mollis hendrerit et, euismod at massa. Vivamus eu pellentesque erat. Phasellus nec felis ac risus malesuada aliquam. Ut ullamcorper dignissim libero, quis ornare nisi commodo et. Cras leo tortor, tincidunt sed condimentum ac, rutrum at lacus. Sed a scelerisque nisl, id interdum urna. Vestibulum blandit odio nec arcu faucibus pretium. Donec quis condimentum diam. Duis vel metus nulla. Aenean vel ligula metus. Nunc lacinia porta sem."
        />
        </Main>
      
      <Footer text = "Soy el footer">
      <p>Prueba de children del footer</p>
            
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </Footer>
    </>
  )
}

export default App
