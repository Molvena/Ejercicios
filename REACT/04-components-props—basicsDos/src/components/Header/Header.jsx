import "./header.css";


export const Header = ({children, texto}) => {
  return (
    
    <header>{texto}
    {children}
    </header>
   
  );
};
