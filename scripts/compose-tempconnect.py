#!/usr/bin/env python3
"""Compose TempConnect portfolio boards from official Play Store creatives."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(r"E:\Work\TGS\LandingPage")
RAW = ROOT / "public" / "portfolio" / "tempconnect" / "raw"
OUT = ROOT / "public" / "portfolio" / "tempconnect"
OUT2 = ROOT / "portofolio" / "tempconnect"
W, H = 1600, 900
TEAL = (0, 168, 184)  # brand cyan/teal
TEAL_DARK = (0, 120, 132)
NAVY = (20, 40, 55)
WHITE = (255, 255, 255)
SOFT = (230, 246, 248)
INK = (30, 45, 55)
MUTED = (100, 120, 130)

OUT.mkdir(parents=True, exist_ok=True)
OUT2.mkdir(parents=True, exist_ok=True)


def font(size: int, bold: bool = False):
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def load(name: str) -> Image.Image:
    return Image.open(RAW / name).convert("RGBA")


def cover(img: Image.Image, tw: int, th: int, focus: str = "center") -> Image.Image:
    iw, ih = img.size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    if focus == "top":
        top = 0
    elif focus == "bottom":
        top = nh - th
    else:
        top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def contain(img: Image.Image, tw: int, th: int, bg=(255, 255, 255, 255)) -> Image.Image:
    canvas = Image.new("RGBA", (tw, th), bg)
    iw, ih = img.size
    scale = min(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((tw - nw) // 2, (th - nh) // 2), resized)
    return canvas


def save(img: Image.Image, name: str) -> None:
    rgb = img.convert("RGB")
    p1 = OUT / name
    p2 = OUT2 / name
    rgb.save(p1, "PNG", optimize=True)
    rgb.save(p2, "PNG", optimize=True)
    print(f"{name} {p1.stat().st_size}")


def hero() -> None:
    """Homepage card (16:10): three real store creatives — no text+phone split."""
    cw, ch = 1600, 1000  # match .project-card__media aspect-ratio
    canvas = Image.new("RGBA", (cw, ch), TEAL)
    draw = ImageDraw.Draw(canvas)
    draw.polygon([(900, 0), (cw, 0), (cw, ch), (700, ch)], fill=TEAL_DARK)

    panels = [
        (cover(load("shot-01.jpg"), 420, 840, focus="center"), 70, 100),
        (cover(load("shot-02.jpg"), 460, 900, focus="center"), 560, 50),
        (cover(load("shot-05.jpg"), 420, 840, focus="center"), 1110, 100),
    ]
    for panel, x, y in panels:
        frame = Image.new("RGBA", (panel.width + 16, panel.height + 16), WHITE)
        canvas.paste(frame, (x - 8, y - 8), frame)
        canvas.paste(panel, (x, y), panel)

    draw.rectangle([0, 0, cw, 56], fill=NAVY)
    icon_path = RAW / "icon.png"
    if icon_path.exists():
        icon = Image.open(icon_path).convert("RGBA").resize((36, 36), Image.Resampling.LANCZOS)
        canvas.paste(icon, (28, 10), icon)
        draw.text((76, 14), "TempConnect", font=font(24, True), fill=WHITE)
    else:
        draw.text((28, 14), "TempConnect", font=font(24, True), fill=WHITE)
    draw.text((1280, 18), "Hire  ·  Work  ·  Book", font=font(18, True), fill=TEAL)

    # save at card aspect without going through global W,H
    rgb = canvas.convert("RGB")
    for dest in (OUT / "01-hero.png", OUT2 / "01-hero.png"):
        rgb.save(dest, "PNG", optimize=True)
        print(f"01-hero.png {dest.stat().st_size}")


def dual_paths() -> None:
    """Emphasize Hire vs Work — unique to TempConnect."""
    canvas = Image.new("RGBA", (W, H), WHITE)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, W // 2, H], fill=TEAL)
    draw.rectangle([W // 2, 0, W, H], fill=NAVY)

    left = contain(load("shot-01.jpg"), 700, 780, bg=(*TEAL, 255))
    right = contain(load("shot-05.jpg"), 700, 780, bg=(*NAVY, 255))
    canvas.paste(left, (50, 90), left)
    canvas.paste(right, (850, 90), right)

    draw.text((60, 28), "I WANT TO HIRE", font=font(22, True), fill=WHITE)
    draw.text((860, 28), "I WANT TO WORK", font=font(22, True), fill=TEAL)
    save(canvas, "02-dual-paths.png")


def screens() -> None:
    canvas = Image.new("RGBA", (W, H), (245, 250, 252, 255))
    draw = ImageDraw.Draw(canvas)
    draw.text((40, 20), "STORE CREATIVES · REAL APP UI", font=font(16, True), fill=TEAL_DARK)

    shots = ["shot-01.jpg", "shot-02.jpg", "shot-04.jpg", "shot-05.jpg"]
    gap = 20
    panel_w = (W - gap * 5) // 4
    panel_h = H - 60 - gap
    for i, name in enumerate(shots):
        panel = cover(load(name), panel_w, panel_h, focus="center")
        x = gap + i * (panel_w + gap)
        canvas.paste(panel, (x, 56), panel)
    save(canvas, "03-screens.png")


def detail_feature() -> None:
    canvas = Image.new("RGBA", (W, H), SOFT)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, W, 120], fill=TEAL)
    draw.text((64, 40), "Job detail · Maps · Proposals", font=font(36, True), fill=WHITE)

    phone = contain(load("shot-04.jpg"), 620, 720, bg=(*SOFT, 255))
    canvas.paste(phone, (60, 150), phone)

    draw.text((760, 220), "Live marketplace tools", font=font(40, True), fill=NAVY)
    lines = [
        "• Post hourly & one-time projects",
        "• Review proposals & profiles",
        "• Map-based job locations",
        "• Background checks & payments",
        "• Real-time messaging",
    ]
    y = 300
    for line in lines:
        draw.text((760, y), line, font=font(24), fill=INK)
        y += 48

    draw.rounded_rectangle([760, 560, 1280, 660], radius=12, fill=TEAL)
    draw.text((790, 590), "Same-day hire & book flows", font=font(22, True), fill=WHITE)
    draw.text((790, 625), "Employers and workers connect directly", font=font(18), fill=WHITE)
    save(canvas, "04-detail.png")


def platforms() -> None:
    """Cross-platform footprint — iOS, Android, Windows."""
    canvas = Image.new("RGBA", (W, H), NAVY)
    draw = ImageDraw.Draw(canvas)

    left = cover(load("shot-03.jpg"), 780, H, focus="center")
    right = cover(load("shot-01.jpg"), 780, H, focus="center")
    canvas.paste(left, (0, 0), left)
    # darken right slightly via overlay after paste
    canvas.paste(right, (820, 0), right)

    draw.rectangle([700, 0, 900, H], fill=TEAL)
    draw.text((720, 260), "iOS", font=font(28, True), fill=WHITE)
    draw.text((720, 320), "Android", font=font(28, True), fill=WHITE)
    draw.text((720, 380), "Windows", font=font(28, True), fill=NAVY)
    draw.text((720, 480), "Staffing", font=font(22, True), fill=WHITE)
    draw.text((720, 520), "without", font=font(22, True), fill=WHITE)
    draw.text((720, 560), "agencies", font=font(22, True), fill=NAVY)
    save(canvas, "05-platforms.png")


if __name__ == "__main__":
    hero()
    dual_paths()
    screens()
    detail_feature()
    platforms()
    print("DONE")
