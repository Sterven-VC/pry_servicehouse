"""Optimize the owner's local source images. Requires Pillow; not needed to build."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'src/assets/images/source/repuestos'
DEST = ROOT / 'src/assets/images/repuestos'
NAMES = {
    1: 'manguera-desague-lavadora', 2: 'manguera-flexible-conectores',
    3: 'manguito-flexible-lavadora', 4: 'manguera-entrada-agua-lavadora',
    5: 'referencia-filtro-externo-refrigeradora', 6: 'filtro-externo-agua-refrigeradora',
    7: 'filtro-cartucho-agua-refrigeradora', 8: 'referencia-publicidad-filtro-agua',
    9: 'referencia-filtro-refrigeradora-seis-meses', 10: 'filtro-lineal-agua-refrigeradora',
    11: 'componentes-electromecanicos-electrodomesticos', 12: 'referencia-bomba-desague-lavadora',
}

if __name__ == '__main__':
    total_before = total_after = 0
    for number, name in NAMES.items():
        source = SOURCE / f'img{number}.jpg'
        # Advertisements and watermarked reference material are not shipped.
        folder = SOURCE / 'optimized-reference' if name.startswith('referencia-') else DEST
        folder.mkdir(parents=True, exist_ok=True)
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original).convert('RGB')
            image.thumbnail((640, 640), Image.Resampling.LANCZOS)
            output = folder / f'{name}.webp'
            image.save(output, 'WEBP', quality=80, method=6)
            before, after = source.stat().st_size, output.stat().st_size
            total_before += before
            total_after += after
            print(f'{source.name} -> {output.name}: {image.width}x{image.height}, {before} -> {after} bytes')
    print(f'Total: {total_before} -> {total_after} bytes ({100 * (1-total_after/total_before):.1f}% reduction)')
