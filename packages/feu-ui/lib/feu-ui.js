'use strict';

import chalk from 'chalk';
import { add } from 'feu-tools'

function ui(result) {
    console.log("ui库，result入参:", result);
    console.log(chalk.red("ui库, 结果为："+chalk.blue(add(result, 10))));
}

export default ui;
