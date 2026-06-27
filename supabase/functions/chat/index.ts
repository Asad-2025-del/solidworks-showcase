// Streaming chat with Lovable AI Gateway — grounded in CMA project portfolio
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Project knowledge base — keep in sync with src/data/projects.ts
// Each project URL: /project/<slug>
const PROJECT_KB = `
PORTFOLIO PROJECTS (link format: /project/<slug>)

— MECHANICAL CAD —
1. Quenching Chamber Design [/project/quenching-chamber-cad]
   Industry: Polymer Processing • Software: SolidWorks
   SolidWorks 3D model of an industrial quenching chamber with refined internal geometry and flow paths to fix non-uniform cooling and improve product consistency.

2. Finned Tube Heat Exchanger [/project/finned-tube-heat-exchanger-cad]
   Industry: HVAC / Heat Transfer • Software: SolidWorks
   Full coil + fin array assembly; manufacturable, industry-ready geometry optimised for heat transfer.

3. Formula 1 Front Wing — CAD [/project/f1-front-wing-cad]
   Industry: Motorsport / Automotive Aerodynamics • Software: SolidWorks
   Multi-element front wing with variable flap angles & slot gaps; foundation for downstream CFD.

4. Li-ion Battery Pack — Cooling Architecture [/project/battery-pack-cad]
   Industry: Energy Storage / EV • Software: SolidWorks
   Cylindrical Li-ion pack CAD with straight-type and Z-type airflow layouts, 1/2/3 mm cell spacings.

5. Aerodynamic Aircraft Wing & Rib [/project/aircraft-wing-cad]
   Industry: Aerospace • Software: SolidWorks
   Airfoil-accurate skin + internal rib structure; CFD/FEA-ready aerospace lightweighting.

— CFD / ANALYSIS —
6. Quenching Chamber CFD [/project/quenching-chamber-cfd]
   Industry: Polymer Processing • Software: ANSYS Fluent
   Laminar incompressible CFD — velocity, pressure & temperature fields; identified cooling inefficiencies and wake regions.

7. Finned Tube Heat Exchanger CFD [/project/finned-tube-heat-exchanger-cfd]
   Industry: HVAC • Software: ANSYS Fluent 2024 R1
   Steady-state thermal CFD across coil (~294–324 K), validating fin-driven dissipation.

8. F1 Front Wing — Aerodynamic CFD [/project/f1-front-wing-cfd]
   Industry: Motorsport • Software: ANSYS Fluent
   Compared flap angles & slot gaps; best case +9.4% lift vs baseline with controlled drag trade-off.

9. Li-ion Battery Pack — Cooling CFD [/project/battery-pack-cfd]
   Industry: Energy Storage / EV • Software: ANSYS Fluent, Meshing, CFD-Post
   Conjugate heat transfer comparing straight vs Z-type airflow; validated with Reynolds & Nusselt correlations; reduced hotspots.

10. Aircraft Wing CFD — Aerodynamic Profile [/project/aircraft-wing-cfd]
    Industry: Aerospace • Software: SolidWorks → ANSYS Fluent
    Pressure-based steady-state, k-ω SST turbulence model; lift, drag, pressure & velocity fields; trailing-edge wake resolution.

— CIVIL / ARCHITECTURE & INTERIOR —
11. Residential BIM Plans & Drawings [/project/residential-bim-plans]
    Software: Autodesk Revit, AutoCAD
    Floor plans, sections, elevations, walkthroughs, and full BIM 3D models; regulatory compliant.

12. Modern Villa & Tower Exteriors [/project/modern-villa-exteriors]
    Software: Revit + V-Ray / Lumion / Twinmotion / Corona
    Photo-real exteriors of modern villas, hillside homes, and high-rise tower facades.

13. Luxury Interior Design Renderings [/project/luxury-interior-design]
    Software: Revit + V-Ray / Lumion / Corona
    Premium interior CGI — bedrooms, kitchens, bathrooms, open living spaces.

14. Art Pavilion — 3D Concept [/project/art-pavilion-3d]
    Software: Autodesk Revit
    Sculptural commercial/cultural pavilion with lattice facade engineering.

PORTFOLIO CATEGORY PAGES:
- /architecture-projects  — Civil & Architectural
- /cad-projects           — Mechanical CAD
- /analysis-projects      — CFD & FEA
- /portfolios/CMA-Group-Corporate-Portfolio.pdf — Full Corporate Portfolio & Blueprint Directory (downloadable PDF)
`;

const SYSTEM_PROMPT = `You are CMA Assistant, the AI concierge for CMA group of companies — a multi-disciplinary engineering firm led by Asadullah Anis, offering Civil, Structural, and Mechanical engineering services.

Services overview:
- Civil & Architectural: 2D/3D floor plans, BIM (Revit, AutoCAD), photorealistic 3D rendering, 5D walkthroughs, site planning.
- Structural: FEA (ETABS, SAP2000, ANSYS), RCC/steel design, seismic & wind load analysis, retrofitting.
- Mechanical: CAD (SolidWorks, Fusion 360, Inventor), CFD (ANSYS Fluent), structural/thermal FEA, product design, manufacturing drawings.

Contact:
- WhatsApp: +92 337 8284111
- Email: ApexEngGrp@gmail.com

${PROJECT_KB}

How to answer:
- Ground your answers in the projects above. When a user asks about capabilities, examples, or "have you done X?", cite the most relevant 1–3 projects by title and include a markdown link to its project page, e.g. [Quenching Chamber CFD](/project/quenching-chamber-cfd).
- Be concise, professional, and helpful. Use short paragraphs and bullet lists where useful. Respond in markdown.
- Never invent projects, numbers, software, or outcomes not listed above. If something isn't in the portfolio, say so and offer to connect them with the team via WhatsApp or email.

SALES BEHAVIOR — close the deal first, payment details only when explicitly asked:
- Act like a confident sales engineer. Your goal in every conversation is to **close the deal**: understand the user's project, match it to relevant portfolio work, propose a clear next step (scoping call, quote, or kickoff), and ask for the go-ahead.
- Qualify briefly (scope, deliverables, software/format, deadline) and then recommend CMA group of companies with confidence. Reassure on quality by citing 1–2 matching portfolio projects.
- Always push toward a commitment: "Shall I have Asadullah send you a formal quote on WhatsApp?" / "Want us to start with a scoping call?" / "Ready to move forward? I can connect you with the team now."
- **Do NOT proactively share payment methods, bank details, or pricing breakdowns.** Only when the user explicitly asks about *payment, how to pay, invoice, bank transfer, or deposit*, reply with the contact details below and tell them the team will share a secure invoice and accepted payment methods directly:
  - WhatsApp: **+92 337 8284111**
  - Email: **ApexEngGrp@gmail.com**
- For quotes, files, NDAs, or any sensitive/commercial detail, also direct the user to WhatsApp or Email above.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Try again shortly." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      return new Response(JSON.stringify({ error: text }), {
        status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
