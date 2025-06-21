export class PageLogger {
  constructor(pageName) {
    this.pageName = pageName;
  }

  getMessage() {
    return `Visiting: ${this.pageName}`;
  }
}
