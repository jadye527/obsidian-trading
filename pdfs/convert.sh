#!/bin/bash
# Convert markdown guides to styled PDFs via HTML intermediate
# Usage: ./convert.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Convert MD to HTML using pandoc with embedded CSS
convert_guide() {
  local input="$1"
  local output_html="${input%.md}.html"
  local output_pdf="${input%.md}.pdf"
  local title="$2"

  echo "Converting $input → $output_pdf"

  pandoc "$input" \
    --from markdown \
    --to html5 \
    --standalone \
    --toc \
    --toc-depth=2 \
    --metadata title="$title" \
    --css="style.css" \
    --self-contained \
    -o "$output_html" 2>/dev/null

  # Inject the CSS directly into the HTML (self-contained)
  # Then convert to PDF
  wkhtmltopdf \
    --enable-local-file-access \
    --page-size Letter \
    --margin-top 20mm \
    --margin-bottom 20mm \
    --margin-left 18mm \
    --margin-right 18mm \
    --encoding utf-8 \
    --print-media-type \
    --footer-center "[page]" \
    --footer-font-size 9 \
    --footer-spacing 10 \
    "$output_html" "$output_pdf"

  echo "  → $output_pdf ($(du -h "$output_pdf" | cut -f1))"

  # Clean up intermediate HTML
  rm -f "$output_html"
}

convert_guide "obsidian-starter-guide.md" "AI Trading Analyst: The Starter Guide"
convert_guide "obsidian-full-system.md" "The Full Trading System"

echo "Done!"
