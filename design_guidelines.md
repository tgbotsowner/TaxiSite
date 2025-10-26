# Design Guidelines: Night Taxi Service Landing Page

## Design Approach

**Selected Approach**: Reference-Based inspired by service platforms like Uber, Lyft, and local taxi services, adapted for emergency/night service positioning with strong emphasis on trust and immediate action.

**Key Principles**:
- Immediate accessibility: Critical contact methods front and center
- Trust-building: Professional imagery and clear service guarantees
- Urgency-aware: Dark, dramatic aesthetic reflecting night operations
- Action-focused: Multiple contact pathways for user convenience

## Core Design Elements

### Typography

**Font Selection**: Via Google Fonts CDN
- **Primary (Headlines)**: Montserrat Bold/ExtraBold - Strong, modern, professional
- **Secondary (Body)**: Inter Regular/Medium - Excellent readability, clean

**Hierarchy**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl font-extrabold
- Section headlines: text-3xl md:text-4xl font-bold
- Subheadlines: text-xl md:text-2xl font-semibold
- Body text: text-base md:text-lg
- Small text/labels: text-sm

### Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Element gaps: gap-4, gap-6, gap-8
- Margins: m-4, m-6, m-8, m-12

**Container Strategy**:
- Hero: Full-width with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-prose where appropriate

## Component Library

### Hero Section
**Layout**: Full viewport height (min-h-screen) with overlay
- Background: Large hero image of red car (provided photo) with dark gradient overlay
- Headline stack: "НОЧНОЕ ТАКСИ" / "ДНЕПР" centered, dramatic sizing
- Operating hours badge: "Работаем с 22:00 до 05:00" in accent color
- Three primary action buttons arranged horizontally on desktop, stacked on mobile:
  - "Позвонить" (tel:+380777799989) - Primary yellow button
  - "Telegram" - Secondary with Telegram blue accent
  - "Viber" - Secondary with Viber purple accent
- Blur background on all buttons for readability over image (backdrop-blur-md bg-opacity-90)

### Contact Buttons Specification
**Icon Source**: Font Awesome via CDN for phone, Telegram, Viber icons
**Button Sizes**: 
- Desktop: Large (px-8 py-4 text-lg)
- Mobile: Full-width, stacked with gap-4
**Visual Treatment**: Rounded corners (rounded-full), shadow effects, prominent icons

### Advantages/Features Section
**Layout**: 2-column grid on desktop (lg:grid-cols-2), single column mobile
**Card Components** (7-8 total):
1. Быстрая подача - бизнес-класс авто
2. Работа в комендантский час
3. Переезд через мост
4. Доставка еды и лекарств
5. Честные тарифы
6. Межгород по Украине
7. Заказ в один клик

**Card Design**: 
- Icon (Heroicons via CDN) + Title + Description
- Padding: p-6
- Background: Semi-transparent dark card with subtle border
- Hover: Subtle lift effect (translate-y)

### CTA Section
**Position**: Between features and footer
**Design**: Dark background with contrasting yellow button
- Large headline: "ВЫЗВАТЬ ТАКСИ"
- Phone number prominently displayed
- Single large button with phone icon
- Supporting text about availability

### Footer
**Layout**: Multi-column on desktop (3 columns), stacked mobile
- Column 1: Brand name + operating hours
- Column 2: Contact info (phone, address)
- Column 3: Quick links (all three contact methods: Call, Telegram, Viber)
**Background**: Darkest shade for contrast

## Visual Treatment

### Color Palette (Referenced, not specified)
Theme anchor: Dark/night theme with red accents (matching car) and bright yellow CTAs

### Imagery Strategy

**Hero Image**: 
- Provided red car photo as full-width hero background
- Apply dark gradient overlay (from top/bottom) for text readability
- Position: center-cover
- Height: Full viewport on desktop, 70vh on mobile

**Supporting Images**: None required - single hero image is sufficient for this service-focused landing

### Icons
**Library**: Heroicons via CDN (outline style for consistency)
**Usage**: 
- Feature cards: 24x24px icons in accent color
- Contact buttons: 20x20px inline icons
- Navigation/footer: 16x16px utility icons

### Responsive Behavior

**Breakpoints**:
- Mobile: base (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

**Key Adaptations**:
- Hero buttons: Horizontal row → vertical stack
- Features grid: 2 columns → 1 column
- Footer: 3 columns → 1 column
- Typography: Scale down by 20-30% on mobile
- Padding: Reduce section padding by 40% on mobile

### Animations

**Use Sparingly**:
- Hero entrance: Fade-in for headline and buttons (duration-700)
- Scroll reveals: Feature cards fade-in on scroll (stagger effect)
- Button hovers: Subtle scale transform (scale-105)
- NO complex scroll-driven animations
- NO parallax effects

## Accessibility

- All contact buttons have aria-labels
- Phone links use tel: protocol
- Telegram links: https://t.me/+380777799989
- Viber links: viber://chat?number=%2B380777799989
- Color contrast: Ensure text meets WCAG AA standards
- Focus states: Visible ring on all interactive elements
- Mobile touch targets: Minimum 44x44px

## Critical Implementation Notes

1. **Multi-Device Testing**: Taxi services are 90% mobile - mobile experience is priority
2. **Contact Method Prominence**: All three contact buttons must be equally accessible
3. **Trust Signals**: Operating hours, business-class mention, professional imagery
4. **Loading Speed**: Optimize hero image (WebP format, lazy loading for below-fold)
5. **Local Context**: Ukrainian language throughout, local address in footer