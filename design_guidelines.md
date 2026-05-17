# Design Guidelines: The Car Detailing (TCD) Website

## Design Approach: Reference-Based (Premium Automotive)

**Selected References**: Tesla's minimalist elegance + Porsche's premium aesthetic + Detailing industry leaders

**Rationale**: Car detailing is a visual-rich, experience-focused industry where showcasing transformations and building trust through premium presentation is critical. The black and orange/amber brand colors demand a sophisticated, high-contrast design that exudes professionalism.

---

## Typography System

**Primary Font**: Inter or Poppins (modern, clean sans-serif via Google Fonts CDN)
**Accent Font**: Montserrat for headings (bold, impactful)

**Hierarchy**:
- Hero Headline: Bold, 3xl-5xl, tight leading
- Section Headings: Semibold, 2xl-3xl
- Service Titles: Medium, xl-2xl
- Body Text: Regular, base-lg, relaxed leading (1.6-1.7)
- CTAs: Semibold, base-lg, uppercase tracking-wide

---

## Layout & Spacing System

**Tailwind Spacing Units**: Primarily use 4, 6, 8, 12, 16, 20, 24 for consistency

**Container Strategy**:
- Full-width sections with inner `max-w-7xl` container
- Content sections: `max-w-6xl`
- Text-heavy areas: `max-w-4xl`

**Vertical Rhythm**:
- Mobile: py-12 to py-16
- Desktop: py-20 to py-32
- Hero: min-h-screen (80vh-100vh)

**Grid Layouts**:
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Gallery: 2-3 column masonry or grid
- Testimonials: 2-column (if included)

---

## Component Library

### 1. Hero Section
- **Layout**: Full-viewport height (90vh) with dark overlay on hero image
- **Image**: High-quality photo of luxury car being detailed (gleaming finish, professional setting)
- **Content**: TCD logo prominently displayed, compelling headline ("Transform Your Ride to Showroom Glory"), subheading with location, primary CTA with blurred background
- **CTA Buttons**: "Book Now" (primary) + "View Services" (secondary), both with backdrop-blur-md

### 2. Services Showcase
- **Layout**: 3-column grid with hover lift effects
- **Cards**: Each service card includes icon (Font Awesome car-related icons), service name, 2-3 line description, pricing indicator, "Learn More" link
- **Services**: Interior Detailing, Exterior Detailing, Ceramic Coating, Paint Protection Film, Full Detail Package, Maintenance Packages
- **Visual Treatment**: Subtle borders, generous padding (p-6 to p-8)

### 3. Before/After Gallery
- **Layout**: 2-3 column grid with lightbox functionality
- **Images**: 6-9 transformation photos showing dramatic improvements
- **Interaction**: Click to expand, smooth transitions, swipe/arrow navigation
- **Captions**: Brief description of service performed

### 4. Why Choose TCD Section
- **Layout**: 2-column split (lg:), stacked on mobile
- **Left**: 3-4 key differentiators with checkmark icons (Heroicons)
  - Certified professionals
  - Premium products
  - JP Nagar's trusted choice
  - Satisfaction guaranteed
- **Right**: Image of team/workspace or detailed car close-up
- **Content**: Brief brand story, expertise highlights

### 5. Location & Contact
- **Layout**: 2-column grid
- **Left Column**: 
  - Business hours with clock icon
  - Address (Opposite Zaitoon Restaurant, JP Nagar, Bengaluru) with map pin icon
  - Phone/WhatsApp with icons
  - Social media links
- **Right Column**: Contact form (Name, Phone, Service Interest dropdown, Message, Submit CTA)
- **Below/Integrated**: Google Maps embed showing exact location

### 6. Header/Navigation
- **Layout**: Sticky header with TCD logo (left), navigation links (center/right)
- **Nav Items**: Services, Gallery, About, Contact, "Book Now" CTA button
- **Mobile**: Hamburger menu with slide-in panel

### 7. Footer
- **Layout**: 3-column grid (Services quick links, Contact info, Hours & Social)
- **Content**: Copyright, location address, quick navigation
- **Visual**: Minimal, understated, grounding element

---

## Images Strategy

**Hero Image**: YES - Large, full-width hero showing luxury car with perfect finish (glossy paint, dramatic lighting)

**Additional Images**:
1. **Services section**: Small icons/illustrations (not photos) for each service type
2. **Gallery section**: 6-9 before/after comparison photos (critical for trust-building)
3. **About/Why section**: 1-2 photos of team, workspace, or detailed work
4. **Background accents**: Subtle car detail textures or gradients where appropriate

**Image Treatment**: All photos should have consistent tone/filter, high quality, professional composition

---

## Animation Strategy (Minimal & Purposeful)

**On Scroll**:
- Fade-in-up for service cards (staggered delay)
- Gallery images fade-in as they enter viewport

**Interactions**:
- Service cards: Subtle lift on hover (transform translateY)
- Gallery images: Smooth scale on hover
- CTAs: Standard button states (no custom animations)

**Hero**: Smooth fade-in on page load for headline/CTAs

**Avoid**: Excessive parallax, continuous animations, distracting motion

---

## Accessibility & UX

- High contrast between text and backgrounds
- Consistent button styling throughout
- Form inputs with clear labels and focus states
- Alt text for all images
- Semantic HTML structure
- Mobile-first responsive breakpoints

---

## Content Density Principle

Each section should feel substantial and complete:
- Hero: Logo + Headline + Subheading + 2 CTAs + Trust indicator ("5 years serving JP Nagar")
- Services: Full 6-service grid with detailed cards
- Gallery: Minimum 6 compelling before/after transformations
- Contact: Complete information package (hours, location, form, map)

**Design Philosophy**: Premium automotive aesthetic with bold use of brand colors, crisp typography, generous spacing, and transformation-focused imagery that builds trust and drives bookings.