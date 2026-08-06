$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeDir = Join-Path $root ".tools\node-v24.19.0-win-x64"

if (-not (Test-Path (Join-Path $nodeDir "node.exe"))) {
  throw "Local Node.js runtime was not found at $nodeDir"
}

$env:PATH = "$nodeDir;$env:PATH"
Set-Location $root
corepack pnpm exec next dev --hostname 127.0.0.1 --port 3000
