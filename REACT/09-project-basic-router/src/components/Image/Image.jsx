import "./image.css"

export const Image = ({src, clase, alt, width, height}) => {
  return (
    <img
     src = {src}
     className = {clase}
     alt = {alt}
     width = {width}
     height = {height}
      />
  )
}
 