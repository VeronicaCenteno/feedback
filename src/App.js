import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedBackItem";

function App(){

      //Objeto de estilos
      const HeaderStyles = {
        backgroundColor: '#C4BCD6',
        color: 'black',
        
    }
    return(
        <div className="container">
            {/* Props: Atributos de etiquetas de un componente react*/}
            
            <Header 
            bgColor={HeaderStyles.backgroundColor}
           Color= {HeaderStyles.color} />
           <FeedbackItem />
           <FeedbackItem />
           <FeedbackItem />


        </div>
    )
}
export default App; 