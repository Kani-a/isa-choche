import imagens from "./assets/imagens";
function App() {

  
  return (
    <>
      <header className="header flex justify-center">
        <h1 className="text-xl">
          Isa choche e pá a logo e num sei oq 
        </h1>
      </header>

      <main>
        <section className="Banner flex justify-center">
            bannere e num sei oq 
        </section>

        <section className="main-prod bg-pink-200 flex justify-center">

          <ul className="prod-container grid grid-cols-2 md:grid-cols-4  gap-x-7 p-3 size-max">
            <li className="prod">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                  titulo produto
                </label>
            </li>
            <li className="prod ">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
            <li className="prod" >
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
            <li className="prod">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
          </ul>
        </section>
        
        <br/>
        
        <section className="main-prod bg-pink-200 flex justify-center">

          <ul className="prod-container grid grid-cols-2 md:grid-cols-4  gap-x-7 p-3 size-max">
            <li className="prod">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                  titulo produto
                </label>
            </li>
            <li className="prod ">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
            <li className="prod" >
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
            <li className="prod">
              <img  src={imagens.img4} alt="imagen-prod" />
              <label htmlFor="imagen-prod"
              >titulo produto</label>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App
