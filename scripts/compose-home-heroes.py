#!/usr/bin/env python3
"""Regenerate homepage hero covers: concept + features at once (16:10 cards)."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(r"E:\Work\TGS\LandingPage")
W, H = 1600, 1000  # match .project-card__media 16/10


def font(size: int, bold: bool = False):
    for path in (
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ):
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def cover(img: Image.Image, tw: int, th: int, focus: str = "center") -> Image.Image:
    iw, ih = img.size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = 0 if focus == "top" else (nh - th) // 2 if focus != "bottom" else nh - th
    return resized.crop((left, top, left + tw, top + th))


def rounded_panel(img: Image.Image, radius: int = 18) -> Image.Image:
    img = img.convert("RGBA")
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, *img.size], radius=radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def save_pair(img: Image.Image, public_sub: str, name: str) -> None:
    public = ROOT / "public" / "portfolio" / public_sub
    port = ROOT / "portofolio" / public_sub
    public.mkdir(parents=True, exist_ok=True)
    port.mkdir(parents=True, exist_ok=True)
    rgb = img.convert("RGB")
    for dest in (public / name, port / name):
        rgb.save(dest, "PNG", optimize=True)
        print(name, dest, dest.stat().st_size)


def tempconnect_hero() -> None:
    TEAL = (0, 168, 184)
    TEAL_SOFT = (230, 246, 248)
    NAVY = (18, 42, 58)
    WHITE = (255, 255, 255)
    INK = (28, 44, 56)
    MUTED = (90, 110, 120)

    raw = ROOT / "public" / "portfolio" / "tempconnect" / "raw"
    canvas = Image.new("RGBA", (W, H), TEAL_SOFT)
    draw = ImageDraw.Draw(canvas)

    # soft accent shapes
    draw.ellipse([-120, -180, 420, 360], fill=(0, 168, 184, 40))
    draw.ellipse([1200, 600, 1750, 1150], fill=(0, 168, 184, 35))

    draw.text((64, 48), "TempConnect", font=font(52, True), fill=NAVY)
    draw.text((64, 118), "Direct hiring marketplace for employers & workers", font=font(26), fill=TEAL)
    draw.text(
        (64, 168),
        "One app. Two paths. Hire talent or find work — post, book, message, and get paid.",
        font=font(22),
        fill=MUTED,
    )

    # feature chips
    features = [
        "I Want to Hire",
        "I Want to Work",
        "Job posting",
        "Booking calendar",
        "Messaging",
        "Background checks",
        "Payments",
        "iOS · Android · Windows",
    ]
    x, y = 64, 230
    for label in features:
        tw = draw.textlength(label, font=font(18, True))
        pad_x, pad_y = 18, 12
        wchip = int(tw + pad_x * 2)
        if x + wchip > W - 64:
            x = 64
            y += 52
        draw.rounded_rectangle([x, y, x + wchip, y + 40], radius=20, fill=WHITE, outline=TEAL, width=2)
        draw.text((x + pad_x, y + 10), label, font=font(18, True), fill=NAVY)
        x += wchip + 12

    # three concept UI panels from real creatives
    panels_y = 360
    panel_h = 560
    gap = 28
    panel_w = (W - 64 * 2 - gap * 2) // 3
    sources = [
        ("Hire path", "shot-02.jpg", "top"),
        ("Open projects", "shot-01.jpg", "center"),
        ("Worker tools", "shot-05.jpg", "center"),
    ]
    for i, (caption, fname, focus) in enumerate(sources):
        px = 64 + i * (panel_w + gap)
        # white card behind
        draw.rounded_rectangle(
            [px - 6, panels_y - 6, px + panel_w + 6, panels_y + panel_h + 46],
            radius=22,
            fill=WHITE,
        )
        shot = cover(Image.open(raw / fname).convert("RGBA"), panel_w, panel_h, focus=focus)
        canvas.paste(rounded_panel(shot, 16), (px, panels_y), rounded_panel(shot, 16))
        draw.text((px + 8, panels_y + panel_h + 12), caption, font=font(18, True), fill=TEAL)

    save_pair(canvas, "tempconnect", "01-hero.png")


def why_unified_hero() -> None:
    RED = (200, 16, 46)
    SOFT = (255, 244, 245)
    BLACK = (17, 17, 17)
    WHITE = (255, 255, 255)
    MUTED = (100, 90, 92)

    raw = ROOT / "public" / "portfolio" / "why-unified" / "raw"
    canvas = Image.new("RGBA", (W, H), SOFT)
    draw = ImageDraw.Draw(canvas)

    draw.rectangle([0, 0, W, 8], fill=RED)
    draw.ellipse([1100, -200, 1750, 450], fill=(200, 16, 46, 28))
    draw.ellipse([-200, 700, 400, 1200], fill=(200, 16, 46, 22))

    draw.text((64, 48), "Why Unified®", font=font(52, True), fill=RED)
    draw.text((64, 118), "Dropshipping for Amazon & Walmart — sell first, pay as you sell", font=font(26), fill=BLACK)
    draw.text(
        (64, 168),
        "Connect a store, list trusted brands, track revenue live, and let fulfillment run on auto-pilot.",
        font=font(22),
        fill=MUTED,
    )

    features = [
        "Pay-as-you-sell",
        "Amazon & Walmart",
        "Pulse dashboard",
        "Managed fulfillment",
        "Shipping & returns",
        "In-app support",
        "iOS · Android",
    ]
    x, y = 64, 230
    for label in features:
        tw = draw.textlength(label, font=font(18, True))
        pad_x = 18
        wchip = int(tw + pad_x * 2)
        if x + wchip > W - 64:
            x = 64
            y += 52
        draw.rounded_rectangle([x, y, x + wchip, y + 40], radius=20, fill=WHITE, outline=RED, width=2)
        draw.text((x + pad_x, y + 10), label, font=font(18, True), fill=BLACK)
        x += wchip + 12

    panels_y = 360
    panel_h = 560
    gap = 28
    panel_w = (W - 64 * 2 - gap * 2) // 3
    sources = [
        ("Sell & pay as you sell", "shot-06.jpg", "center"),
        ("Activate & connect", "shot-03.jpg", "center"),
        ("Live Pulse insights", "shot-05.jpg", "center"),
    ]
    for i, (caption, fname, focus) in enumerate(sources):
        px = 64 + i * (panel_w + gap)
        draw.rounded_rectangle(
            [px - 6, panels_y - 6, px + panel_w + 6, panels_y + panel_h + 46],
            radius=22,
            fill=WHITE,
        )
        shot = cover(Image.open(raw / fname).convert("RGBA"), panel_w, panel_h, focus=focus)
        rp = rounded_panel(shot, 16)
        canvas.paste(rp, (px, panels_y), rp)
        draw.text((px + 8, panels_y + panel_h + 12), caption, font=font(18, True), fill=RED)

    save_pair(canvas, "why-unified", "01-hero.png")


if __name__ == "__main__":
    tempconnect_hero()
    why_unified_hero()
    print("DONE")
