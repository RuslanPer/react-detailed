import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion,
}

export const MenuModeChanging = () => <UncontrolledAccordion titleValue={'Menu'}/>
export const UsersCollapsedMode = () => <UncontrolledAccordion titleValue={'Users'}/>
