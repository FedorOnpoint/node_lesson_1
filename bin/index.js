#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const log = console.log;
const argv = yargs(hideBin(process.argv)).parse();
const dateNow = new Date();
const month = argv.month || argv.m ? dateNow.getMonth() : false;
const year = argv.year || argv.y ? dateNow.getFullYear() : false;
const day = argv.day || argv.d ? dateNow.getUTCDate() : false;
const action = (action) => {
  return argv._.includes(action);
};

if (action("current")) {
  month && log(month);
  year && log(year);
  day && log(day);
}
if (action("add")) {
  month && dateNow.setMonth(month + (argv.m || argv.month));
  year && dateNow.setFullYear(year + (argv.y || argv.year));
  day && dateNow.setUTCDate(day + (argv.d || argv.day));
  log(dateNow.toDateString());
}

if (action("sub")) {
  month && dateNow.setMonth(month - (argv.m || argv.month));
  year && dateNow.setFullYear(year - (argv.y || argv.year));
  day && dateNow.setUTCDate(day - (argv.d || argv.day));
  log(dateNow.toDateString());
}

if (action("date")) {
  log(dateNow.toDateString());
}
