import {
  ConfirmUploadService,
  FilesDownload
} from "./chunk-KVR7JZTW.js";
import {
  APP_DI_CONFIG,
  AUTH_STATUSES,
  AlertService,
  AppConfigConstants,
  AuthServicesModule,
  BreakpointObserver,
  Breakpoints,
  BrowserModule,
  CommonModule,
  Component,
  DIALOG_ACTIONS_ALIGN,
  DomSanitizer,
  EditPoemSubjectService,
  Fonlow_Auth_Controllers_Client,
  FormsModule,
  HTTP_INTERCEPTORS,
  HashLocationStrategy,
  HttpClient,
  Inject,
  Injectable,
  LOCALE_ID,
  LangSubjectService,
  LocationStrategy,
  LoginDialogService,
  LoginFor401Abstract,
  LoginStatus,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatIconRegistry,
  NGMDModule,
  NavigationEnd,
  NewAlbumAddedSubjectService,
  NewAnnotationAddedSubjectService,
  NewPoemAddedSubjectService,
  NewTagAddedSubjectService,
  NgClass,
  NgModule,
  NgxDropzoneModule,
  NmceComponentsModule,
  Nmce_UI_ServicesModule,
  NotFoundComponent,
  PathLocationStrategy,
  PoemAnnotationsChangedSubjectService,
  PoemAssociationsChangedSubjectService,
  PoemDeletedSubjectService,
  PoemModifiedSubjectService,
  PoemTagsChangedSubjectService,
  PoemsApp_Controllers_Client,
  ReactiveFormsModule,
  Router,
  RouterModule,
  RouterOutlet,
  STARTUP_STATUSES,
  SearchByAnnotationSubjectService,
  ServiceWorkerModule,
  StaticContentReloadSubjectService,
  Title,
  TokenInterceptor,
  UpdateAppService,
  WaitComponent,
  bootstrapApplication,
  enableProdMode,
  environment,
  importProvidersFrom,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵpureFunction2
} from "./chunk-422HAUG6.js";

// src/app/_services/services.module.ts
var ServicesModule = class _ServicesModule {
  static \u0275fac = function ServicesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    NewTagAddedSubjectService,
    PoemTagsChangedSubjectService,
    NewAlbumAddedSubjectService,
    PoemDeletedSubjectService,
    NewAnnotationAddedSubjectService,
    PoemAnnotationsChangedSubjectService,
    PoemAssociationsChangedSubjectService,
    LangSubjectService,
    EditPoemSubjectService,
    SearchByAnnotationSubjectService,
    NewPoemAddedSubjectService,
    PoemModifiedSubjectService,
    StaticContentReloadSubjectService,
    ConfirmUploadService
  ], imports: [
    CommonModule,
    FormsModule,
    NGMDModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        NGMDModule,
        ReactiveFormsModule,
        NgxDropzoneModule
      ],
      declarations: [],
      exports: [],
      providers: [
        NewTagAddedSubjectService,
        PoemTagsChangedSubjectService,
        NewAlbumAddedSubjectService,
        PoemDeletedSubjectService,
        NewAnnotationAddedSubjectService,
        PoemAnnotationsChangedSubjectService,
        PoemAssociationsChangedSubjectService,
        LangSubjectService,
        EditPoemSubjectService,
        SearchByAnnotationSubjectService,
        NewPoemAddedSubjectService,
        PoemModifiedSubjectService,
        StaticContentReloadSubjectService,
        ConfirmUploadService
      ]
    }]
  }], null, null);
})();

// src/app/_guards/auth.guard.ts
var AuthGuard = (route, state) => {
  if (AUTH_STATUSES.username) {
    return true;
  }
  const router = inject(Router);
  router.navigate(["/"], { queryParams: { returnUrl: state.url } });
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", loadChildren: () => import("./reader-view.routes-2KW4TE6B.js").then((m) => m.READ_VIEW_ROUTES) },
  { path: "author/:authorIdx", loadChildren: () => import("./reader-view.routes-2KW4TE6B.js").then((m) => m.READ_VIEW_ROUTES) },
  //{ path: 's2t', loadChildren: () => import('./reader-view/reader-view.module').then(m => m.ReaderViewModule) },
  //{ path: 't2s', loadChildren: () => import('./reader-view/reader-view.module').then(m => m.ReaderViewModule) },
  { path: "authoredit", loadChildren: () => import("./editor-view.routes-LIEA4W4V.js").then((m) => m.EDITOR_VIEW_ROUTES), canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent }
  // This must be the last
];

// src/app/home/home.module.ts
var HomeModule = class _HomeModule {
  static \u0275fac = function HomeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NGMDModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NGMDModule
      ]
    }]
  }], null, null);
})();

// src/app/_authServices/langInterceptor.ts
var LangInterceptor = class _LangInterceptor {
  locale;
  constructor(locale) {
    this.locale = locale;
  }
  intercept(req, next) {
    return next.handle(req.clone({
      setHeaders: {
        "Accept-Language": this.locale
      }
    }));
  }
  static \u0275fac = function LangInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LangInterceptor)(\u0275\u0275inject(LOCALE_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LangInterceptor, factory: _LangInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LangInterceptor, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [LOCALE_ID]
  }] }], null);
})();

// src/app/httpServices.module.ts
function poemsClientFactory(http) {
  return new PoemsApp_Controllers_Client.Poems(AppConfigConstants.apiBaseUri, http);
}
function albumsClientFactory(http) {
  return new PoemsApp_Controllers_Client.Albums(AppConfigConstants.apiBaseUri, http);
}
function tagsClientFactory(http) {
  return new PoemsApp_Controllers_Client.Tags(AppConfigConstants.apiBaseUri, http);
}
function annotationsClientFactory(http) {
  return new PoemsApp_Controllers_Client.Annotations(AppConfigConstants.apiBaseUri, http);
}
function numberedAnnotationsClientFactory(http) {
  return new PoemsApp_Controllers_Client.NumberedAnnotations(AppConfigConstants.apiBaseUri, http);
}
function filesClientFactory(http) {
  return new PoemsApp_Controllers_Client.Files(AppConfigConstants.apiBaseUri, http);
}
function accountClientFactory(http) {
  return new Fonlow_Auth_Controllers_Client.Account(AppConfigConstants.apiBaseUri, http);
}
function keyValuesClientFactory(http) {
  return new PoemsApp_Controllers_Client.KeyValues(AppConfigConstants.apiBaseUri, http);
}
function FielsDownloadClientFactory(http) {
  return new FilesDownload(AppConfigConstants.apiBaseUri, http);
}
var HttpServicesModule = class _HttpServicesModule {
  static forRoot() {
    return {
      ngModule: _HttpServicesModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LangInterceptor,
          multi: true
        },
        {
          provide: PoemsApp_Controllers_Client.Poems,
          useFactory: poemsClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.Tags,
          useFactory: tagsClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.Annotations,
          useFactory: annotationsClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.NumberedAnnotations,
          useFactory: numberedAnnotationsClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.Albums,
          useFactory: albumsClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.KeyValues,
          useFactory: keyValuesClientFactory,
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.Translate,
          useFactory: (http) => new PoemsApp_Controllers_Client.Translate(AppConfigConstants.apiBaseUri, http),
          deps: [HttpClient]
        },
        {
          provide: PoemsApp_Controllers_Client.Files,
          useFactory: filesClientFactory,
          deps: [HttpClient]
        },
        {
          provide: Fonlow_Auth_Controllers_Client.Account,
          useFactory: accountClientFactory,
          deps: [HttpClient]
        },
        {
          provide: FilesDownload,
          useFactory: FielsDownloadClientFactory,
          deps: [HttpClient]
        }
        // {
        // 	provide: 'IAuthService',
        // 	useFactory: AuthClientFactory,
        // 	deps: [HttpClient],
        // },
      ]
    };
  }
  static \u0275fac = function HttpServicesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpServicesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HttpServicesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpServicesModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/app.config.ts
function getFormFieldAppearance() {
  if (AppConfigConstants.formFieldAppearance == 0) {
    return APP_DI_CONFIG.isAppleDevice ? "outline" : "fill";
  } else if (AppConfigConstants.formFieldAppearance == 1) {
    return "fill";
  } else {
    return "outline";
  }
}
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes), prefer inside importProvidersFrom
    importProvidersFrom(
      BrowserModule,
      //AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ServiceWorkerModule.register(document.baseURI + "ngsw-worker.js", {
        //enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        //registrationStrategy: 'registerWhenStable:30000'
        registrationStrategy: "registerImmediately"
      }),
      NGMDModule,
      HttpServicesModule.forRoot(),
      AuthServicesModule,
      ServicesModule,
      Nmce_UI_ServicesModule,
      NmceComponentsModule,
      HomeModule,
      RouterModule.forRoot(routes, {
        //useHash: false, // optional, since PathLocationStrategy is default
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled"
      })
    ),
    {
      provide: LocationStrategy,
      useClass: AppConfigConstants.hashLocationStrategy ? HashLocationStrategy : PathLocationStrategy
    },
    {
      provide: "BACKEND_URLS",
      useValue: [APP_DI_CONFIG.apiBaseUri]
    },
    //nmce dialogs will use this.
    {
      provide: DIALOG_ACTIONS_ALIGN,
      useValue: AppConfigConstants.actionsAlign ?? "end"
    },
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: LoginFor401Abstract,
      useClass: LoginDialogService
    },
    {
      provide: "NotFoundRoutingMessage",
      useValue: ["Page Not Found. Please check routing."]
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: getFormFieldAppearance()
      }
    }
  ]
};

// src/app/app-root.component.ts
var _c0 = (a0, a1) => ({ "fx-full-width": a0, "fx-95pc-width": a1 });
var AppRootComponent = class _AppRootComponent {
  titleService;
  alertService;
  router;
  sanitizer;
  iconRegistry;
  actionsAlign;
  updateAppService;
  title = APP_DI_CONFIG.siteName;
  htmlVersion;
  htmlBuildTime;
  get isSmallScreen() {
    return APP_DI_CONFIG.isSmallScreen;
  }
  displayNameMap = /* @__PURE__ */ new Map([
    [Breakpoints.XSmall, "XSmall"],
    [Breakpoints.Small, "Small"],
    [Breakpoints.Medium, "Medium"],
    [Breakpoints.Large, "Large"],
    [Breakpoints.XLarge, "XLarge"]
  ]);
  chronologyEnabled;
  authBroadcastChannel = new BroadcastChannel("fonlow.auth.channel");
  /**
   * Initialize some root level services or components
   */
  constructor(titleService, alertService, router, sanitizer, iconRegistry, breakpointObserver, actionsAlign, updateAppService) {
    this.titleService = titleService;
    this.alertService = alertService;
    this.router = router;
    this.sanitizer = sanitizer;
    this.iconRegistry = iconRegistry;
    this.actionsAlign = actionsAlign;
    this.updateAppService = updateAppService;
    iconRegistry.setDefaultFontSetClass("material-symbols-outlined");
    APP_DI_CONFIG.DialogActionsAlign = actionsAlign;
    this.alertService.initOnce();
    const smallScreenBreakpoint = AppConfigConstants.smallScreenBreakpoint ?? "XSmall";
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          const currentScreenSize = this.displayNameMap.get(query) ?? "Unknown";
          APP_DI_CONFIG.isSmallScreen = currentScreenSize.indexOf(smallScreenBreakpoint) >= 0;
          console.debug("isSmallScreen: " + APP_DI_CONFIG.isSmallScreen);
          if (APP_DI_CONFIG.isSmallScreen) {
            if (APP_DI_CONFIG.chronologyEnabled) {
              this.chronologyEnabled = APP_DI_CONFIG.chronologyEnabled;
              APP_DI_CONFIG.chronologyEnabled = false;
            }
          } else {
            if (this.chronologyEnabled) {
              APP_DI_CONFIG.chronologyEnabled = this.chronologyEnabled;
            }
          }
        }
      }
    });
    this.displayNewVersions();
    this.authBroadcastChannel.onmessage = (ev) => {
      if (ev.data.senderId !== STARTUP_STATUSES.localTabId) {
        if (ev.data.status === LoginStatus.LoggedIn) {
          if (this.inAlbumView) {
            this.router.navigate(["/authoredit/albums"]);
          } else {
            this.router.navigate(["/authoredit"]);
          }
          console.info("App Logged In");
        } else if (ev.data.status === LoginStatus.LoggedOut) {
          if (this.inAlbumView) {
            this.router.navigate(["/albums"]);
          } else {
            this.router.navigate(["/"]);
          }
          console.info("App Logged Out");
        }
      }
    };
  }
  ngOnInit() {
    this.updateAppService.checkAvailable();
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    const icons = [
      { name: "c_fan", path: "assets/icons/fan.svg" },
      { name: "c_jian", path: "assets/icons/jian.svg" }
      //{ name: 'c_clipboard_copy', path: 'assets/icons/clipboard-copy.svg' },
    ];
    for (const k of icons) {
      this.iconRegistry.addSvgIcon(k.name, this.sanitizer.bypassSecurityTrustResourceUrl(k.path));
    }
  }
  ngAfterViewInit() {
  }
  get loggedIn() {
    return AUTH_STATUSES.loggedIn;
  }
  ngOnDestroy() {
  }
  displayNewVersions() {
    const oldHtmlVersion = localStorage["Fonlow.PoemsCollection.HtmlVersion"];
    if (oldHtmlVersion !== APP_DI_CONFIG.version) {
      this.htmlVersion = APP_DI_CONFIG.version;
      localStorage["Fonlow.PoemsCollection.HtmlVersion"] = APP_DI_CONFIG.version;
    }
    const oldHtmlBuildTime = localStorage["Fonlow.PoemsCollection.HtmlBuildTime"];
    if (oldHtmlBuildTime !== APP_DI_CONFIG.buildTime?.toString()) {
      this.htmlBuildTime = APP_DI_CONFIG.buildTime;
      localStorage["Fonlow.PoemsCollection.HtmlBuildTime"] = APP_DI_CONFIG.buildTime;
    }
    if (this.htmlBuildTime || this.htmlVersion) {
      this.alertService.success(APP_DI_CONFIG.siteName + " is updated");
    }
  }
  get inAlbumView() {
    return this.router.url.indexOf("albums") >= 0;
  }
  static \u0275fac = function AppRootComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRootComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MatIconRegistry), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(DIALOG_ACTIONS_ALIGN), \u0275\u0275directiveInject(UpdateAppService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppRootComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[1, "fixed-top-above"], [1, "container-fluid", "app-container", 3, "ngClass"]], template: function AppRootComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "wait");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c0, ctx.isSmallScreen, !ctx.isSmallScreen));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterOutlet, NmceComponentsModule, WaitComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRootComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      CommonModule,
      RouterModule,
      NmceComponentsModule
    ], template: `<div class="fixed-top-above">\r
	<wait></wait>\r
</div>\r
<div class="container-fluid app-container" [ngClass]="{'fx-full-width': isSmallScreen, 'fx-95pc-width': !isSmallScreen}">\r
	<router-outlet></router-outlet>\r
</div>\r
\r
` }]
  }], () => [{ type: Title }, { type: AlertService }, { type: Router }, { type: DomSanitizer }, { type: MatIconRegistry }, { type: BreakpointObserver }, { type: void 0, decorators: [{
    type: Inject,
    args: [DIALOG_ACTIONS_ALIGN]
  }] }, { type: UpdateAppService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppRootComponent, { className: "AppRootComponent", filePath: "src/app/app-root.component.ts", lineNumber: 24 });
})();

// src/main.ts
if (environment.production) {
  console.info("enableProdMode()");
  enableProdMode();
  if (window) {
    window.console.debug = function() {
    };
  }
}
console.debug("AppConfigConstants: " + JSON.stringify(AppConfigConstants));
switchPrebuiltTheme(AppConfigConstants.themeName ?? "azure-blue");
console.debug("languages: " + JSON.stringify(window.navigator.language));
APP_DI_CONFIG.init();
bootstrapApplication(AppRootComponent, appConfig).catch((err) => console.error(err));
function switchPrebuiltTheme(themeName) {
  const head = document.getElementsByTagName("head")[0];
  const existingLink = document.getElementById("material-theme");
  if (existingLink) {
    existingLink.href = `assets/themes/${themeName}.css`;
  } else {
    const link = document.createElement("link");
    link.id = "material-theme";
    link.rel = "stylesheet";
    link.href = `assets/themes/${themeName}.css`;
    head.appendChild(link);
  }
}
//# sourceMappingURL=main.js.map
