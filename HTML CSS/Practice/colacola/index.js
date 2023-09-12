import ColaGenerator from "./js/colaGenerator.js";
import ColaMachineFunc from "./js/colaMachineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const colaMachimeFunc = new ColaMachineFunc();
colaMachimeFunc.setup();
