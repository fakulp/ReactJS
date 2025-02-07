const cartas = {
  backgroundColor:"white",
  width: "300px",
};

export const ListContainer = (props) =>{
    return(<>

<div className="row justify-content-center gap-4">
  <div className="card mt-3 gap-3 col-3 " style={cartas} >
  <img className="card-img-top" src={props.image}/> 
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.texto}</p>
    <a href="#" className="btn btn-primary">Agregar</a>
  </div>
  </div>
  <div className="card mt-3 gap-3 col-3 " style={cartas} >
  <img className="card-img-top" src={props.image}/> 
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.texto}</p>
    <a href="#" className="btn btn-primary">Agregar</a>
  </div>
  </div>
  <div className="card mt-3 gap-3 col-3 " style={cartas} >
  <img className="card-img-top" src={props.image}/> 
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.texto}</p>
    <a href="#" className="btn btn-primary">Agregar</a>
  </div>
  </div>
  <div className="card mt-3 gap-3 col-3 " style={cartas} >
  <img className="card-img-top" src={props.image}/> 
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.texto}</p>
    <a href="#" className="btn btn-primary">Agregar</a>
  </div>
  </div>
</div>
</>
)
}
