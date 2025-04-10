#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).parse();
// console.log(argv);
// console.log(data);

const dateNow = new Date();
const log = console.log;
const month = argv.month || argv.m ? dateNow.getMonth() : false;
const year = argv.year || argv.y ? dateNow.getFullYear() : false;
const day = argv.day || argv.d ? dateNow.getUTCDate() : false;
log(month, year, day);
