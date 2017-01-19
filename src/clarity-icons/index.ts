/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIconsApi } from "./clarity-icons-api";
import { ClarityIconElement } from "./clarity-icons-element";
import { CoreShapes } from "./shapes/core-shapes";


export const ClarityIcons: ClarityIconsApi = ClarityIconsApi.instance;

ClarityIcons.add(CoreShapes);


//check if there is a global object called "ClarityIcons"
if (!window.hasOwnProperty("ClarityIcons")) {

    //Setting a global object called "ClarityIcons" to expose the ClarityIconsApi.
    window.ClarityIcons = ClarityIcons;

    //Defining clr-icon custom element
    customElements.define("clr-icon", ClarityIconElement);

}


