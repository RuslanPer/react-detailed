import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <Accordion titleValue={'--Menu--'} collapsed={true}/>
            <Accordion titleValue={'--Users--'} collapsed={false}/>

            <hr/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

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
