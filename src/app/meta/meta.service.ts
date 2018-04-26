import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

const TITLE = 'VeganBot';
const DESCRIPTION = 'All the answers to life, the universe and everything.';

@Injectable()
export class MetaService {
  constructor(private meta: Meta) {}

  /**
   * Update metatitle ad metadescription.
   * If no params are given, we use the defaults.
   */
  updateMetaTitleAndDescription(title = TITLE, description = DESCRIPTION): any {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
