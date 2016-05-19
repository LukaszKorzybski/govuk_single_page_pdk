import { ActionPaneComponent } from './action-pane/action-pane.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { GovUkHeaderComponent } from './headers/govuk/govuk-header.component';
import { PageTitleComponent } from './banners/page-title/page-title.component';
import { PersistInfoComponent} from './banners/persist-info/persist-info.component';
import { PersonalDetailsComponent } from './data-visualisation/personal-details/personal-details.component';
import { ContactInfoComponent} from './data-visualisation/contact-info/contact-info.component';
import { PhaseBannerComponent } from './banners/phase-banner/phase-banner.component';
import { ArrowComponent } from './navigation/arrow/arrow.component';
import { NextPreviousNavigationComponent }
    from './navigation/next-previous-navigation/next-previous-navigation.component';
import { SummaryItemComponent} from './data-visualisation/summary-item/summary-item.component';
import { DayItemComponent } from './timeline/day-item/day-item.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { ImageComponent } from './image/image.component';

const module = angular.module('govuk-single-page-pdk.components', [])

  .component('govActionPane', ActionPaneComponent)
  .component('govBreadcrumbs', BreadcrumbsComponent)
  .component('govHeader', GovUkHeaderComponent)
  .component('govPageTitle', PageTitleComponent)
  .component('govPersonalDetails', PersonalDetailsComponent)
  .component('govContactInfo', ContactInfoComponent)
  .component('govPhaseBanner', PhaseBannerComponent)
  .component('govPersistInfoBanner', PersistInfoComponent)
  .component('govArrow', ArrowComponent)
  .component('govNextPreviousNavigation', NextPreviousNavigationComponent)
  .component('govSummaryItem', SummaryItemComponent)
  .component('govDayItem', DayItemComponent)
  .component('govTimeline', TimelineComponent)
  .component('govImage', ImageComponent);

export const components: string = module.name;