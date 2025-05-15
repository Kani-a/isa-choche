
import './style.css'

import { DropdownButton } from "./componets/buttons/dropdown";
import { Banner } from "flowbite-react";
import ProdRow from "./componets/card/prod-container";
import BannerP from './componets/card/banner';


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
        <BannerP/>
        <ProdRow/>
        <BannerP/>
        <ProdRow/>
      </main>
</>)
}