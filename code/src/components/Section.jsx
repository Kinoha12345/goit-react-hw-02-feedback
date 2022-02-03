const Section =({children , title})=>{
    return <>
     <h1>{title}</h1>
     <div>{children?children:null}</div>
     </>
 }
 export default Section