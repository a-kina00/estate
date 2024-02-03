import Menu from "../Menu";
import HeadingSearchMenu from "./HeadingSearchMenu";
import Trl from "../../utils/trl";

export default function Heading() {
    return <section className='heading col col_between'>
        <Menu/>
        <div className="col heading__title">
            <div className="text text_assertive text_extra-large text_uppercase">
                {Trl('Покупка и продажа недвижимости на Аджарском побережье.')}
            </div>
            <div className="text text_assertive text_extra-large text_uppercase">
                {Trl('Грузия, Батуми.')}
            </div>
        </div>
        <HeadingSearchMenu/>
      </section>
  }