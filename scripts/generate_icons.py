import os
from PIL import Image, ImageDraw, ImageFont

def generate_icons():
    os.makedirs('public', exist_ok=True)
    size = 512
    img = Image.new('RGBA', (size, size), (6, 8, 20, 255))
    draw = ImageDraw.Draw(img)

    # Rounded rectangle background
    padding = 24
    draw.rounded_rectangle(
        [(padding, padding), (size - padding, size - padding)],
        radius=110,
        fill=(18, 20, 42, 255),
        outline=(255, 255, 255, 38),
        width=4
    )

    # Inner subtle glowing circle
    circle_bbox = [(size // 2 - 160, size // 2 - 160), (size // 2 + 160, size // 2 + 160)]
    draw.ellipse(circle_bbox, outline=(139, 92, 246, 75), width=3)

    # Text rendering
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/SFNSMono.ttf", 150)
        font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    except Exception:
        font_large = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    # Draw "FM"
    draw.text((size // 2, size // 2 - 30), "FM", fill=(245, 243, 255, 255), font=font_large, anchor="mm")
    # Draw "FOR ME"
    draw.text((size // 2, size // 2 + 95), "FOR ME", fill=(192, 132, 252, 255), font=font_sub, anchor="mm")

    # Save 512x512
    img.save("public/icon-512.png", "PNG")

    # Save 192x192
    img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save("public/icon-192.png", "PNG")

    # Save 180x180 for Apple touch icon
    img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save("public/apple-touch-icon.png", "PNG")

    print("Icons successfully created in public/")

if __name__ == '__main__':
    generate_icons()
