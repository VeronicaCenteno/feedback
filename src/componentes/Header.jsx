import propTypes  from "prop-types";

const Header = ({ bgColor , color }) => {
    return(
        <header style ={ {backgroundColor: bgColor, 
                                Color: color
                                }}>
            Encabezado
        </header>
    )
}
//Valores por defecto paras las props suministradas 
Header.defaultProps = {
    bgColor:'rgba(0,0,0,0.4)',
    Color: '#fffff'
}

//Validar las props con PropstYPES 
Header.propTypes = {
    bgColor : propTypes.string.isRequired,
    Color: propTypes.string
}
export default Header; 