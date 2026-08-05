#!/bin/bash
# Converts large SVGs (embedded photos) and JPGs to WebP
# Run from project root: bash scripts/optimize-images.sh

PUBLIC="$(dirname "$0")/../public"
MAGICK=$(which magick)
CWEBP=$(which cwebp)

if [ -z "$MAGICK" ]; then
  echo "Error: imagemagick not found. Run: brew install imagemagick"
  exit 1
fi

convert_svg() {
  local src="$1"
  local dst="${src%.svg}.webp"
  echo "Converting: $src"
  # Rasterize at 2x density for retina, then encode as WebP quality 82
  "$MAGICK" -density 144 "$src" -quality 82 "$dst" 2>/dev/null
  if [ $? -eq 0 ]; then
    local old=$(du -sh "$src" | cut -f1)
    local new=$(du -sh "$dst" | cut -f1)
    echo "  $old  →  $new  ✓"
  else
    echo "  FAILED"
  fi
}

convert_jpg() {
  local src="$1"
  local dst="${src%.jpg}.webp"
  echo "Converting: $src"
  "$MAGICK" "$src" -quality 80 -resize "1400x>" "$dst" 2>/dev/null
  if [ $? -eq 0 ]; then
    local old=$(du -sh "$src" | cut -f1)
    local new=$(du -sh "$dst" | cut -f1)
    echo "  $old  →  $new  ✓"
  else
    echo "  FAILED"
  fi
}

echo "=== Converting large SVGs ==="
convert_svg "$PUBLIC/images/landing/behind.svg"
convert_svg "$PUBLIC/images/landing/team1.svg"
convert_svg "$PUBLIC/images/landing/Team.svg"
convert_svg "$PUBLIC/images/landing/teammate.svg"
convert_svg "$PUBLIC/images/landing/Group(1).svg"
convert_svg "$PUBLIC/images/Entrepreneurship/programs.svg"
convert_svg "$PUBLIC/images/Entrepreneurship/program.svg"
convert_svg "$PUBLIC/images/Entrepreneurship/heroo.svg"
convert_svg "$PUBLIC/images/about/academy.svg"
convert_svg "$PUBLIC/images/about/IMG_0881.svg"
convert_svg "$PUBLIC/images/about/landacraft.svg"

echo ""
echo "=== Converting large JPGs ==="
convert_jpg "$PUBLIC/images/investment/Antalya.jpg"
convert_jpg "$PUBLIC/images/investment/Türkiye.jpg"
convert_jpg "$PUBLIC/images/investment/Istanbul.jpg"
convert_jpg "$PUBLIC/images/investment/UAE.jpg"
convert_jpg "$PUBLIC/images/investment/Ankara.jpg"
convert_jpg "$PUBLIC/images/investment/Izmir.jpg"
convert_jpg "$PUBLIC/images/investment/Bodrum.jpg"
convert_jpg "$PUBLIC/images/about/trip.jpg"
convert_jpg "$PUBLIC/images/about/steadyskull.jpg"
convert_jpg "$PUBLIC/images/about/Diaco.jpg"
convert_jpg "$PUBLIC/images/about/preventigene.jpg"
convert_jpg "$PUBLIC/images/about/craft.jpg"
convert_jpg "$PUBLIC/images/about/autiLab.jpg"

echo ""
echo "Done. Next step: update image src paths in your components (.svg → .webp, .jpg → .webp)"
