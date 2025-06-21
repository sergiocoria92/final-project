import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { PageLogger } from './PageLogger.js';

document.addEventListener('DOMContentLoaded', () => {//DOM
  loadHeader();
  loadFooter();

const logger = new PageLogger(document.title);
console.log(logger.getMessage());

});
