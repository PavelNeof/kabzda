import './App.css';
import Accordion from "./Accordion";
import {Rating, RatingValueType} from "./Rating";
import {OnOff} from "./Components/OnOff";
import {useState} from "react";
import UncontrolledAccordion from "./Components/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff";
import {sum} from "./lesson_8";

function App(props: any) {

let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn,switchSetOn] = useState(true)

    console.log(sum(3, 5, 7, 6, 4, 9))

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu Controlled"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>


            <UncontrolledOnOff onChange={switchSetOn}/> <div>{switchOn.toString()}</div>
            <OnOff on={switchOn} setOn={switchSetOn}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>




        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1> {props.title}</h1>
}

export default App;

