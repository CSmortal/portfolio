import { useNavigate } from "react-router-dom"
import "../css/Surface.css"

export default function Surface(props) {
  const { name, description_short, image, type } = props.details
  const navigate = useNavigate();


  const handleClickSurface = () => {
    if (type === "P") {
      navigate('/personalProjDetail', { state: props.details })
    } else if (type === "W") {
      navigate('/workDetail', { state: props.details })
    } else if (type === "S") {
      navigate('/schoolProjDetail', { state: props.details })
    }

  }

  // for the img element, we must prefix it with the process.env.PUBLIC_URL because

  return (
    <div className="surfaceContainer" onClick={handleClickSurface}>
      <img className="surface-image" src={`${process.env.PUBLIC_URL}/${image}`}/>
      <h2 className="surface-name">{name}</h2>
      <p className="surface-description-short">{description_short}</p>
    </div>
  )
}