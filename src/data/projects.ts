// ── CAD / Design portfolio images
import quenchingCad from "@/assets/apex/quenching-cad.jpg";
import finnedTubeCad from "@/assets/apex/finned-tube-cad.jpg";
import f1WingIso from "@/assets/apex/f1-wing-iso.jpg";
import f1WingTop from "@/assets/apex/f1-wing-top.jpg";
import f1WingFront from "@/assets/apex/f1-wing-front.jpg";
import f1WingSide from "@/assets/apex/f1-wing-side.jpg";
import batteryStraight from "@/assets/apex/battery-straight.jpg";
import batteryZtype from "@/assets/apex/battery-ztype.jpg";
import aircraftWingCad from "@/assets/apex/aircraft-wing-cad.jpg";

// ── CFD / Analysis portfolio images
import quenchingPressure from "@/assets/apex/quenching-pressure.jpg";
import quenchingTemp from "@/assets/apex/quenching-temp.jpg";
import finnedTubeTemp from "@/assets/apex/finned-tube-temp.jpg";
import f1VelocityContour from "@/assets/apex/f1-velocity-contour.jpg";
import f1Streamlines from "@/assets/apex/f1-streamlines.jpg";
import batteryMesh from "@/assets/apex/battery-mesh.jpg";
import batteryTemp from "@/assets/apex/battery-temp.png";
import batteryVelocity from "@/assets/apex/battery-velocity.jpg";
import wingMesh from "@/assets/apex/wing-mesh.jpg";
import wingPressure from "@/assets/apex/wing-pressure.jpg";
import wingVelocity from "@/assets/apex/wing-velocity.jpg";
import wingVectors from "@/assets/apex/wing-vectors.jpg";

// ── Architecture & Interior images
import archPlan1 from "@/assets/apex/arch-plan-1.jpg";
import archPlan2 from "@/assets/apex/arch-plan-2.jpg";
import archExt1 from "@/assets/apex/arch-ext-1.jpg";
import archExt2 from "@/assets/apex/arch-ext-2.jpg";
import archExt3 from "@/assets/apex/arch-ext-3.jpg";
import archExt4 from "@/assets/apex/arch-ext-4.jpg";
import archInt1 from "@/assets/apex/arch-int-1.jpg";
import archInt2 from "@/assets/apex/arch-int-2.jpg";
import archInt3 from "@/assets/apex/arch-int-3.jpg";
import archInt4 from "@/assets/apex/arch-int-4.jpg";
import archInt5 from "@/assets/apex/arch-int-5.jpg";
import archInt6 from "@/assets/apex/arch-int-6.jpg";
import archInt7 from "@/assets/apex/arch-int-7.jpg";
import arch3d1 from "@/assets/apex/arch-3d-1.jpg";
import arch3d2 from "@/assets/apex/arch-3d-2.jpg";
import archRender1 from "@/assets/apex/arch-render-1.jpg";
import archRender2 from "@/assets/apex/arch-render-2.jpg";

export type ProjectType = "cad" | "analysis" | "architecture";

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  industry: string;
  description: string;
  thumbnail: string;
  images: { src: string; caption: string }[];
  specs: { label: string; value: string }[];
  overview: string;
  software: string[];
}

const projects: Project[] = [
  // ─────────────────────────────────────────────────────────────
  //  CAD / DESIGN PROJECTS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "quenching-chamber-cad",
    title: "Quenching Chamber Design",
    category: "SolidWorks CAD",
    type: "cad",
    industry: "Polymer Processing",
    description:
      "3D modelling and design refinement of an industrial quenching chamber for uniform cooling.",
    thumbnail: quenchingCad,
    images: [{ src: quenchingCad, caption: "Quenching chamber 3D geometry" }],
    specs: [
      { label: "Industry", value: "Polymer Processing" },
      { label: "Software", value: "SolidWorks" },
      { label: "Focus", value: "Internal geometry optimisation" },
      { label: "Outcome", value: "Improved cooling uniformity & efficiency" },
    ],
    overview:
      "The client experienced inconsistent cooling within a quenching chamber, leading to uneven product quality. We delivered a SolidWorks 3D model with refined internal geometry, improved flow paths, and a structural layout tuned for uniform performance and consistent product output.",
    software: ["SolidWorks"],
  },
  {
    slug: "finned-tube-heat-exchanger-cad",
    title: "Finned Tube Heat Exchanger",
    category: "SolidWorks CAD",
    type: "cad",
    industry: "HVAC",
    description:
      "Detailed 3D CAD design of a finned tube heat exchanger with optimised tube routing and fin layout.",
    thumbnail: finnedTubeCad,
    images: [{ src: finnedTubeCad, caption: "Finned tube heat exchanger assembly" }],
    specs: [
      { label: "Industry", value: "HVAC / Heat Transfer" },
      { label: "Software", value: "SolidWorks" },
      { label: "Assembly", value: "Full coil + fin array" },
      { label: "Focus", value: "Manufacturable, industry-ready geometry" },
    ],
    overview:
      "A precise SolidWorks model of a finned tube heat exchanger used in thermal management systems. The assembly studies fin arrangement, tube routing, and compact coil layout to improve heat transfer efficiency and manufacturability.",
    software: ["SolidWorks"],
  },
  {
    slug: "f1-front-wing-cad",
    title: "Formula 1 Front Wing — CAD",
    category: "Motorsport Design",
    type: "cad",
    industry: "Automotive Aerodynamics",
    description:
      "Multi-element F1 front wing modelled in SolidWorks with variable flap angles and slot gaps.",
    thumbnail: f1WingIso,
    images: [
      { src: f1WingIso, caption: "Isometric view — multi-element front wing" },
      { src: f1WingTop, caption: "Top view of wing geometry" },
      { src: f1WingFront, caption: "Front view — main plane, flaps & endplates" },
      { src: f1WingSide, caption: "Side view — element profiles" },
    ],
    specs: [
      { label: "Industry", value: "Automotive Aerodynamics / Motorsport" },
      { label: "Software", value: "SolidWorks" },
      { label: "Configurations", value: "Multiple flap angles + slot gaps" },
      { label: "Focus", value: "Aerodynamic geometry exploration" },
    ],
    overview:
      "A multi-element Formula 1 front wing developed in SolidWorks. The study explores flap angle and slot gap variations to evaluate aerodynamic interaction and design efficiency, providing a strong CAD foundation for downstream CFD analysis.",
    software: ["SolidWorks"],
  },
  {
    slug: "battery-pack-cad",
    title: "Li-ion Battery Pack — Cooling Architecture",
    category: "Thermal System Design",
    type: "cad",
    industry: "Energy Storage",
    description:
      "Straight-type and Z-type airflow configurations with 1 mm, 2 mm, and 3 mm cell spacing variations.",
    thumbnail: batteryStraight,
    images: [
      { src: batteryStraight, caption: "Straight-type airflow battery pack" },
      { src: batteryZtype, caption: "Z-type airflow battery pack" },
    ],
    specs: [
      { label: "Industry", value: "Energy Storage / EV" },
      { label: "Software", value: "SolidWorks" },
      { label: "Airflow Layouts", value: "Straight-type, Z-type" },
      { label: "Cell Spacing", value: "1 mm, 2 mm, 3 mm" },
      { label: "Outcome", value: "Optimised thermal & airflow design" },
    ],
    overview:
      "3D modelling of cylindrical Li-ion battery packs studying cell spacing and airflow layouts. The design evaluates straight-type vs Z-type configurations and three spacing variants to deliver a thermally balanced, hotspot-resistant module.",
    software: ["SolidWorks"],
  },
  {
    slug: "aircraft-wing-cad",
    title: "Aerodynamic Aircraft Wing & Rib",
    category: "Aerospace CAD",
    type: "cad",
    industry: "Aerospace",
    description:
      "Lightweight aircraft wing with airfoil-accurate skin and internal rib structure ready for CFD/FEA.",
    thumbnail: aircraftWingCad,
    images: [{ src: aircraftWingCad, caption: "3D CAD model of aircraft wing & airfoil profile" }],
    specs: [
      { label: "Industry", value: "Aerospace" },
      { label: "Software", value: "SolidWorks" },
      { label: "Features", value: "Airfoil skin, internal ribs, mounting tabs" },
      { label: "Readiness", value: "CFD & FEA-ready" },
    ],
    overview:
      "Advanced SolidWorks modelling of an aircraft wing with airfoil-accurate aerodynamic skin and internal rib structure. Built with aerospace lightweighting principles and clean geometry for downstream CFD or structural analysis.",
    software: ["SolidWorks"],
  },

  // ─────────────────────────────────────────────────────────────
  //  CFD / ANALYSIS PROJECTS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "quenching-chamber-cfd",
    title: "Quenching Chamber CFD",
    category: "CFD Analysis",
    type: "analysis",
    industry: "Polymer Processing",
    description:
      "Airflow and thermal CFD of an industrial quenching chamber to identify cooling inefficiencies.",
    thumbnail: quenchingPressure,
    images: [
      { src: quenchingPressure, caption: "Pressure contour with streamlines" },
      { src: quenchingTemp, caption: "Static temperature contour (K)" },
    ],
    specs: [
      { label: "Industry", value: "Polymer Processing" },
      { label: "Software", value: "ANSYS Fluent" },
      { label: "Flow", value: "Laminar, incompressible" },
      { label: "Analysis", value: "Velocity, pressure & temperature fields" },
    ],
    overview:
      "CFD study of a quenching chamber with non-uniform cooling. Using ANSYS Fluent we evaluated axial airflow, wake regions behind the fiber, and thermal distribution — pinpointing inefficiencies and providing actionable design improvements to reduce product defects.",
    software: ["ANSYS Fluent"],
  },
  {
    slug: "finned-tube-heat-exchanger-cfd",
    title: "Finned Tube Heat Exchanger CFD",
    category: "CFD Analysis",
    type: "analysis",
    industry: "HVAC",
    description:
      "Steady-state thermal CFD of a finned tube heat exchanger evaluating coil-wide heat distribution.",
    thumbnail: finnedTubeTemp,
    images: [{ src: finnedTubeTemp, caption: "Temperature contour across finned tube coil (~294–324 K)" }],
    specs: [
      { label: "Industry", value: "HVAC / Heat Transfer" },
      { label: "Software", value: "ANSYS Fluent 2024 R1" },
      { label: "Analysis", value: "Steady-state thermal" },
      { label: "Output", value: "Temperature contours & gradients" },
    ],
    overview:
      "Steady-state ANSYS Fluent simulation of a finned tube heat exchanger. The analysis quantified gradual temperature drop along the coil, validated fin-driven dissipation, and supported design optimisation for improved cooling/heating performance.",
    software: ["ANSYS Fluent"],
  },
  {
    slug: "f1-front-wing-cfd",
    title: "F1 Front Wing — Aerodynamic CFD",
    category: "External Aerodynamics",
    type: "analysis",
    industry: "Automotive Aerodynamics",
    description:
      "Comparative CFD of multi-element F1 front wing configurations evaluating drag and lift.",
    thumbnail: f1VelocityContour,
    images: [
      { src: f1VelocityContour, caption: "Velocity contour visualisation" },
      { src: f1Streamlines, caption: "Velocity streamline analysis" },
    ],
    specs: [
      { label: "Industry", value: "Motorsport / Automotive Aero" },
      { label: "Software", value: "ANSYS Fluent" },
      { label: "Study", value: "Flap angle + slot gap configurations" },
      { label: "Best Case", value: "+9.4% lift (with controlled drag trade-off)" },
    ],
    overview:
      "External aerodynamic CFD of a multi-element F1 front wing. We compared flap angles and slot gaps, identifying an optimised setup that produced ~9.4% lift improvement vs baseline with quantified drag trade-off — informing design decisions before physical testing.",
    software: ["ANSYS Fluent"],
  },
  {
    slug: "battery-pack-cfd",
    title: "Li-ion Battery Pack — Cooling CFD",
    category: "Thermal CFD",
    type: "analysis",
    industry: "Energy Storage",
    description:
      "ANSYS Fluent CFD comparing straight-type and Z-type airflow with multiple cell spacings.",
    thumbnail: batteryTemp,
    images: [
      { src: batteryMesh, caption: "Battery pack meshing — straight type" },
      { src: batteryTemp, caption: "Temperature contour — Z-type top view" },
      { src: batteryVelocity, caption: "Velocity contour — Z-type" },
    ],
    specs: [
      { label: "Industry", value: "Energy Storage / EV" },
      { label: "Software", value: "ANSYS Fluent, Meshing, CFD-Post" },
      { label: "Validation", value: "Reynolds & Nusselt correlations" },
      { label: "Outcome", value: "Reduced hotspots, improved uniformity" },
    ],
    overview:
      "Conjugate heat transfer CFD of cylindrical Li-ion battery packs. Comparative simulations of straight-type vs Z-type airflow and 1/2/3 mm cell spacings highlighted optimal configurations — reducing hotspot formation and improving thermal uniformity, validated against Reynolds and Nusselt-based correlations.",
    software: ["ANSYS Fluent", "ANSYS Meshing", "CFD-Post", "SolidWorks"],
  },
  {
    slug: "aircraft-wing-cfd",
    title: "Aircraft Wing CFD — Aerodynamic Profile",
    category: "External Aerodynamics",
    type: "analysis",
    industry: "Aerospace",
    description:
      "Pressure-based steady-state CFD with k-ω SST for lift, drag, and flow separation prediction.",
    thumbnail: wingPressure,
    images: [
      { src: wingMesh, caption: "ANSYS computational mesh & fluid domain" },
      { src: wingPressure, caption: "Total pressure contour — lift generation zones" },
      { src: wingVelocity, caption: "Velocity magnitude contour" },
      { src: wingVectors, caption: "Velocity vectors — trailing edge wake" },
    ],
    specs: [
      { label: "Industry", value: "Aerospace" },
      { label: "Software", value: "SolidWorks → ANSYS Fluent" },
      { label: "Solver", value: "Pressure-based steady-state" },
      { label: "Turbulence Model", value: "k-ω SST" },
      { label: "Outputs", value: "Lift, drag, pressure & velocity fields" },
    ],
    overview:
      "End-to-end aerodynamic CFD workflow: SolidWorks wing geometry exported via STEP/IGES, meshed in ANSYS, and solved in Fluent with k-ω SST. Pressure and velocity contours validate Bernoulli-driven lift generation and resolve trailing-edge wake behaviour for design refinement.",
    software: ["SolidWorks", "ANSYS Meshing", "ANSYS Fluent"],
  },

  // ─────────────────────────────────────────────────────────────
  //  ARCHITECTURE & INTERIOR PROJECTS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "residential-bim-plans",
    title: "Residential BIM Plans & Drawings",
    category: "2D & 3D Drafting",
    type: "architecture",
    industry: "Residential Architecture",
    description:
      "Detailed floor plans, elevations, sections, and walkthroughs using Autodesk Revit BIM.",
    thumbnail: archPlan1,
    images: [
      { src: archPlan1, caption: "Residential floor plan layouts" },
      { src: archPlan2, caption: "Section & elevation drawings" },
      { src: arch3d1, caption: "Revit 3D BIM view" },
      { src: arch3d2, caption: "Building information model" },
    ],
    specs: [
      { label: "Discipline", value: "Architectural Drafting / BIM" },
      { label: "Software", value: "Autodesk Revit, AutoCAD" },
      { label: "Deliverables", value: "Plans, sections, elevations, walkthroughs" },
      { label: "Standard", value: "Regulatory compliant layouts" },
    ],
    overview:
      "End-to-end architectural documentation for residential projects using Revit and AutoCAD. Includes precise staircase details, room dimensions, wall scheduling, structural sections, and full BIM 3D models for clear coordination and client review.",
    software: ["Autodesk Revit", "AutoCAD"],
  },
  {
    slug: "modern-villa-exteriors",
    title: "Modern Villa & Tower Exteriors",
    category: "Architectural Visualisation",
    type: "architecture",
    industry: "Residential Architecture",
    description:
      "Photo-realistic exteriors of modern villas, hillside homes, and high-rise tower facades.",
    thumbnail: archExt1,
    images: [
      { src: archExt1, caption: "Modern villa exterior — pool & lounge" },
      { src: archExt2, caption: "Hillside contemporary home" },
      { src: archExt3, caption: "Two-storey villa with landscaped grounds" },
      { src: archExt4, caption: "High-rise tower facade" },
      { src: archRender1, caption: "Driveway view — premium residence" },
      { src: archRender2, caption: "Palm-lined modern villa" },
    ],
    specs: [
      { label: "Discipline", value: "Architectural Rendering" },
      { label: "Software", value: "Revit + V-Ray / Lumion / Twinmotion / Corona" },
      { label: "Style", value: "Modern, minimalist, luxury" },
      { label: "Output", value: "High-end CGI with materials & lighting" },
    ],
    overview:
      "Ultra-realistic exterior renderings spanning modern A-frame cottages, minimalist luxury villas, and eco-friendly high-rise towers. Each render captures material selection, lighting, landscaping, and indoor–outdoor integration ready for client marketing and approvals.",
    software: ["Autodesk Revit", "V-Ray", "Lumion", "Twinmotion", "Corona"],
  },
  {
    slug: "luxury-interior-design",
    title: "Luxury Interior Design Renderings",
    category: "Interior Visualisation",
    type: "architecture",
    industry: "Interior Design",
    description:
      "Photo-realistic interiors — bedrooms, kitchens, bathrooms, and open living spaces.",
    thumbnail: archInt1,
    images: [
      { src: archInt1, caption: "Master bedroom with walk-in closet" },
      { src: archInt2, caption: "Bedroom with garden view" },
      { src: archInt3, caption: "Bedroom with fireplace" },
      { src: archInt4, caption: "Bedroom with feature window" },
      { src: archInt5, caption: "Modern kitchen & dining" },
      { src: archInt6, caption: "Living & dining open layout" },
      { src: archInt7, caption: "Spa-style bathroom" },
    ],
    specs: [
      { label: "Discipline", value: "Interior Architecture & CGI" },
      { label: "Software", value: "Revit + V-Ray / Lumion / Corona" },
      { label: "Spaces", value: "Bedrooms, kitchens, bathrooms, living rooms" },
      { label: "Style", value: "Luxury, modern, warm minimalist" },
    ],
    overview:
      "Premium interior visualisations focused on luxury, warmth, and optimal space utilisation — accent walls, ambient lighting, custom wardrobes, modular gourmet kitchens with marble islands, and spa-like bathrooms with freestanding tubs and gold-accented fixtures.",
    software: ["Autodesk Revit", "V-Ray", "Lumion", "Corona Renderer"],
  },
  {
    slug: "art-pavilion-3d",
    title: "Art Pavilion — 3D Concept",
    category: "Conceptual Architecture",
    type: "architecture",
    industry: "Commercial Architecture",
    description:
      "Sculptural pavilion concept with lattice walls developed through Revit 3D modelling.",
    thumbnail: arch3d1,
    images: [
      { src: arch3d1, caption: "Art Pavilion — exterior 3D view" },
      { src: arch3d2, caption: "Lattice wall structural detail" },
    ],
    specs: [
      { label: "Discipline", value: "Conceptual Architecture" },
      { label: "Software", value: "Autodesk Revit" },
      { label: "Feature", value: "Lattice facade & sculptural form" },
      { label: "Use", value: "Commercial / cultural pavilion" },
    ],
    overview:
      "A conceptual art pavilion exploring sculptural form and lattice facade engineering. Developed in Revit with detailed structural framing and curtain wall design — bridging architectural expression with constructible geometry.",
    software: ["Autodesk Revit"],
  },
];

export const cadProjects = projects.filter((p) => p.type === "cad");
export const analysisProjects = projects.filter((p) => p.type === "analysis");
export const architectureProjects = projects.filter((p) => p.type === "architecture");
export const industries = [...new Set(projects.map((p) => p.industry))].sort();

export default projects;
