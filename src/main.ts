import { Game } from "./app/Game";
import { Stick } from "./app/Stick";
import { Table } from "./app/Table";
import { Mouse } from "./utils/Mouse";

const mouse = Mouse.instance();
document.onmousemove = (ev) => {
  mouse.onMouseMove(ev);
};
document.onmousedown = (ev) => {
  mouse.onMouseDown(ev);
};
document.onmouseup = (ev) => {
  mouse.onMouseUp(ev);
};

const table = new Table();

const stick = new Stick(mouse);

const game = new Game(table, stick);

game.run();
