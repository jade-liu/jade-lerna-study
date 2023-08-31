'use strict';

import { min } from 'feu-tools'
import ui from 'feu-ui'

function app() {
    console.log("app主入口");
    let minNum = min(2, 5);
    ui(minNum);
}

app();
