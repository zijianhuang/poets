# Host the Website on Kestrel
# Working on branch gh-pages
Set-Location $PSScriptRoot
dotnet-serve -d ./ -p 5500

# Then run http://localhost:5500/poets/
