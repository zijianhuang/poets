# Host the Website on Kestrel
# Working on branch azure-pages
Set-Location $PSScriptRoot
dotnet-serve -d ./appcontent/ -p 5300

# Then run http://localhost:5300/
