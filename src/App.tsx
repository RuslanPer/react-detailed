import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion titleValue={'--Menu--'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff/>
            <hr/>
            <UncontrolledAccordion titleValue={'--Menu--'}/>
            <hr/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
