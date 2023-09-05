published content in branch gh-pages with [poems by the following poets](https://zijianhuang.github.io/poets/):
* Percy Bysshe Shelley
* George Gordon Byron
* Edgar Allan Poe
* 李白


Github Pages insists that docs is the subfolder to be publishe, as described at:

1. https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
2. https://github.com/orgs/community/discussions/23073

When building the readonly app published in a relative path, I would use /app/. For the convinence of testing, I use symbolic link from app to docs, with the following script:

```
mklink /J docs app
```

Git should pick /docs/ and ignore /app/.

After testing, replace /app/ with /poets/ for index.html and ngsw.json