const SITE_CONFIG = {
	siteName: 'Poetry Collection',
	apiBaseUri: '',
	staticReadonly: true,
	copyPoemEnabled: true,
	copyAlbumEnabled: false,
	chronologyEnabled: true,
	themesDic: {
		"assets/themes/azure-blue.css":{display: "Azure & Blue", dark:false},
		"assets/themes/rose-red.css":{display: "Roes & Red", dark:false},
		"assets/themes/magenta-violet.css":{display: "Magenta & Violet", dark:true},
		"assets/themes/cyan-orange.css":{display: "Cyan & Orange", dark:true}
	},
	staticDatas: [
		{filename: 'Shelley', poetName: 'Percy Bysshe Shelley'},
		{filename: 'Byron', poetName: 'George Gordon Byron'},
		{filename: 'EdgarAllanPoe', poetName: 'Edgar Allan Poe'},
		{filename: 'LiBai', poetName: '李白', secondaryFilename: 'LiBai2nd'}
	]
}

