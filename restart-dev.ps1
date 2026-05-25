# Fix 500 errors: stop server, clear Next.js cache, restart
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Stopping anything on port 3000..." -ForegroundColor Yellow
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
Start-Sleep -Seconds 2

if (Test-Path ".next") {
    Write-Host "Removing .next cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next
}

Write-Host "Starting fresh dev server..." -ForegroundColor Green
npm run dev
