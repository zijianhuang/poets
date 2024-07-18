Published content in branch gh-pages with [poems by the following poets](https://zijianhuang.github.io/poets/):
* Percy Bysshe Shelley
* George Gordon Byron
* Edgar Allan Poe
* 李白

## Regular App Update
The build is based on buildProd.ps1 of the PoemsCollection repos. And the app update copies the following:
1. Files in root.
1. assets
1. Replace `<base href="/">` with `<base href="/poets/">` in index.html. (See Local Testing below)

Then run `startProd.ps1` and browse http://localhost/poets/ .

## Local Testing Setup
For the continence of testing, I use symbolic link from app to docs, with the following script:

```
mklink /J poets docs
```
Git should then pick /docs/ and ignore /poets/ (added to the ignore list).

## Initial setup
Github Pages insists that docs is the subfolder to be publish, as described at:

1. [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
2. https://github.com/orgs/community/discussions/23073

