Set-ExecutionPolicy Unrestricted -force
$webclient = New-Object System.Net.WebClient
$url = "https://download.provartesting.com/latest/Provar_ANT_latest.zip"
$file = "Provar_ANT_latest.zip"
$webclient.DownloadFile($url,$file)
Expand-Archive -LiteralPath Provar_ANT_latest.zip -DestinationPath ProvarHome
