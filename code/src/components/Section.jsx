import PropTypes from "prop-types"

const Section =({children , title})=>{
    return <>
     <h1>{title}</h1>
     <div>{children?children:null}</div>
     </>
 }

Section.proptype = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}


 export default Section