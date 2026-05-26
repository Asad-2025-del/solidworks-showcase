// Streaming chat with Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Apex Assistant, the AI concierge for Apex Engineering Group — a multi-disciplinary engineering firm led by Asadullah Anis, offering Civil, Structural, and Mechanical engineering services.

What we do:
- Civil & Architectural: 2D/3D floor plans, BIM, photorealistic 3D rendering, 5D walkthroughs, site planning.
- Structural: FEA, structural design, load analysis, reinforcement detailing.
- Mechanical: CAD modeling (SolidWorks, CATIA, Fusion 360), CFD analysis (ANSYS Fluent), thermal/fluid simulation, product design.

Contact:
- WhatsApp: +92 337 8284111
- Email: ApexEngGrp@gmail.com

Be concise, professional, and helpful. Answer questions about services, process, pricing tiers, and portfolio. For quotes or detailed scoping, direct users to WhatsApp or email. Do not invent specifics you don't know — say you'll connect them with the team.`;

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
