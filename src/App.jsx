import imagens from "./assets/imagens";

import { DropdownButton } from "./componets/buttons/dropdown";


export default function App() {
  return  (
          <>

<header className="header flex justify-center">
        <section className="sidebar btn">
          <nav>

        <DropdownButton/>

          </nav>
        </section>
        <h1 className="text-xl">
          Isa choche e pá a logo e num sei oq
        </h1>
      </header>

      <main>
        <section className="Banner flex justify-center bg-red-200 h-50 my-10">
          bannere e num sei oq
        </section>

        <section className="main-prod bg-pink-200 flex justify-center">

          <ul className="prod-container grid grid-cols-2 md:grid-cols-4  gap-x-7 p-3 size-max">

            <li className="prod">
              <img src={imagens[1].thumb} alt="imagen-prod" />
              <label htmlFor="imagen-prod" >
                {imagens[1].titulo}
              </label>
            </li>

          </ul>
        </section>
      </main>
          </>)
}