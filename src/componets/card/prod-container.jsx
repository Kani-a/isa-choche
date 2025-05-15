import imagens from "../../assets/imagens";
function ProdRow(){

    return(
        <section className="main-prod flex justify-center my-10">

        <ul className="prod-container grid grid-cols-2 md:grid-cols-4  gap-x-7 p-3 size-max">
     
          <li className="m-1 prod">
            <img src={imagens[1].thumb} alt="imagen-prod" className="my-5"/>
            <label htmlFor="imagen-prod" className="prod-tittle ">
              {imagens[1].titulo}
            </label>
          </li>  

          <li className="m-1 prod ">
            <img src={imagens[1].thumb} alt="imagen-prod" className="my-5"/>
            <label htmlFor="imagen-prod" className="prod-tittle ">
              {imagens[1].titulo}
            </label>
          </li>  

          <li className="m-1 prod ">
            <img src={imagens[1].thumb} alt="imagen-prod" className="my-5"/>
            <label htmlFor="imagen-prod" className="prod-tittle ">
              {imagens[1].titulo}
            </label>
          </li>  
          <li className="m-1 prod ">
            <img src={imagens[1].thumb} alt="imagen-prod" className="my-5"/>
            <label htmlFor="imagen-prod" className="prod-tittle ">
              {imagens[1].titulo}
            </label>
          </li>  
         
        </ul>
      </section>
    )
}
export default ProdRow;