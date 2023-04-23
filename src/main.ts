import { Game } from "./app/Game";
import { Stick } from "./app/Stick";
import { Table } from "./app/Table";
import { Mouse } from "./utils/Mouse";

const mouse = Mouse.instance();

document.onmousemove = (ev) => {
  mouse.onMove(ev);
};

document.onmousedown = (ev) => {
  mouse.onClickPressed(ev);
};

document.onmouseup = (ev) => {
  mouse.onClickReleased(ev);
};

const table = new Table();

const stick = new Stick(mouse);

const game = new Game(table, stick);

game.run();
