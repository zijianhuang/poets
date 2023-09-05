## Fonts

Follow the suggestion @ https://stackoverflow.com/questions/15930003/downloading-a-google-font-and-setting-up-an-offline-site-that-uses-it by Marco Kerwitz and use [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts).

1. Select a font desired.
2. Download the zip file.
3. Copy the files to a folder under "fonts".
4. Copy the generated CSS scripts to `fonts.css` as referenced in index.html
5. Change respective CSS class with the new font name.
`<link rel="stylesheet" href="fonts.css">` and this CSS is not included in `angular.json` while those in [styles] are all compiled into styles.css during ng build.


Examples:

```css
/* roboto-regular - latin */
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	src: local(''), url('assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
	url('assets/fonts/') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

KaiShu Simplified Chinese, stored in `PoemsCollection/Design/fonts/`
```css
/* ma-shan-zheng-regular - latin_chinese-simplified */
@font-face {
  font-family: 'Ma Shan Zheng';
  font-style: normal;
  font-weight: 400;
  src: local(''),
	   url('assets/fonts/ma-shan-zheng-v10-latin_chinese-simplified/ma-shan-zheng-v10-latin_chinese-simplified-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
	   url('assets/fonts/ma-shan-zheng-v10-latin_chinese-simplified/ma-shan-zheng-v10-latin_chinese-simplified-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

For static readonly deployment, I may just alter `fonts.css` and copy respective fonts.

**Remarks**

However, KaiShu is not looking good on PC computer screen.

And Chinese fonts have a lot problems in Web usages, as described at https://blog.user.today/chinese-webfont-note/


## Prebuilt Angular Material Theme

Referenced in `angular.json` to "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css", and `ng build` will combined it into `styles.less` then `styles.css` and inject to `index.html`.

## Material Icons

Google Material Icons team had stopped releasing since 2018, though they are still updating icons occasionally. Many of the Internet posts prior to year 2019 about how to host icons locally are basically out-of-date.

The maintenance of the icons is actually done by FontSource:
1. https://github.com/fontsource/fontsource
2. https://fontsource.org/fonts/material-icons

And the releases could be found at https://www.npmjs.com/package/@fontsource/material-icons

The import could be done in 2 ways:

**Referenced in index.html**

1. In index.hmtl, add `<link rel="stylesheet" href="assets/icons/material-icons/index.css">`
2. Copy installed icons to folder `src\assets\icon`, while all stuffs in assets will be deployed.

`index.css` is not good enough yet, append the following:

```css
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

```

And to make things be loaded ASAP, use the following:
```html
	<link rel="prefetch" as="style" onload="this.rel = 'stylesheet'" href="assets/icons/material-icons/index.css" />
	<link rel="prefetch" as="font" onload="this.rel = 'font'" href="assets/icons/material-icons/files/material-icons-base-400-normal.woff2" crossorigin="anonymous" />
```


This is currently the way preferred by me.

**Build index.css

1. In angular.json, add:

```json
"styles": [
"./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
"src/styles.less",
"./node_modules/@fontsource/material-icons/index.css"					]
```

Respective font files will be deployed inside folder scripts, referenced in styles.css.

