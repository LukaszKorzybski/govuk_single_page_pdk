import { prism } from '../util/prism';
import { ExamplesIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-pdk.demos-docs', [prism])

  .component('examplesIndexPage', ExamplesIndexComponent);

export const examplesDocs = module.name;