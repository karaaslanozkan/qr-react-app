import {useParams} from "react-router-dom";
function Param({useUrl}){
    const {id} = useParams();
    useUrl(id);
    return(
      <>
    <h1>{id}</h1>
    </>
    )
   
}
export default Param;