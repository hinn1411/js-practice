// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    let { width: newWidth, height: newHeight } = newSize;
    if (newWidth <= 1) {
      newWidth = 1;
    } else if (newWidth >= this.screenSize.width) {
      newWidth = this.screenSize.width;
    }

    if (newHeight <= 1) {
      newHeight = 1;
    } else if (newHeight >= this.screenSize.height) {
      newHeight = this.screenSize.height;
    }
    this.size.resize(newWidth, newHeight);
  }
  move(newPosition) {
    if (newPosition.x < 0) newPosition.x = 0;
    if (newPosition.y < 0) newPosition.y = 0;
    if (newPosition.x + this.size.width > this.screenSize.width)
      newPosition.x = this.screenSize.width - this.size.width;
    if (newPosition.y + this.size.height > this.screenSize.height)
      newPosition.y = this.screenSize.height - this.size.height;
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }
  changeWindow(newProgramWindow) {
    newProgramWindow.resize(new Size(400, 300));
    newProgramWindow.move(new Position(100, 150));
    return newProgramWindow;
  }
}
