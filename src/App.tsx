import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <h3>Controlled components</h3>
            <Accordion titleValue={'--Menu--'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <hr/>
            <h3>Uncontrolled components</h3>
            <UncontrolledAccordion titleValue={'--Menu--'}/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setSwitchOn}/>
        </div>
    );
}

export default App;
