# Damietta Heritage Furniture - Design System

## Principles
1. **Spatial Confidence**: Bridge the gap of physical absence. Make every design decision serve to communicate scale, spatial presence, and physical form.
2. **Material Honesty**: Use large texture swatches, close-up photography, and descriptive typography to make materials feel real through the screen.
3. **Craft Pride**: Feature Damietta provenance, hand-cut joinery, and craftsman stories front and center.
4. **Conversion Architecture**: Answer questions before they arise. Feature clear BNPL (Buy Now Pay Later) pricing, clear return policies on the PDP, custom order escalations, and explicit delivery times.

## Token System (`tokens.css`)
- **Fluid Typography:** Base classes use fluid scaling (`clamp()`) to adapt dynamically to viewports without breakpoints.
- **Semantic Color Naming:** Colors are named functionally (e.g., `--color-accent`) to allow seamless overriding by brand personalities.
- **Physical Scale Elements:** Radii, spacing, and shadows act as proxies for physical characteristics (e.g., rigid corners for modern, organic shapes for mediterranean).
- **Motion:** Defined easing curves mimicking physical movements (e.g., closing drawers).

## Brand Personalities (`brand-personalities/`)
The system supports 5 overrides:
- `artisan-heritage.css` (Warm, craft, classic serif)
- `luxe-editorial.css` (Dark mode, high contrast, cinematic)
- `scandinavian-modern.css` (Minimal, light grey, rational sans-serif)
- `mediterranean-warmth.css` (Terracotta, organic forms, diffused shadow)
- `bold-contemporary.css` (Monochrome, architectural, strict corners)

*Switching Guide:* Import the specific personality CSS file *after* `components.css` but *before* `rtl.css`.

## Components (`components.css`)
Includes BEM structures for:
- Product Cards (`.product-card`)
- Buttons (`.btn`)
- Room Galleries (`.room-gallery`)
- Testimonials (`.testimonial-card`)
- Filter panels and layout grids.

## Arabic / RTL Guide (`rtl.css`)
- Utilize logical CSS properties throughout (`margin-inline`, `padding-block`).
- When Arabic mode is desired, set `<html dir="rtl">` or `dir="rtl"` on a container.
- Uses `rtl.css` for structural exceptions where logical props aren't sufficient.
- Primary Arabic fonts per personality loaded via standard CSS `@font-face` or system stack definitions.

## Photography Art Direction
Each product *must* include:
1. Primary Lifestyle (room context)
2. Studio Isolated (clean silhouette)
3. Texture Close-up
4. Scale Reference
5. Detail shot (joinery/hardware)

## Accessibility Audit Checklist (WCAG 2.1 AA)
- [ ] Product Images contain descriptive alt text ("Solid walnut table 180cm...").
- [ ] Swatches and visual markers have valid `aria-label`.
- [ ] Colors pass 4.5:1 text-to-background contrast minimums.
- [ ] Native `<button>` and `<a>` elements used with focus visible states.
- [ ] Supports `prefers-reduced-motion` removing transitions/animations.
- [ ] Interactive overlays (lightbox, mobile filters) trap focus correctly.