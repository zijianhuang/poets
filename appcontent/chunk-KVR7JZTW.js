import {
  APP_DI_CONFIG,
  CommonModule,
  Component,
  ConfirmService,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  Inject,
  Injectable,
  Input,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatFormField,
  MatInput,
  MatLabel,
  MaxLengthValidator,
  NGMDModule,
  NgControlStatus,
  NgModel,
  NgxDropzoneComponent,
  NgxDropzoneLabelDirective,
  NgxDropzoneModule,
  NgxDropzonePreviewComponent,
  Pipe,
  ReactiveFormsModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-422HAUG6.js";

// src/app/_services/byteFormat.pipe.ts
var ByteFormatPipe = class _ByteFormatPipe {
  static unit = "Byte";
  static formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return "0 " + this.unit;
    }
    const B = this.unit.charAt(0);
    const k = 1024, dm = decimals || 2, sizes = [this.unit, "K" + B, "M" + B, "G" + B, "T" + B, "P" + B, "E" + B, "Z" + B, "Y" + B], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  transform(value, args) {
    if (!!value) {
      value = _ByteFormatPipe.formatBytes(+value, +args);
    }
    return value;
  }
  static \u0275fac = function ByteFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ByteFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "byteFormat", type: _ByteFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ByteFormatPipe, [{
    type: Pipe,
    args: [{
      name: "byteFormat",
      standalone: true
    }]
  }], null, null);
})();

// src/app/_services/confirmUpload.component.ts
function ConfirmUploadComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-dropzone-preview", 8);
    \u0275\u0275listener("removed", function ConfirmUploadComponent_For_10_Template_ngx_dropzone_preview_removed_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileRemove(f_r2));
    });
    \u0275\u0275elementStart(1, "ngx-dropzone-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", f_r2.name, " (", f_r2.type, ")");
  }
}
function ConfirmUploadComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getFileSizeWarning());
  }
}
function ConfirmUploadComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "byteFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 9)(7, "mat-label");
    \u0275\u0275i18n(8, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmUploadComponent_Conditional_11_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.name, $event) || (ctx_r2.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 9)(11, "mat-label");
    \u0275\u0275i18n(12, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmUploadComponent_Conditional_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.description, $event) || (ctx_r2.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ConfirmUploadComponent_Conditional_11_Conditional_14_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("MIME Type: ", ctx_r2.mimeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Size: ", \u0275\u0275pipeBind1(5, 5, ctx_r2.file.size));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fileSize && ctx_r2.fileSize > 3e7 ? 14 : -1);
  }
}
var ConfirmUploadComponent = class _ConfirmUploadComponent {
  dialogRef;
  confirmService;
  title;
  body;
  mimeType;
  file;
  name;
  description;
  fileSize;
  acceptFilter = "";
  files = [];
  get isSmallScreen() {
    return APP_DI_CONFIG.isSmallScreen;
  }
  get actionsAlign() {
    return APP_DI_CONFIG.DialogActionsAlign;
  }
  fileOperationHint = $localize`Drop file here, or click to select from file system`;
  constructor(data, dialogRef, confirmService) {
    this.dialogRef = dialogRef;
    this.confirmService = confirmService;
    this.title = data.title;
    this.body = data.body;
    this.acceptFilter = data.acceptFilter ?? "image/*,video/*,text/*,audio/*";
  }
  ngOnInit() {
    if (this.isSmallScreen) {
      this.fileOperationHint = `Click to select from device file system`;
    }
  }
  confirm() {
    if (!this.file) {
      console.warn("Why confirm? while file missing.");
      return;
    }
    if (this.mimeType) {
      this.dialogRef.close({ file: this.file, mimeType: this.mimeType, name: this.name, description: this.description });
    } else {
      this.confirmService.open($localize`Warning`, $localize`File type of selected file ${this.file.name} is unrecognized. If you upload it then it may not be displayed in the future. Do you want to upload it?`).subscribe((data) => {
        if (data) {
          this.dialogRef.close({ file: this.file, mimeType: this.mimeType, name: this.name, description: this.description });
        } else {
          this.dialogRef.close();
        }
      });
    }
  }
  //fileChangeListener($event: any) {
  //	const fileList: FileList = $event.target.files;
  //	if (fileList.length > 0) {
  //		this.file = fileList[0];
  //		this.mimeType = this.file.type; // if file.type is not good enough, this might help: https://stackoverflow.com/questions/18299806/how-to-check-file-mime-type-with-javascript-before-upload
  //		this.name = this.file.name;
  //		this.fileSize = this.file.size;
  //	}
  //}
  getFileSizeWarning() {
    if (!this.fileSize || !this.file?.size) {
      return "";
    }
    const MB100 = 2 ^ 24;
    return this.fileSize >= MB100 ? $localize`File size is ${ByteFormatPipe.formatBytes(this.file.size)}, and it is currently too large to be uploaded.` : $localize`File size is ${ByteFormatPipe.formatBytes(this.file.size)}, and it may take sometime to upload.`;
  }
  onFileSelect(event) {
    console.log(event);
    if (event.addedFiles.length > 0) {
      this.files = [];
      this.file = event.addedFiles[0];
      this.files.push(this.file);
      this.name = this.file.name;
      this.fileSize = this.file.size;
      this.mimeType = this.file.type;
    }
  }
  onFileRemove(file) {
    console.log(file);
  }
  static \u0275fac = function ConfirmUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmUploadComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(ConfirmService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmUploadComponent, selectors: [["ng-component"]], inputs: { title: "title", body: "body" }, decls: 17, vars: 8, consts: () => {
    let i18n_0;
    if (false) {
      const MSG_EXTERNAL_8953033926734869941$$SRC_APP__SERVICES_CONFIRMUPLOAD_COMPONENT_TS_0 = goog.getMsg("Name");
      i18n_0 = MSG_EXTERNAL_8953033926734869941$$SRC_APP__SERVICES_CONFIRMUPLOAD_COMPONENT_TS_0;
    } else {
      i18n_0 = $localize`Name`;
    }
    let i18n_1;
    if (false) {
      const MSG_EXTERNAL_4902817035128594900$$SRC_APP__SERVICES_CONFIRMUPLOAD_COMPONENT_TS_1 = goog.getMsg("Description");
      i18n_1 = MSG_EXTERNAL_4902817035128594900$$SRC_APP__SERVICES_CONFIRMUPLOAD_COMPONENT_TS_1;
    } else {
      i18n_1 = $localize`Description`;
    }
    return [i18n_0, i18n_1, ["mat-dialog-title", ""], [3, "change", "multiple", "accept"], [3, "removable"], [3, "align"], ["type", "button", "mat-raised-button", "", "matDialogClose", ""], ["type", "button", "mat-raised-button", "", 3, "click", "disabled"], [3, "removed", "removable"], [1, "fx-full-width"], ["matInput", "", "maxlength", "128", "spellcheck", "false", 3, "ngModelChange", "ngModel"], ["matInput", "", "maxlength", "512", 3, "ngModelChange", "ngModel"]];
  }, template: function ConfirmUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "strong");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ngx-dropzone", 3);
      \u0275\u0275listener("change", function ConfirmUploadComponent_Template_ngx_dropzone_change_6_listener($event) {
        return ctx.onFileSelect($event);
      });
      \u0275\u0275elementStart(7, "ngx-dropzone-label");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, ConfirmUploadComponent_For_10_Template, 3, 3, "ngx-dropzone-preview", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, ConfirmUploadComponent_Conditional_11_Template, 15, 7, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-dialog-actions", 5)(13, "button", 6);
      \u0275\u0275text(14, "No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function ConfirmUploadComponent_Template_button_click_15_listener() {
        return ctx.confirm();
      });
      \u0275\u0275text(16, "Yes");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.body);
      \u0275\u0275advance();
      \u0275\u0275property("multiple", false)("accept", ctx.acceptFilter);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.fileOperationHint);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.files);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.file ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("align", ctx.actionsAlign);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.file);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NGMDModule, MatButton, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatInput, MatFormField, MatLabel, ReactiveFormsModule, NgxDropzoneModule, NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, ByteFormatPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmUploadComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [
      CommonModule,
      FormsModule,
      NGMDModule,
      ReactiveFormsModule,
      NgxDropzoneModule,
      ByteFormatPipe
    ], template: '<div mat-dialog-title>\r\n	<strong>{{ title }}</strong>\r\n</div>\r\n<mat-dialog-content>\r\n	<p>{{ body }}</p>\r\n	<!--<input id="uploadFile" name="uploadFile" type="file" (change)="fileChangeListener($event)"\r\n		   [accept]="acceptFilter" matTooltip="Filtered for doc, Excel, PowerPoint, zip, image, video, audio" />-->\r\n	<ngx-dropzone (change)="onFileSelect($event)" [multiple]="false" [accept]="acceptFilter">\r\n		<ngx-dropzone-label>{{fileOperationHint}}</ngx-dropzone-label>\r\n		@for (f of files; track f) {\r\n		<ngx-dropzone-preview [removable]="true" (removed)="onFileRemove(f)">\r\n			<ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\r\n		</ngx-dropzone-preview>\r\n		}\r\n	</ngx-dropzone>\r\n	@if (file) {\r\n	<div>\r\n		<p>MIME Type: {{ mimeType }}</p>\r\n		<p>Size: {{ file.size | byteFormat }}</p>\r\n		<mat-form-field class="fx-full-width">\r\n			<mat-label i18n>Name</mat-label>\r\n			<input matInput [(ngModel)]="name" maxlength="128" spellcheck="false">\r\n		</mat-form-field>\r\n		<mat-form-field class="fx-full-width">\r\n			<mat-label i18n>Description</mat-label>\r\n			<input matInput [(ngModel)]="description" maxlength="512">\r\n		</mat-form-field>\r\n		@if (fileSize && fileSize> 30000000) {\r\n		<p>{{ getFileSizeWarning() }}</p>\r\n		}\r\n	</div>\r\n	}\r\n</mat-dialog-content>\r\n<mat-dialog-actions [align]="actionsAlign">\r\n	<button type="button" mat-raised-button matDialogClose>No</button>\r\n	<button type="button" mat-raised-button (click)="confirm()" [disabled]="!file">Yes</button>\r\n</mat-dialog-actions>\r\n' }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: ConfirmService }], { title: [{
    type: Input
  }], body: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmUploadComponent, { className: "ConfirmUploadComponent", filePath: "src/app/_services/confirmupload.component.ts", lineNumber: 22 });
})();
var ConfirmUploadService = class _ConfirmUploadService {
  dialog;
  modalRef;
  constructor(dialog) {
    this.dialog = dialog;
  }
  open(title, body, acceptFilter) {
    this.modalRef = this.dialog.open(ConfirmUploadComponent, { disableClose: true, data: { title, body, acceptFilter } });
    console.debug("acceptFiltersssssss: " + acceptFilter);
    return this.modalRef.afterClosed();
  }
  openDefault() {
    return this.open($localize`Confirm Upload`, $localize`Select a file to upload.`);
  }
  static \u0275fac = function ConfirmUploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmUploadService)(\u0275\u0275inject(MatDialog));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmUploadService, factory: _ConfirmUploadService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmUploadService, [{
    type: Injectable
  }], () => [{ type: MatDialog }], null);
})();

// src/clientapi/FilesDownload.ts
var FilesDownload = class _FilesDownload {
  baseUri;
  http;
  constructor(baseUri = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/", http) {
    this.baseUri = baseUri;
    this.http = http;
  }
  /**
   * Download all images in zip
   * GET api/upload/allFilesInZip
   */
  getAllImagesInZip() {
    return this.http.get(this.baseUri + "api/upload/allFilesInZip", { responseType: "arraybuffer" });
  }
  static \u0275fac = function FilesDownload_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilesDownload)(\u0275\u0275inject("baseUri"), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FilesDownload, factory: _FilesDownload.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesDownload, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: ["baseUri"]
  }] }, { type: HttpClient }], null);
})();

export {
  ConfirmUploadService,
  FilesDownload
};
//# sourceMappingURL=chunk-KVR7JZTW.js.map
