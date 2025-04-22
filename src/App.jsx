import imagens from "./assets/imagens";
import './style.css'

import { DropdownButton } from "./componets/buttons/dropdown";


export default function App() {
  return  (
          <>

<header className="header flex  fixed  w-full px-5 top-0 left-0 justify-between pink-banner">
        <section className="sidebar">
          <nav>
            <DropdownButton/>
          </nav>
        </section>
        <h1 className="text-md w-full text-center">
          Isa choche e pá a logo e num sei oq
        </h1>
      </header>

      <main>
        <section className="pink-banner flex bg-red-200 h-25 my-10">
          <p className="prod w-full flex justify-center  mx-10 ">
            banner e num sei oq 
          </p>
        </section>
  
        <section className="main-prod flex justify-center my-10">

          <ul className="prod-container grid grid-cols-2 md:grid-cols-4  gap-x-7 p-3 size-max">
          <li className="m-1 prod">
              <img src={imagens[1].thumb} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                {imagens[1].titulo}
              </label>
            </li>
            <li className="m-1 prod">
              <img src={imagens[1].thumb} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                {imagens[1].titulo}
              </label>
            </li>  <li className="m-1 prod">
              <img src={imagens[1].thumb} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                {imagens[1].titulo}
              </label>
            </li>  <li className="m-1 prod">
              <img src={imagens[1].thumb} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                {imagens[1].titulo}
              </label>
            </li>  
          </ul>
        </section>
          
        <br />

        <p id="minhabunda">trepa trepa</p>
              </main>
</>)
}