import {
  AlbumMetaViewerComponent,
  AlbumsBase,
  AllMetaService,
  AllMetaServiceModule,
  BasicDataLoaderService,
  ChronicleViewComponentBase,
  MainButtonsComponent,
  MainComponentBase,
  ModuleIndexComponentBase,
  PoemViewerComponent,
  ViewSettingsDialogService
} from "./chunk-KCBN2D5J.js";
import {
  APP_DI_CONFIG,
  APP_STATUSES,
  AUTH_STATUSES,
  ActivatedRoute,
  AlertService,
  AppConfigConstants,
  AuthServicesModule,
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DataComponentDialogService,
  DatePipe,
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  LangSubjectService,
  Location,
  LoginDialogService,
  MatButton,
  MatButtonToggle,
  MatButtonToggleGroup,
  MatCheckbox,
  MatChipListbox,
  MatChipOption,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatFormField,
  MatGridList,
  MatGridTile,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatListItemLine,
  MatListItemTitle,
  MatListOption,
  MatMiniFabButton,
  MatPrefix,
  MatSelectionList,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatSuffix,
  MatToolbar,
  MatTooltip,
  MatTree,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodePadding,
  MatTreeNodeToggle,
  NGMDModule,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  PoemAssociationsChangedSubjectService,
  PoemDeletedSubjectService,
  PoemsApp_Controllers_Client,
  ReactiveFormsModule,
  Router,
  RouterOutlet,
  ScrollDispatcher,
  StaticContentReloadSubjectService,
  Subject,
  Title,
  WaitService,
  fromEvent,
  setClassMetadata,
  takeUntil,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-422HAUG6.js";

// src/app/reader-view/albums-for-reader.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AlbumsForReaderComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-option", 12, 3)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("value", a_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", \u0275\u0275pipeBind2(6, 3, a_r2.published, "yyyy-MM-dd"), " ");
  }
}
function AlbumsForReaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "album-meta-viewer", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.currentAlbum)("showTitle", true);
  }
}
function AlbumsForReaderComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "poem-viewer", 19, 4)(3, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", p_r4)("settings", ctx_r2.albumPoemViewerSettings);
  }
}
function AlbumsForReaderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function AlbumsForReaderComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd()();
  }
}
var AlbumsForReaderComponent = class _AlbumsForReaderComponent extends AlbumsBase {
  router;
  activatedRouter;
  alertService;
  albumsService;
  poemsService;
  basicDataLoaderService;
  waitService;
  langSubjectService;
  title;
  ref;
  constructor(router, activatedRouter, alertService, albumsService, poemsService, basicDataLoaderService, waitService, langSubjectService, title, ref) {
    super(router, activatedRouter, alertService, albumsService, poemsService, basicDataLoaderService, waitService, langSubjectService, title, ref);
    this.router = router;
    this.activatedRouter = activatedRouter;
    this.alertService = alertService;
    this.albumsService = albumsService;
    this.poemsService = poemsService;
    this.basicDataLoaderService = basicDataLoaderService;
    this.waitService = waitService;
    this.langSubjectService = langSubjectService;
    this.title = title;
    this.ref = ref;
  }
  static \u0275fac = function AlbumsForReaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlbumsForReaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(PoemsApp_Controllers_Client.Albums), \u0275\u0275directiveInject(PoemsApp_Controllers_Client.Poems), \u0275\u0275directiveInject(BasicDataLoaderService), \u0275\u0275directiveInject(WaitService), \u0275\u0275directiveInject(LangSubjectService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlbumsForReaderComponent, selectors: [["albums-for-reader"]], features: [\u0275\u0275ProvidersFeature([
    BasicDataLoaderService
  ]), \u0275\u0275InheritDefinitionFeature], decls: 27, vars: 5, consts: () => {
    let i18n_0;
    if (false) {
      const MSG_EXTERNAL_2217344567089649055$$SRC_APP_READER_VIEW_ALBUMS_FOR_READER_COMPONENT_TS_0 = goog.getMsg("Copy album to clipboard");
      i18n_0 = MSG_EXTERNAL_2217344567089649055$$SRC_APP_READER_VIEW_ALBUMS_FOR_READER_COMPONENT_TS_0;
    } else {
      i18n_0 = $localize`Copy album to clipboard`;
    }
    return [["toolbar", ""], ["sidenav", ""], ["sidenavContent", ""], ["ca", "matListOption"], ["poemViewers", ""], [1, "fixed-top"], [3, "ngClass"], [1, "toolbar-spacer"], ["mat-mini-fab", "", "color", "any", "type", "button", "aria-label", "toggle sidebar", 3, "click"], ["hasBackdrop", "false", "scrollable", ""], ["mode", "over", "opened", "", "fixedInViewport", "true", "position", "end", "autoFocus", "false", 1, "fx-50pc-width", 3, "fixedTopGap"], [3, "selectionChange", "multiple"], [3, "value"], ["fixedInViewport", "true"], [3, "data", "showTitle"], [1, "viewer-margin"], ["mat-mini-fab", "", "color", "any", "matTooltip", i18n_0], ["matListItemTitle", ""], ["matListItemLine", ""], [3, "data", "settings"], ["mat-mini-fab", "", "color", "any", "matTooltip", i18n_0, 3, "click"]];
  }, template: function AlbumsForReaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "mat-toolbar", 6, 0);
      \u0275\u0275element(3, "main-buttons")(4, "span", 7);
      \u0275\u0275elementStart(5, "button", 8);
      \u0275\u0275listener("click", function AlbumsForReaderComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275elementStart(6, "mat-icon");
      \u0275\u0275text(7, "reorder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div")(9, "mat-sidenav-container", 9)(10, "mat-sidenav", 10, 1)(12, "div", null, 2)(14, "mat-selection-list", 11);
      \u0275\u0275listener("selectionChange", function AlbumsForReaderComponent_Template_mat_selection_list_selectionChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleAlbumChange($event));
      });
      \u0275\u0275repeaterCreate(15, AlbumsForReaderComponent_For_16_Template, 7, 6, "mat-list-option", 12, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "mat-sidenav-content", 13);
      \u0275\u0275conditionalCreate(18, AlbumsForReaderComponent_Conditional_18_Template, 1, 2, "album-meta-viewer", 14);
      \u0275\u0275element(19, "p");
      \u0275\u0275repeaterCreate(20, AlbumsForReaderComponent_For_21_Template, 4, 2, "div", null, _forTrack0);
      \u0275\u0275element(22, "p");
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275conditionalCreate(24, AlbumsForReaderComponent_Conditional_24_Template, 3, 0, "button", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "p");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "p");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isSmallScreen ? "fx-column-gap-half" : "fx-column-gap-1");
      \u0275\u0275advance(9);
      \u0275\u0275property("fixedTopGap", ctx.mainToolbarHeight);
      \u0275\u0275advance(4);
      \u0275\u0275property("multiple", false);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.albums);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.currentAlbum.id ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.poemsOfAlbum);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.currentAlbum.id && ctx.copyAlbumEnabled ? 24 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    AllMetaServiceModule,
    NGMDModule,
    MatMiniFabButton,
    MatIcon,
    MatSelectionList,
    MatListOption,
    MatListItemLine,
    MatListItemTitle,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    MatTooltip,
    MainButtonsComponent,
    AlbumMetaViewerComponent,
    PoemViewerComponent,
    DatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlbumsForReaderComponent, [{
    type: Component,
    args: [{ selector: "albums-for-reader", changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AllMetaServiceModule,
      NGMDModule,
      MainButtonsComponent,
      AlbumMetaViewerComponent,
      PoemViewerComponent
    ], providers: [
      BasicDataLoaderService
    ], template: `<div class="fixed-top">\r
	<mat-toolbar #toolbar [ngClass]="isSmallScreen?'fx-column-gap-half':'fx-column-gap-1'">\r
		<main-buttons></main-buttons>\r
\r
		<span class="toolbar-spacer"></span>\r
		<button mat-mini-fab color="any" type="button" (click)="toggleSidenav()" aria-label="toggle sidebar">\r
			<mat-icon>reorder</mat-icon>\r
		</button>\r
	</mat-toolbar>\r
</div>\r
<div>\r
	<mat-sidenav-container hasBackdrop="false" scrollable="">\r
		<mat-sidenav #sidenav mode="over" opened class="fx-50pc-width" fixedInViewport="true" position="end"\r
			[fixedTopGap]="mainToolbarHeight" autoFocus="false">\r
			<div #sidenavContent>\r
				<mat-selection-list [multiple]="false" (selectionChange)="handleAlbumChange($event)">\r
					@for (a of albums; track a.id) {\r
					<mat-list-option #ca="matListOption" [value]="a">\r
						<span matListItemTitle>\r
							{{a.title}}\r
						</span>\r
						<span matListItemLine>\r
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{a.published | date:'yyyy-MM-dd'}}\r
						</span>\r
					</mat-list-option>\r
					}\r
				</mat-selection-list>\r
			</div>\r
		</mat-sidenav>\r
		<mat-sidenav-content fixedInViewport="true">\r
			@if (currentAlbum.id) {\r
			<album-meta-viewer [data]="currentAlbum" [showTitle]="true"></album-meta-viewer>\r
			}\r
			<p></p>\r
			@for (p of poemsOfAlbum; track p.id) {\r
			<div>\r
				<poem-viewer #poemViewers [data]="p" [settings]="albumPoemViewerSettings"></poem-viewer>\r
				<p></p>\r
			</div>\r
			}\r
			<p></p>\r
			<!-- In read mode, this button is controled by siteConfig.js -->\r
			<div class="viewer-margin">\r
				@if (currentAlbum.id && copyAlbumEnabled) {\r
				<button mat-mini-fab color="any" (click)="copyToClipboard()" i18n-matTooltip\r
					matTooltip="Copy album to clipboard">\r
					<mat-icon>content_copy</mat-icon>\r
				</button>\r
				}\r
			</div>\r
			<p></p>\r
		</mat-sidenav-content>\r
	</mat-sidenav-container>\r
	<p></p>\r
</div>` }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: AlertService }, { type: PoemsApp_Controllers_Client.Albums }, { type: PoemsApp_Controllers_Client.Poems }, { type: BasicDataLoaderService }, { type: WaitService }, { type: LangSubjectService }, { type: Title }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlbumsForReaderComponent, { className: "AlbumsForReaderComponent", filePath: "src/app/reader-view/albums-for-reader.component.ts", lineNumber: 29 });
})();

// src/app/reader-view/chronicle-for-reader.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ChronicleForReaderComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 30);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.tagsAndSearchShouldHide = false);
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "filter_list");
    \u0275\u0275elementEnd()()();
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-button-toggle", 31);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_29_Template_mat_button_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFilter(1));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("value", 1);
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tree-node", 37);
    \u0275\u0275text(1, " \xA0\xA0\xA0\xA0\xA0\xA0 ");
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_1_Template_button_click_2_listener() {
      const node_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleYearMonthNode(node_r8.data));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(node_r8.data.display);
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tree-node", 37)(1, "button", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_2_Template_button_click_4_listener() {
      const node_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleYearMonthNode(node_r10.data));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Toggle " + node_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.yearTreeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r10.data.display);
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree", 34);
    \u0275\u0275template(1, ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 35)(2, ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_mat_tree_node_2_Template, 6, 3, "mat-tree-node", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("dataSource", ctx_r1.dataSource)("treeControl", ctx_r1.yearTreeControl);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTreeNodeDefWhen", ctx_r1.hasChild);
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-button-toggle", 32, 6);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_30_Template_mat_button_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFilter(2));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ChronicleForReaderComponent_Conditional_0_Conditional_30_ng_template_4_Template, 3, 3, "ng-template", 33);
  }
  if (rf & 2) {
    const treeOverlayTrigger_r11 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("cdkConnectedOverlayOrigin", treeOverlayTrigger_r11)("cdkConnectedOverlayOpen", ctx_r1.isTreeOpen);
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_31_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-option", 45);
    \u0275\u0275listener("selectionChange", function ChronicleForReaderComponent_Conditional_0_Conditional_31_For_11_Template_mat_chip_option_selectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleTagSelectionChange($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    \u0275\u0275property("value", tag_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r14.name, " ");
  }
}
function ChronicleForReaderComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-expansion-panel", 41, 7)(3, "mat-expansion-panel-header")(4, "mat-panel-title")(5, "mat-checkbox", 42);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Conditional_31_Template_mat_checkbox_click_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275i18n(6, 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 43)(8, "mat-chip-listbox", 44, 8);
    \u0275\u0275listener("change", function ChronicleForReaderComponent_Conditional_0_Conditional_31_Template_mat_chip_listbox_change_8_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleTagsChange($event));
    });
    \u0275\u0275repeaterCreate(10, ChronicleForReaderComponent_Conditional_0_Conditional_31_For_11_Template, 2, 2, "mat-chip-option", 25, _forTrack02);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("expanded", true)("hidden", ctx_r1.tagsPanelHidden)("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.multipleTagsControl);
    \u0275\u0275advance(3);
    \u0275\u0275property("multiple", ctx_r1.multipleTagsControl.value);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tags);
  }
}
function ChronicleForReaderComponent_Conditional_0_For_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pb_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", pb_r15.published ? "published" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", \u0275\u0275pipeBind2(2, 2, pb_r15.published ?? pb_r15.date, "yyyy-MM-dd"));
  }
}
function ChronicleForReaderComponent_Conditional_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-option", 25, 9)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ChronicleForReaderComponent_Conditional_0_For_35_Conditional_4_Template, 3, 5, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pb_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", pb_r15.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pb_r15.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usePublished ? 4 : -1);
  }
}
function ChronicleForReaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-sidenav-container", 12)(1, "mat-sidenav", 13, 0);
    \u0275\u0275listener("openedChange", function ChronicleForReaderComponent_Conditional_0_Template_mat_sidenav_openedChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSidenavOpened($event));
    });
    \u0275\u0275elementStart(3, "div", null, 1);
    \u0275\u0275conditionalCreate(5, ChronicleForReaderComponent_Conditional_0_Conditional_5_Template, 4, 0, "div", 14);
    \u0275\u0275elementStart(6, "div", 15, 2)(8, "mat-grid-list", 16)(9, "mat-grid-tile", 17);
    \u0275\u0275text(10, " \xA0\xA0 ");
    \u0275\u0275elementStart(11, "form", 18, 3);
    \u0275\u0275listener("ngSubmit", function ChronicleForReaderComponent_Conditional_0_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r1);
      const f_r4 = \u0275\u0275reference(12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(f_r4.form.valid && ctx_r1.search());
    });
    \u0275\u0275elementStart(13, "mat-form-field", 19)(14, "mat-label");
    \u0275\u0275i18n(15, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 20);
    \u0275\u0275elementStart(17, "button", 21)(18, "mat-icon");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 22);
    \u0275\u0275listener("click", function ChronicleForReaderComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearKeywords());
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "clear");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "mat-grid-tile", 17)(24, "label", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-grid-tile", 17)(27, "mat-button-toggle-group", 24, 4);
    \u0275\u0275conditionalCreate(29, ChronicleForReaderComponent_Conditional_0_Conditional_29_Template, 3, 1, "mat-button-toggle", 25);
    \u0275\u0275conditionalCreate(30, ChronicleForReaderComponent_Conditional_0_Conditional_30_Template, 5, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(31, ChronicleForReaderComponent_Conditional_0_Conditional_31_Template, 12, 5, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-selection-list", 27, 5);
    \u0275\u0275listener("selectionChange", function ChronicleForReaderComponent_Conditional_0_Template_mat_selection_list_selectionChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePoemListChange($event));
    });
    \u0275\u0275repeaterCreate(34, ChronicleForReaderComponent_Conditional_0_For_35_Template, 5, 3, "mat-list-option", 25, _forTrack02);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "mat-sidenav-content", 28);
    \u0275\u0275element(37, "poem-viewer", 29)(38, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.isSmallScreen ? "fx-95pc-width" : "fx-50pc-width")("fixedTopGap", ctx_r1.fixedTopGap);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.tagsAndSearchShouldHide ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", ctx_r1.tagsAndSearchShouldHide);
    \u0275\u0275advance(3);
    \u0275\u0275property("colspan", 3);
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r1.searchBoxPlaceHolder))("formControl", ctx_r1.keywordsControl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.keywordsControl.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.searchInputIcon);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.keywordsControl.value && !ctx_r1.tagNames);
    \u0275\u0275advance(3);
    \u0275\u0275property("colspan", 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.filteredPoemBriefs.length);
    \u0275\u0275advance();
    \u0275\u0275property("colspan", 2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.filterMode)("hideSingleSelectionIndicator", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tags.length > 0 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.poemBriefs.length > 20 && ctx_r1.chronologyEnabled ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tags.length > 0 ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", false);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredPoemBriefs);
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.currentPoem)("settings", ctx_r1.poemViewerSettings);
  }
}
var ChronicleForReaderComponent = class _ChronicleForReaderComponent extends ChronicleViewComponentBase {
  router;
  location;
  activatedRoute;
  poemsService;
  alertService;
  dataComponentDialogService;
  poemDeletedSubjectService;
  poemAssociationsChangedSubjectService;
  staticContentReloadSubjectService;
  langSubjectService;
  title;
  ref;
  scrollDispatcher;
  allMetaService;
  staticContentReloadSubscription;
  constructor(router, location, activatedRoute, poemsService, alertService, dataComponentDialogService, poemDeletedSubjectService, poemAssociationsChangedSubjectService, staticContentReloadSubjectService, langSubjectService, title, ref, scrollDispatcher, allMetaService) {
    super(router, location, activatedRoute, poemsService, alertService, dataComponentDialogService, langSubjectService, title, ref, scrollDispatcher, allMetaService);
    this.router = router;
    this.location = location;
    this.activatedRoute = activatedRoute;
    this.poemsService = poemsService;
    this.alertService = alertService;
    this.dataComponentDialogService = dataComponentDialogService;
    this.poemDeletedSubjectService = poemDeletedSubjectService;
    this.poemAssociationsChangedSubjectService = poemAssociationsChangedSubjectService;
    this.staticContentReloadSubjectService = staticContentReloadSubjectService;
    this.langSubjectService = langSubjectService;
    this.title = title;
    this.ref = ref;
    this.scrollDispatcher = scrollDispatcher;
    this.allMetaService = allMetaService;
    this.staticContentReloadSubscription = this.staticContentReloadSubjectService.getMessage().subscribe((d) => {
      this.currentPoem = {};
      this.filterMode = 0;
      this.clearKeywords();
      this.closeTree();
      this.hideTagsPanel();
      this.ref.detectChanges();
    });
  }
  ngOnDestroy() {
    this.staticContentReloadSubscription.unsubscribe();
    super.ngOnDestroy();
  }
  static \u0275fac = function ChronicleForReaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChronicleForReaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PoemsApp_Controllers_Client.Poems), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(DataComponentDialogService), \u0275\u0275directiveInject(PoemDeletedSubjectService), \u0275\u0275directiveInject(PoemAssociationsChangedSubjectService), \u0275\u0275directiveInject(StaticContentReloadSubjectService), \u0275\u0275directiveInject(LangSubjectService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(AllMetaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChronicleForReaderComponent, selectors: [["chronicle-for-reader"]], features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: () => {
    let i18n_0;
    if (false) {
      const MSG_EXTERNAL_6601618897298769017$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_0 = goog.getMsg("Clear keywords and tags");
      i18n_0 = MSG_EXTERNAL_6601618897298769017$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_0;
    } else {
      i18n_0 = $localize`Clear keywords and tags`;
    }
    let i18n_1;
    if (false) {
      const MSG_EXTERNAL_4580988005648117665$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_1 = goog.getMsg("Search");
      i18n_1 = MSG_EXTERNAL_4580988005648117665$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_1;
    } else {
      i18n_1 = $localize`Search`;
    }
    let i18n_2;
    if (false) {
      const MSG_EXTERNAL_4163272119298020373$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_2 = goog.getMsg("Filters");
      i18n_2 = MSG_EXTERNAL_4163272119298020373$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_2;
    } else {
      i18n_2 = $localize`Filters`;
    }
    let i18n_3;
    if (false) {
      const MSG_EXTERNAL_7889443424988593083$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_3 = goog.getMsg("Chronology");
      i18n_3 = MSG_EXTERNAL_7889443424988593083$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_3;
    } else {
      i18n_3 = $localize`Chronology`;
    }
    let i18n_4;
    if (false) {
      const MSG_EXTERNAL_791984340015993757$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_4 = goog.getMsg("Enable multiple tags");
      i18n_4 = MSG_EXTERNAL_791984340015993757$$SRC_APP_READER_VIEW_CHRONICLE_FOR_READER_COMPONENT_TS_4;
    } else {
      i18n_4 = $localize`Enable multiple tags`;
    }
    return [["sidenav", ""], ["sidenavContent", ""], ["tagsAndSearch", ""], ["f", "ngForm"], ["filterToggleGroup", ""], ["poemsSelectionList", ""], ["treeOverlayTrigger", "cdkOverlayOrigin"], ["tagsExpansionPanel", ""], ["tagChipList", ""], ["ca", "matListOption"], i18n_1, i18n_4, ["hasBackdrop", "false"], ["mode", "over", "opened", "", "fixedInViewport", "true", "position", "end", "autoFocus", "false", 3, "openedChange", "ngClass", "fixedTopGap"], [1, "nav-button-set"], [1, "in-sidenav-sticky", 3, "hidden"], ["name", "search", "cols", "6", "rowHeight", "6.5em"], [3, "colspan"], ["name", "searchForm", 1, "fx-full-width", 3, "ngSubmit"], [1, "fx-95pc-width"], ["matInput", "", 3, "formControl", "placeholder"], ["mat-icon-button", "", "matPrefix", "", "type", "submit", 3, "disabled"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", i18n_0, 3, "click", "disabled"], [1, "float-right"], [3, "value", "hideSingleSelectionIndicator"], [3, "value"], [1, "tags-panel"], ["aria-label", "list of poems", 3, "selectionChange", "multiple"], ["fixedInViewport", "true"], [3, "data", "settings"], ["mat-mini-fab", "", "color", "primary", "matTooltip", i18n_2, 3, "click"], [3, "click", "value"], ["matTooltip", i18n_3, "cdkOverlayOrigin", "", 3, "click", "value"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "scroll-tree", "semi-transparent", 3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["hideToggle", "", 3, "expanded", "hidden", "disabled"], [3, "click", "formControl"], [1, "scroll-tags"], ["selectable", "", 3, "change", "multiple"], [3, "selectionChange", "value"], ["matListItemTitle", ""], ["matListItemLine", "", 3, "ngClass"]];
  }, template: function ChronicleForReaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ChronicleForReaderComponent_Conditional_0_Template, 39, 22, "mat-sidenav-container", 12);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.groupedByYearMonth ? 0 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgForm,
    ReactiveFormsModule,
    FormControlDirective,
    NGMDModule,
    MatButton,
    MatMiniFabButton,
    MatIconButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCheckbox,
    MatChipListbox,
    MatChipOption,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatGridList,
    MatGridTile,
    MatIcon,
    MatInput,
    MatFormField,
    MatLabel,
    MatPrefix,
    MatSuffix,
    MatSelectionList,
    MatListOption,
    MatListItemLine,
    MatListItemTitle,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatTooltip,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    AllMetaServiceModule,
    PoemViewerComponent,
    DatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChronicleForReaderComponent, [{
    type: Component,
    args: [{ selector: "chronicle-for-reader", changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NGMDModule,
      AllMetaServiceModule,
      PoemViewerComponent
    ], providers: [], template: `@if (!groupedByYearMonth) {\r
\r
<mat-sidenav-container hasBackdrop="false">\r
	<mat-sidenav #sidenav mode="over" opened [ngClass]="isSmallScreen ? 'fx-95pc-width' : 'fx-50pc-width'"\r
		fixedInViewport="true" position="end" [fixedTopGap]="fixedTopGap" autoFocus="false"\r
		(openedChange)="handleSidenavOpened($event)">\r
		<div #sidenavContent>\r
			@if (tagsAndSearchShouldHide) {\r
			<div class="nav-button-set">\r
				<button mat-mini-fab (click)="tagsAndSearchShouldHide=false" color="primary" i18n-matTooltip\r
					matTooltip="Filters">\r
					<mat-icon>filter_list</mat-icon>\r
				</button>\r
			</div>\r
			}\r
\r
			<div #tagsAndSearch class="in-sidenav-sticky" [hidden]="tagsAndSearchShouldHide">\r
				<mat-grid-list name="search" cols="6" rowHeight="6.5em">\r
					<mat-grid-tile [colspan]="3">\r
						&nbsp;&nbsp;\r
						<!-- NG material formfield reserves some space below the field for warning/hint, thus some gap -->\r
						<form name="searchForm" (ngSubmit)="f.form.valid && search()" #f="ngForm" class="fx-full-width">\r
							<mat-form-field class="fx-95pc-width">\r
								<mat-label i18n>Search</mat-label>\r
								<input matInput [formControl]="keywordsControl"\r
									placeholder="{{searchBoxPlaceHolder}}" />\r
								<button mat-icon-button matPrefix type="submit"\r
									[disabled]="!keywordsControl.value"><mat-icon>{{searchInputIcon}}</mat-icon>\r
								</button>\r
								<button mat-icon-button matSuffix (click)="clearKeywords()"\r
									[disabled]="!keywordsControl.value && !tagNames" i18n-matTooltip\r
									matTooltip="Clear keywords and tags">\r
									<mat-icon>clear</mat-icon>\r
								</button>\r
							</mat-form-field>\r
						</form>\r
					</mat-grid-tile>\r
					<mat-grid-tile [colspan]="1">\r
						<label class="float-right">{{filteredPoemBriefs.length}}</label>\r
					</mat-grid-tile>\r
					<mat-grid-tile [colspan]="2">\r
						<mat-button-toggle-group #filterToggleGroup [value]="filterMode"\r
							[hideSingleSelectionIndicator]="true">\r
							@if (tags.length>0){\r
							<mat-button-toggle [value]=1 (click)="toggleFilter(1)">\r
								<mat-icon>tag</mat-icon>\r
							</mat-button-toggle>\r
							}\r
							@if (poemBriefs.length>20 && chronologyEnabled) {\r
							<mat-button-toggle [value]=2 (click)="toggleFilter(2)" i18n-matTooltip\r
								matTooltip="Chronology" cdkOverlayOrigin #treeOverlayTrigger="cdkOverlayOrigin">\r
								<mat-icon>account_tree</mat-icon></mat-button-toggle>\r
							<ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="treeOverlayTrigger"\r
								[cdkConnectedOverlayOpen]="isTreeOpen">\r
								<mat-tree [dataSource]="dataSource" [treeControl]="yearTreeControl"\r
									class=" scroll-tree semi-transparent">\r
									<mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>\r
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r
										<button mat-button\r
											(click)="handleYearMonthNode(node.data)">{{node.data.display}}</button>\r
									</mat-tree-node>\r
\r
									<mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>\r
										<button mat-icon-button matTreeNodeToggle\r
											[attr.aria-label]="'Toggle ' + node.name">\r
											<mat-icon class="mat-icon-rtl-mirror">\r
												{{yearTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r
											</mat-icon>\r
										</button>\r
										<button mat-button\r
											(click)="handleYearMonthNode(node.data)">{{node.data.display}}</button>\r
									</mat-tree-node>\r
								</mat-tree>\r
							</ng-template>\r
							}\r
						</mat-button-toggle-group>\r
					</mat-grid-tile>\r
				</mat-grid-list>\r
\r
				@if (tags.length>0) {\r
				<div class="tags-panel">\r
					<mat-expansion-panel #tagsExpansionPanel [expanded]="true" [hidden]="tagsPanelHidden" hideToggle\r
						[disabled]="true">\r
						<mat-expansion-panel-header>\r
							<mat-panel-title>\r
								<mat-checkbox [formControl]="multipleTagsControl" (click)="$event.stopPropagation()"\r
									i18n>Enable multiple tags</mat-checkbox>\r
							</mat-panel-title>\r
\r
						</mat-expansion-panel-header>\r
						<div class="scroll-tags">\r
							<mat-chip-listbox #tagChipList selectable [multiple]="multipleTagsControl.value"\r
								(change)="handleTagsChange($event)">\r
								@for (tag of tags; track tag.id) {\r
								<mat-chip-option [value]="tag.id" (selectionChange)="handleTagSelectionChange($event)">\r
									{{tag.name}}\r
								</mat-chip-option>\r
								}\r
							</mat-chip-listbox>\r
						</div>\r
					</mat-expansion-panel>\r
				</div>\r
				}\r
				<!-- What above should be the same between reader and editor -->\r
\r
			</div>\r
\r
			<mat-selection-list #poemsSelectionList [multiple]="false" (selectionChange)="handlePoemListChange($event)"\r
				aria-label="list of poems">\r
				@for (pb of filteredPoemBriefs; track pb.id) {\r
				<mat-list-option #ca="matListOption" [value]="pb.id">\r
					<span matListItemTitle>{{pb.title}}</span>\r
					@if (usePublished) {\r
					<span [ngClass]="pb.published?'published':'draft'"\r
						matListItemLine>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pb.published??pb.date |\r
						date:'yyyy-MM-dd'}}</span>\r
					}\r
				</mat-list-option>\r
				}\r
			</mat-selection-list>\r
		</div>\r
	</mat-sidenav>\r
	<mat-sidenav-content fixedInViewport="true">\r
		<poem-viewer [data]="currentPoem" [settings]="poemViewerSettings"></poem-viewer>\r
		<p></p>\r
		<!-- P to stop scrollbar -->\r
	</mat-sidenav-content>\r
</mat-sidenav-container>\r
}` }]
  }], () => [{ type: Router }, { type: Location }, { type: ActivatedRoute }, { type: PoemsApp_Controllers_Client.Poems }, { type: AlertService }, { type: DataComponentDialogService }, { type: PoemDeletedSubjectService }, { type: PoemAssociationsChangedSubjectService }, { type: StaticContentReloadSubjectService }, { type: LangSubjectService }, { type: Title }, { type: ChangeDetectorRef }, { type: ScrollDispatcher }, { type: AllMetaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChronicleForReaderComponent, { className: "ChronicleForReaderComponent", filePath: "src/app/reader-view/chronicle-for-reader.component.ts", lineNumber: 30 });
})();

// src/app/reader-view/main-for-reader.component.ts
function MainForReaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function MainForReaderComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toogleChineseST());
    });
    \u0275\u0275element(1, "mat-icon", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", \u0275\u0275interpolate(ctx_r2.jianFanIcon));
  }
}
function MainForReaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function MainForReaderComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reload());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
var MainForReaderComponent = class _MainForReaderComponent extends MainComponentBase {
  activatedRoute;
  alertService;
  poemsService;
  basicDataLoaderService;
  langSubjectService;
  waitService;
  viewSettingsDialogService;
  staticContentReloadSubjectService;
  router;
  ref;
  staticContentReloadSubscription;
  unsubscriber = new Subject();
  get loggedIn() {
    return AUTH_STATUSES.loggedIn;
  }
  get updateAvailable() {
    return APP_STATUSES.swUpdateAvailable;
  }
  get staticReadonlyHasSecondary() {
    if (AppConfigConstants.staticDatas) {
      return AppConfigConstants.staticReadonly && AppConfigConstants.staticDatas[APP_DI_CONFIG.currentStaticDataIndex].secondaryFilename;
    } else {
      return false;
    }
  }
  get convertZHButtonEnabled() {
    return this.isChinese && (this.staticReadonlyHasSecondary || !AppConfigConstants.staticReadonly && !this.loggedIn);
  }
  /**
   * Toggle in UI will update this, and then alter APP_DI_CONFIG.sOrT.
   * True to do conversion either s to t, or t to s.
   */
  get convertZH() {
    return APP_DI_CONFIG.sOrT ? true : false;
  }
  set convertZH(v) {
    if (v) {
      if (APP_DI_CONFIG.defaultWrittenLanguage === "zh-Hans") {
        APP_DI_CONFIG.sOrT = "s2t";
        APP_DI_CONFIG.currentZhWritten = this.convertZH ? "zh-Hant" : "zh-Hans";
        console.debug("Current lang switched to: " + APP_DI_CONFIG.currentZhWritten);
      } else if (APP_DI_CONFIG.defaultWrittenLanguage === "zh-Hant") {
        APP_DI_CONFIG.sOrT = "t2s";
        APP_DI_CONFIG.currentZhWritten = this.convertZH ? "zh-Hans" : "zh-Hant";
        console.debug("Current lang switched to: " + APP_DI_CONFIG.currentZhWritten);
      } else {
        APP_DI_CONFIG.sOrT = void 0;
      }
    } else {
      APP_DI_CONFIG.sOrT = void 0;
      if (APP_DI_CONFIG.defaultWrittenLanguage?.indexOf("zh-") >= 0) {
        APP_DI_CONFIG.currentZhWritten = APP_DI_CONFIG.defaultWrittenLanguage;
        console.debug("Current lang switched back to: " + APP_DI_CONFIG.currentZhWritten);
      }
    }
  }
  get isChinese() {
    return APP_DI_CONFIG.defaultWrittenLanguage.indexOf("zh-") >= 0;
  }
  get jianFanIcon() {
    if (APP_DI_CONFIG.defaultWrittenLanguage === "zh-Hans") {
      return this.convertZH ? "c_jian" : "c_fan";
    } else if (APP_DI_CONFIG.defaultWrittenLanguage === "zh-Hant") {
      return this.convertZH ? "c_fan" : "c_jian";
    }
    return this.convertZH ? "c_jian" : "c_fan";
  }
  constructor(activatedRoute, alertService, poemsService, basicDataLoaderService, langSubjectService, waitService, viewSettingsDialogService, staticContentReloadSubjectService, router, ref) {
    super(activatedRoute, alertService, basicDataLoaderService, langSubjectService, waitService);
    this.activatedRoute = activatedRoute;
    this.alertService = alertService;
    this.poemsService = poemsService;
    this.basicDataLoaderService = basicDataLoaderService;
    this.langSubjectService = langSubjectService;
    this.waitService = waitService;
    this.viewSettingsDialogService = viewSettingsDialogService;
    this.staticContentReloadSubjectService = staticContentReloadSubjectService;
    this.router = router;
    this.ref = ref;
    console.debug("MainForReaderComponent created. IsSmallScreen: " + this.isSmallScreen);
    this.staticContentReloadSubscription = this.staticContentReloadSubjectService.getMessage().subscribe((d) => {
      this.reload();
    });
  }
  ngOnInit() {
    console.debug("MainForReaderComponent init.");
    history.pushState(null, "");
    fromEvent(window, "popstate").pipe(takeUntil(this.unsubscriber)).subscribe((_) => {
      history.pushState(null, "");
      console.debug(`Not allow to go back to login`);
    });
  }
  ngOnDestroy() {
    this.staticContentReloadSubscription.unsubscribe();
    this.unsubscriber.next();
    this.unsubscriber.complete();
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    super.ngAfterViewInitShared();
    this.reload();
    if (AUTH_STATUSES.loggedIn) {
      this.router.navigate(["/authoredit"]);
      this.ref.detectChanges();
      console.info("Signed in already. Editor mode now.");
    }
    this.ref.detectChanges();
  }
  loadBriefs() {
    if (AppConfigConstants.staticReadonly) {
      this.basicDataLoaderService.allMetaService.getBriefsOfPoems().subscribe((data) => {
        if (!APP_DI_CONFIG.usePublished) {
          data.sort((x, y) => x.title.localeCompare(y.title, APP_DI_CONFIG.defaultWrittenLanguage));
        }
        this.poemBriefs = data;
        this.poemsLoadedSignal.set(true);
        this.ref.detectChanges();
        console.debug("loadBriefs of statiReadonly done");
        this.waitService.setWait({ loading: false });
      });
    } else {
      this.poemsService.getBriefsOfPoems(APP_DI_CONFIG.convertZhHandler).subscribe({
        next: (data) => {
          if (data) {
            if (!APP_DI_CONFIG.usePublished) {
              data.sort((x, y) => x.title.localeCompare(y.title, APP_DI_CONFIG.defaultWrittenLanguage));
            }
            this.poemBriefs = data;
            this.poemsLoadedSignal.set(true);
            this.ref.detectChanges();
          }
          this.waitService.setWait({ loading: false });
        },
        error: (error) => {
          this.waitService.setWait({ loading: false });
          this.alertService.error(error);
        }
      });
    }
  }
  showViewSettings() {
    this.viewSettingsDialogService.open();
  }
  /**
   * Toggle for static readonly
   */
  toogleChineseST() {
    this.convertZH = !this.convertZH;
    if (this.staticReadonlyHasSecondary) {
      APP_DI_CONFIG.isSecondary = !APP_DI_CONFIG.isSecondary;
    }
    this.broadcastLangSubject();
    this.reload();
  }
  broadcastLangSubject() {
    if (APP_DI_CONFIG.currentZhWritten) {
      console.info(`broadcastLangSubject currentZhWritten ${APP_DI_CONFIG.currentZhWritten}`);
      this.langSubjectService.emit(APP_DI_CONFIG.currentZhWritten);
    } else {
      this.langSubjectService.emit(APP_DI_CONFIG.defaultWrittenLanguage);
    }
  }
  static \u0275fac = function MainForReaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainForReaderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(PoemsApp_Controllers_Client.Poems), \u0275\u0275directiveInject(BasicDataLoaderService), \u0275\u0275directiveInject(LangSubjectService), \u0275\u0275directiveInject(WaitService), \u0275\u0275directiveInject(ViewSettingsDialogService), \u0275\u0275directiveInject(StaticContentReloadSubjectService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainForReaderComponent, selectors: [["main-for-reader"]], features: [\u0275\u0275ProvidersFeature([
    BasicDataLoaderService,
    ViewSettingsDialogService,
    LoginDialogService
  ]), \u0275\u0275InheritDefinitionFeature], decls: 15, vars: 6, consts: [["toolbar", ""], ["chronicle", ""], [1, "fixed-top", "semi-transparent", "toolbar-custom", 3, "ngClass"], ["mat-mini-fab", "", "color", "any", "matSuffix", "", "aria-label", "toggle between Chinese simplified and traditional"], ["mat-mini-fab", "", "color", "any", "type", "button", "aria-label", "refresh", "matTooltip", "Reload data"], [1, "toolbar-spacer"], ["type", "button", "mat-mini-fab", "", "color", "any", "aria-label", "settings", 3, "click"], ["mat-mini-fab", "", "color", "any", "type", "button", "aria-label", "toggle sidebar", 3, "click"], [3, "poemBriefs", "tagIdSignal", "poemsLoadedSignal"], ["mat-mini-fab", "", "color", "any", "matSuffix", "", "aria-label", "toggle between Chinese simplified and traditional", 3, "click"], [3, "svgIcon"], ["mat-mini-fab", "", "color", "any", "type", "button", "aria-label", "refresh", "matTooltip", "Reload data", 3, "click"]], template: function MainForReaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "mat-toolbar", 2, 0);
      \u0275\u0275element(2, "main-buttons");
      \u0275\u0275conditionalCreate(3, MainForReaderComponent_Conditional_3_Template, 2, 2, "button", 3);
      \u0275\u0275conditionalCreate(4, MainForReaderComponent_Conditional_4_Template, 3, 0, "button", 4);
      \u0275\u0275element(5, "span", 5);
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function MainForReaderComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showViewSettings());
      });
      \u0275\u0275elementStart(7, "mat-icon");
      \u0275\u0275text(8, "settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function MainForReaderComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275elementStart(10, "mat-icon");
      \u0275\u0275text(11, "reorder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div");
      \u0275\u0275element(13, "chronicle-for-reader", 8, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.isSmallScreen ? "fx-column-gap-half" : "fx-column-gap-1");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.convertZHButtonEnabled ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isStaticReadonly && !ctx.updateAvailable ? 4 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("poemBriefs", ctx.poemBriefs)("tagIdSignal", ctx.tagIdSignal)("poemsLoadedSignal", ctx.poemsLoadedSignal);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    NGMDModule,
    MatMiniFabButton,
    MatIcon,
    MatSuffix,
    MatToolbar,
    MatTooltip,
    AllMetaServiceModule,
    AuthServicesModule,
    ChronicleForReaderComponent,
    MainButtonsComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainForReaderComponent, [{
    type: Component,
    args: [{ selector: "main-for-reader", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NGMDModule,
      AllMetaServiceModule,
      AuthServicesModule,
      ChronicleForReaderComponent,
      MainButtonsComponent
    ], providers: [
      BasicDataLoaderService,
      ViewSettingsDialogService,
      LoginDialogService
    ], template: `<mat-toolbar #toolbar [ngClass]="isSmallScreen?'fx-column-gap-half':'fx-column-gap-1'"\r
	class="fixed-top semi-transparent toolbar-custom">\r
	<main-buttons></main-buttons>\r
\r
	@if (convertZHButtonEnabled) {\r
	<button mat-mini-fab color="any" matSuffix (click)="toogleChineseST()"\r
		aria-label="toggle between Chinese simplified and traditional">\r
		<mat-icon svgIcon="{{jianFanIcon}}"></mat-icon>\r
	</button>\r
	}\r
\r
	@if (!isStaticReadonly && !updateAvailable) {\r
	<button mat-mini-fab color="any" type="button" (click)="reload()" aria-label="refresh" matTooltip="Reload data">\r
		<mat-icon>refresh</mat-icon>\r
	</button>\r
	}\r
	<span class="toolbar-spacer"></span>\r
	<button type="button" mat-mini-fab color="any" (click)="showViewSettings()" aria-label="settings">\r
		<mat-icon>settings</mat-icon>\r
	</button>\r
	<button mat-mini-fab color="any" type="button" (click)="toggleSidenav()" aria-label="toggle sidebar">\r
		<mat-icon>reorder</mat-icon>\r
	</button>\r
</mat-toolbar>\r
<div>\r
	<chronicle-for-reader #chronicle [poemBriefs]="poemBriefs" [tagIdSignal]="tagIdSignal" [poemsLoadedSignal]="poemsLoadedSignal"></chronicle-for-reader>\r
</div>` }]
  }], () => [{ type: ActivatedRoute }, { type: AlertService }, { type: PoemsApp_Controllers_Client.Poems }, { type: BasicDataLoaderService }, { type: LangSubjectService }, { type: WaitService }, { type: ViewSettingsDialogService }, { type: StaticContentReloadSubjectService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainForReaderComponent, { className: "MainForReaderComponent", filePath: "src/app/reader-view/main-for-reader.component.ts", lineNumber: 41 });
})();

// src/app/reader-view/reader-index.component.ts
var ReaderIndexComponent = class _ReaderIndexComponent extends ModuleIndexComponentBase {
  constructor() {
    super();
  }
  static \u0275fac = function ReaderIndexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReaderIndexComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReaderIndexComponent, selectors: [["reader-index"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "content-top-padding-relative"]], template: function ReaderIndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReaderIndexComponent, [{
    type: Component,
    args: [{ selector: "reader-index", standalone: true, imports: [
      CommonModule,
      RouterOutlet
    ], template: '<div class="content-top-padding-relative">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReaderIndexComponent, { className: "ReaderIndexComponent", filePath: "src/app/reader-view/reader-index.component.ts", lineNumber: 14 });
})();

// src/app/reader-view/reader-view.routes.ts
var READ_VIEW_ROUTES = [
  { path: "author/:authorIdx", component: MainForReaderComponent },
  {
    path: "",
    component: ReaderIndexComponent,
    children: [
      { path: "", component: MainForReaderComponent },
      { path: "chronicle", component: MainForReaderComponent },
      { path: "albums", component: AlbumsForReaderComponent }
    ]
  }
];
export {
  READ_VIEW_ROUTES
};
//# sourceMappingURL=reader-view.routes-2KW4TE6B.js.map
