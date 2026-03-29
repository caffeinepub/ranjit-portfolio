# Ranjit Portfolio

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- 5-page React portfolio: Home, About, Services, Education, Contact
- React Router for client-side routing between pages
- Sticky header with logo + nav links, red hover effects
- Home: hero slider (2 slides, auto-advance), About preview (2-col), How I Work (2x2 cards), CTA section
- About: banner, about details (2-col), My Story (accordion cards), Skills & Expertise (4 cards)
- Services: banner, 3 service cards, Tools section, FAQ accordion, Why Choose Me (3 cards)
- Education: banner, overview bullets, vertical timeline with red dots
- Contact: banner, 2-col layout (Google Form iframe placeholder + contact details)
- Footer: minimal with social icons, black bg, red hover
- Global animations: fade-in on scroll, hover effects, loading animation
- Poppins font, black/red/white theme
- Fully responsive

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Install react-router-dom for multi-page routing
2. Create layout components: Header, Footer
3. Create 5 page components: Home, About, Services, Education, Contact
4. Implement hero slider with auto-advance and smooth transitions
5. Implement FAQ accordion with toggle
6. Implement vertical timeline for Education
7. Add scroll-based fade-in animations using Intersection Observer
8. Add loading animation on page entry
9. Style with Tailwind using black/red/white theme tokens
10. Ensure full responsiveness
