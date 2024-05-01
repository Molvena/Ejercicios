import { useState } from 'react'
import './App.css'
import { Title, SubTitle, Paragraph, Image, Header, Main, Footer, CharacterList, ItemList } from './components'
import { dataLi } from './data/li.data'


export const App = () => {
const data = dataLi;
console.log(data);

  return (
    <>
    <Header>
      <Title
      text="Soy el Título"
      />
    </Header>
    <Main>
      <SubTitle
      text="Soy el Subtítulo"
      />
      <Paragraph
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consequat augue. Ut tincidunt pharetra nisl in euismod. Nam enim leo, consequat vel convallis et, egestas et magna. Maecenas condimentum hendrerit finibus. Pellentesque lacinia ante vitae elit eleifend semper rhoncus at nisl. Ut id maximus massa. Aliquam commodo sed neque in maximus. Praesent interdum quam et risus viverra ultricies. Mauris sit amet metus at enim condimentum rutrum eget at magna. Suspendisse at tortor pharetra augue varius maximus sit amet non lacus. Phasellus rhoncus neque ultrices erat pharetra consectetur. Vestibulum a tellus tempor, ullamcorper elit sed, sagittis leo. Aliquam at ullamcorper diam. Etiam feugiat, ex id sollicitudin euismod, nulla sem vehicula nisi, eu varius dolor eros vitae odio.In mauris sem, pulvinar mollis hendrerit et, euismod at massa. Vivamus eu pellentesque erat. Phasellus nec felis ac risus malesuada aliquam. Ut ullamcorper dignissim libero, quis ornare nisi commodo et. Cras leo tortor, tincidunt sed condimentum ac, rutrum at lacus. Sed a scelerisque nisl, id interdum urna. Vestibulum blandit odio nec arcu faucibus pretium. Donec quis condimentum diam. Duis vel metus nulla. Aenean vel ligula metus. Nunc lacinia porta sem."      
      />
      <CharacterList>    
        {data.map((item) =>(
        <ItemList key={item.id} item={item.name}/>
        ))}     
      </CharacterList>
     
    </Main>
    <Footer>
    <Image
        src = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
        alt ="imagen guardada"
        clase = "imagen"
        width = "50px"
        height= "50px"
        />
        
    </Footer>
   
    </>
  )
}


