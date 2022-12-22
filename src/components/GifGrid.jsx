import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";


export const GifGrid = ({ category}) => {

  // const [counter, setCounter] = useState(10)
  
  const {images, isLoading} = useFetchGifs( category );

  console.log({isLoading})

  return (
    <>
        <h3> { category } </h3>
        {/* <h5>{ counter }</h5>
        <button onClick={ () => setCounter (counter + 1) }> +1</button> 
              */}

        {isLoading && (<h2>Cargando...</h2>)}

        <div className="card-grid">
          {
            images.map( (image) => (
              <Gifitem 
                key={ image.id}
                {...image}
              />
            ))
          }
        </div>
    </>
  )
}
