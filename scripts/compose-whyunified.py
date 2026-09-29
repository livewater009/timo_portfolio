#!/usr/bin/env python3
"""Compose unique Why Unified portfolio boards from official Play Store creatives."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(r"E:\Work\TGS\LandingPage")
RAW = ROOT / "public" / "portfolio" / "why-unified" / "raw"
OUT = ROOT / "public" / "portfolio" / "why-unified"
OUT2 = ROOT / "portofolio" / "why-unified"
W, H = 1600, 900
RED = (200, 16, 46)
BLACK = (17, 17, 17)
WHITE = (255, 255, 255)
DARK = (10, 10, 10)
GRAY = (221, 221, 221)
MUTED = (136, 136, 136)

OUT.mkdir(parents=True, exist_ok=True)
OUT2.mkdir(parents=True, exist_ok=True)


def font(size: int, bold: bool = False):
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\calibrib.ttf" if bold else r"C:\Windows\Fonts\calibri.ttf",
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


def contain(img: Image.Image, tw: int, th: int, bg=(20, 20, 20, 255)) -> Image.Image:
    canvas = Image.new("RGBA", (tw, th), bg)
    iw, ih = img.size
    scale = min(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((tw - nw) // 2, (th - nh) // 2), resized)
    return canvas


def phone_crop(img: Image.Image, tw: int, th: int) -> Image.Image:
    """Crop marketing creatives toward the device frame, not the headline band."""
    iw, ih = img.size
    src = img.crop((0, int(ih * 0.28), iw, ih))
    return cover(src, tw, th, focus="top")


def save(img: Image.Image, name: str) -> None:
    rgb = img.convert("RGB")
    p1 = OUT / name
    p2 = OUT2 / name
    rgb.save(p1, "PNG", optimize=True)
    rgb.save(p2, "PNG", optimize=True)
    print(f"{name} {p1.stat().st_size}")


def hero() -> None:
    """Homepage card (16:10): two full store creatives — no text+phone split."""
    cw, ch = 1600, 1000  # match .project-card__media aspect-ratio
    canvas = Image.new("RGBA", (cw, ch), BLACK)
    draw = ImageDraw.Draw(canvas)

    left = contain(load("shot-02.jpg"), 760, 900, bg=(0, 0, 0, 255))
    right = contain(load("shot-06.jpg"), 760, 900, bg=(0, 0, 0, 255))
    canvas.paste(left, (30, 72), left)
    canvas.paste(right, (810, 72), right)

    draw.rectangle([0, 0, cw, 56], fill=RED)
    draw.text((40, 14), "Why Unified®", font=font(26, True), fill=WHITE)
    draw.text((1050, 18), "Sell  ·  Pay as you sell  ·  Auto-pilot", font=font(18, True), fill=WHITE)

    rgb = canvas.convert("RGB")
    for dest in (OUT / "01-hero.png", OUT2 / "01-hero.png"):
        rgb.save(dest, "PNG", optimize=True)
        print(f"01-hero.png {dest.stat().st_size}")


def screens() -> None:
    canvas = Image.new("RGBA", (W, H), DARK)
    draw = ImageDraw.Draw(canvas)
    draw.text((40, 18), "OFFICIAL APP CREATIVES", font=font(16, True), fill=RED)

    shots = ["shot-01.jpg", "shot-02.jpg", "shot-03.jpg", "shot-06.jpg"]
    gap = 24
    panel_w = (W - gap * 5) // 4
    panel_h = H - 52 - gap
    for i, name in enumerate(shots):
        panel = cover(load(name), panel_w, panel_h, focus="center")
        x = gap + i * (panel_w + gap)
        canvas.paste(panel, (x, 52), panel)
    save(canvas, "02-screens.png")


def pulse() -> None:
    canvas = Image.new("RGBA", (W, H), (20, 20, 20, 255))
    draw = ImageDraw.Draw(canvas)
    draw.text((72, 80), "Pulse Dashboard", font=font(48, True), fill=WHITE)
    draw.text((72, 145), "Live marketplace control", font=font(22, True), fill=RED)

    lines = [
        "• Connect seller accounts",
        "• Track Amazon / Walmart revenue",
        "• Manage products & licensing",
        "• Support PIN + in-app help",
    ]
    y = 220
    for line in lines:
        draw.text((72, y), line, font=font(22), fill=GRAY)
        y += 45

    draw.rounded_rectangle([72, 420, 492, 540], radius=16, fill=RED)
    draw.text((96, 455), "Pay-as-you-sell model", font=font(20, True), fill=WHITE)
    draw.text((96, 490), "No large upfront inventory — sell first", font=font(18), fill=WHITE)
    draw.text((72, 820), "Real Play Store creative (not mocked UI)", font=font(16), fill=MUTED)

    phone = contain(load("shot-05.jpg"), 700, 820, bg=(20, 20, 20, 255))
    canvas.paste(phone, (820, 40), phone)
    save(canvas, "03-pulse.png")


def activate() -> None:
    canvas = Image.new("RGBA", (W, H), RED)
    draw = ImageDraw.Draw(canvas)
    phone = phone_crop(load("shot-03.jpg"), 620, 860)
    canvas.paste(phone, (40, 20), phone)

    draw.text((720, 180), "Connect once.", font=font(52, True), fill=BLACK)
    draw.text((720, 250), "Sell everywhere.", font=font(52, True), fill=WHITE)
    draw.text((720, 360), "Amazon · Walmart · eBay · Prime", font=font(22), fill=WHITE)
    draw.text((720, 420), "Link a seller account or take over a", font=font(22), fill=BLACK)
    draw.text((720, 460), "managed store — fulfillment stays on us.", font=font(22), fill=BLACK)

    draw.rounded_rectangle([720, 540, 1080, 592], radius=8, fill=BLACK)
    draw.text((750, 556), "Connect seller account", font=font(18, True), fill=WHITE)
    draw.rounded_rectangle([1100, 540, 1420, 592], radius=8, fill=WHITE)
    draw.text((1130, 556), "Take over a store", font=font(18, True), fill=BLACK)

    draw.text((720, 800), "whyunified.com · App Store · Google Play", font=font(16), fill=WHITE)
    save(canvas, "04-activate.png")


def brands() -> None:
    """Lifestyle + live-updates creatives — distinct from CRMGrow card grids."""
    canvas = Image.new("RGBA", (W, H), BLACK)
    draw = ImageDraw.Draw(canvas)
    left = cover(load("shot-04.jpg"), 760, H, focus="center")
    right = phone_crop(load("shot-07.jpg"), 760, H)
    canvas.paste(left, (0, 0), left)
    canvas.paste(right, (840, 0), right)
    draw.rectangle([740, 0, 860, H], fill=RED)
    draw.text((752, 280), "Trusted", font=font(22, True), fill=WHITE)
    draw.text((752, 320), "household", font=font(22, True), fill=WHITE)
    draw.text((752, 360), "brands", font=font(22, True), fill=BLACK)
    draw.text((752, 480), "Live", font=font(22, True), fill=WHITE)
    draw.text((752, 520), "store", font=font(22, True), fill=WHITE)
    draw.text((752, 560), "updates", font=font(22, True), fill=BLACK)
    save(canvas, "05-brands.png")


if __name__ == "__main__":
    hero()
    screens()
    pulse()
    activate()
    brands()
    print("DONE")
