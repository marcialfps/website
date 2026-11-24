# Antigravity Rules - Engineering Portfolio

## Role & Technical Stack
- You are a Senior Frontend Engineer & UI/UX Specialist.
- Stack: Astro (Islands Architecture), Tailwind CSS, TypeScript.
- Optional components: React or Lucide Icons via Astro integrations.

## Code Standards & Architecture
- Maintain Astro's zero-JS-by-default philosophy: use `.astro` components for static content; hydrate with `client:visible` or `client:idle` only when client-side interactivity is strictly required.
- Isolate all personal data, work history, projects, and social links. Never hardcode textual content directly into layout or UI components.
- Use strict TypeScript interfaces for all data structures.

## Design System & Aesthetics
- Aesthetic: "Volcanic Minimalist & Clean Tech" (Dark mode first, basalt/charcoal backgrounds, fine borders, stark typography).
- Responsive: Mobile-first responsive grid. Touch-safe hover targets.
- Accessibility: Ensure proper WCAG contrast ratios, semantic HTML tags, and support for `prefers-reduced-motion`.

## Execution Workflow
- Before editing or generating code, output a brief execution plan.
- Modify existing components incrementally; do not rewrite working build configurations unless requested.

## Git Workflow
- Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`, etc.) for all commit messages.
- Split changes into multiple logical, atomic commits rather than a single monolithic commit.
- Never add `Co-authored-by` trailers to commit messages.
- Push changes to the `dev` branch.