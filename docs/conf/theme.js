var cssId = 'app-theme';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.id = cssId;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = `assets/themes/${SITE_CONFIG.themeFile}`;
	link.media = 'all';
	head.appendChild(link);
}
