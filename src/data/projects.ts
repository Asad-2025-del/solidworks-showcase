import assem1 from "@/assets/assem1.png";
import assem1Drawing from "@/assets/assem1-drawing.png";
import chairRender1 from "@/assets/chair-render1.png";
import chairRender2 from "@/assets/chair-render2.png";
import chairDrawing from "@/assets/chair-drawing.png";
import gearboxRender from "@/assets/gearbox-render.jpg";
import gearboxDrawing from "@/assets/gearbox-drawing.jpg";
import liftRender from "@/assets/lift-render.png";
import liftDrawing from "@/assets/lift-drawing.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import mixtankPathlines from "@/assets/mixtank-pathlines.jpg";
import mixtankTemp from "@/assets/mixtank-temp.jpg";
import airfoilPressure from "@/assets/airfoil-pressure.jpg";
import airfoilVelocity from "@/assets/airfoil-velocity.jpg";
import heatsinkTemp from "@/assets/heatsink-temp.jpeg";
import heatsinkCad from "@/assets/heatsink-cad.jpeg";
import heatsinkPressure from "@/assets/heatsink-pressure.jpeg";
import heatsink3d from "@/assets/heatsink-3d.jpeg";
import pipelineCfd from "@/assets/pipeline-cfd.jpg";
import turbineFea from "@/assets/turbine-fea.jpg";
import hvacDuctCfd from "@/assets/hvac-duct-cfd.jpg";
import subseaManifold from "@/assets/subsea-manifold.jpg";
import wingRibCad from "@/assets/wing-rib-cad.jpg";
import ahuCad from "@/assets/ahu-cad.jpg";

export type ProjectType = "cad" | "analysis";

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
  // ── CAD Projects ──
  {
    slug: "gearbox-assembly",
    title: "Gearbox Assembly Design",
    category: "SolidWorks CAD",
    type: "cad",
    industry: "Manufacturing",
    description:
      "Complete multi-stage gearbox assembly with tolerance analysis and manufacturing drawings.",
    thumbnail: project1,
    images: [
      { src: gearboxRender, caption: "Isometric render of multi-stage gearbox" },
      { src: gearboxDrawing, caption: "Engineering drawing — A4 sheet with section views" },
    ],
    specs: [
      { label: "Gear Stages", value: "3-stage spur gear train" },
      { label: "Material", value: "AISI 4140 steel (gears), 6061-T6 aluminium (housing)" },
      { label: "Input Speed", value: "1450 RPM" },
      { label: "Output Torque", value: "320 N·m" },
      { label: "Gear Module", value: "2.5 mm" },
      { label: "Tolerances", value: "ISO 2768-mK" },
      { label: "Scale", value: "1:2" },
    ],
    overview:
      "A fully parametric multi-stage gearbox designed in SolidWorks featuring three spur-gear stages enclosed in a split aluminium housing. The project includes detailed manufacturing drawings with GD&T callouts, BOM, and tolerance stack-up analysis to ensure reliable assembly.",
    software: ["SolidWorks 2024", "SolidWorks Simulation", "DraftSight"],
  },
  {
    slug: "bracket-assembly",
    title: "L-Bracket Assembly",
    category: "SolidWorks CAD",
    type: "cad",
    industry: "Manufacturing",
    description:
      "Precision L-bracket assembly with fastener detailing and multi-view engineering drawings.",
    thumbnail: assem1,
    images: [
      { src: assem1, caption: "3D render of L-bracket with hex bolt" },
      { src: assem1Drawing, caption: "A3 engineering drawing with orthographic projections" },
    ],
    specs: [
      { label: "Bracket Material", value: "AISI 304 stainless steel" },
      { label: "Thickness", value: "5 mm" },
      { label: "Fastener", value: "M8 × 16 hex cap screw" },
      { label: "Surface Finish", value: "Ra 1.6 µm" },
      { label: "Sheet Size", value: "A3" },
      { label: "Tolerances", value: "ISO 2768-mK" },
    ],
    overview:
      "A precision stainless-steel L-bracket assembly modelled in SolidWorks. Includes fully constrained mates, exploded views, and a complete A3 drawing package with orthographic projections and isometric detail.",
    software: ["SolidWorks 2024"],
  },
  {
    slug: "chair-design",
    title: "Modern Chair Design",
    category: "Industrial Design",
    type: "cad",
    industry: "Consumer Products",
    description:
      "Ergonomic modern chair concept with dual-material construction and full drawing package.",
    thumbnail: chairRender2,
    images: [
      { src: chairRender2, caption: "Isometric render — rear view" },
      { src: chairRender1, caption: "Side profile render" },
      { src: chairDrawing, caption: "A4 engineering drawing with multiple views" },
    ],
    specs: [
      { label: "Frame Material", value: "Die-cast aluminium alloy" },
      { label: "Seat Material", value: "Injection-moulded beech wood composite" },
      { label: "Seat Height", value: "450 mm" },
      { label: "Overall Height", value: "820 mm" },
      { label: "Weight", value: "~4.2 kg" },
      { label: "Load Rating", value: "120 kg" },
    ],
    overview:
      "A contemporary chair concept combining a sculptural aluminium frame with warm beech-wood composite seating. Designed for manufacturability using die-casting and injection moulding processes, with a full multi-view drawing sheet for production hand-off.",
    software: ["SolidWorks 2024", "KeyShot"],
  },
  {
    slug: "lift-mechanism",
    title: "Scissor Lift Mechanism",
    category: "Mechanism Design",
    type: "cad",
    industry: "Industrial Equipment",
    description:
      "Hydraulic scissor lift mechanism with kinematic analysis and detailed assembly drawings.",
    thumbnail: liftRender,
    images: [
      { src: liftRender, caption: "Isometric render of lift in raised position" },
      { src: liftDrawing, caption: "A4 engineering drawing with exploded view" },
    ],
    specs: [
      { label: "Lift Type", value: "Single-stage scissor" },
      { label: "Platform Size", value: "600 × 500 mm" },
      { label: "Stroke", value: "250 mm" },
      { label: "Actuator", value: "Hydraulic cylinder, 20 mm bore" },
      { label: "Material", value: "Mild steel arms, MDF platforms" },
      { label: "Load Capacity", value: "200 kg" },
      { label: "Scale", value: "1:2" },
    ],
    overview:
      "A parametric scissor-lift mechanism driven by a single hydraulic cylinder. The project covers kinematic motion study, force analysis at full extension, and a complete drawing package with BOM. Ideal for ergonomic workstation or industrial positioning applications.",
    software: ["SolidWorks 2024", "SolidWorks Motion"],
  },

  // ── Analysis Projects ──
  {
    slug: "pressure-vessel-fea",
    title: "Pressure Vessel FEA",
    category: "Stress Analysis",
    type: "analysis",
    industry: "Oil & Gas",
    description:
      "Finite element analysis of a high-pressure vessel with thermal-structural coupling and fatigue life prediction.",
    thumbnail: project2,
    images: [
      { src: project2, caption: "Von Mises stress distribution" },
    ],
    specs: [
      { label: "Vessel Type", value: "Cylindrical, hemispherical heads" },
      { label: "Design Pressure", value: "15 MPa" },
      { label: "Material", value: "SA-516 Gr. 70 carbon steel" },
      { label: "Wall Thickness", value: "28 mm" },
      { label: "Temperature Range", value: "20 – 350 °C" },
      { label: "Mesh Elements", value: "~450 000 tetrahedral" },
      { label: "Code", value: "ASME BPVC Section VIII, Div. 2" },
    ],
    overview:
      "A comprehensive finite element study of a cylindrical pressure vessel operating under combined internal pressure and thermal loads. Includes stress linearisation per ASME BPVC, fatigue life estimation, and nozzle reinforcement evaluation.",
    software: ["ANSYS Mechanical", "SolidWorks"],
  },
  {
    slug: "aerodynamic-cfd",
    title: "Aerodynamic CFD Study",
    category: "Flow Simulation",
    type: "analysis",
    industry: "Automotive",
    description:
      "Computational fluid dynamics analysis for drag reduction and thermal management optimization.",
    thumbnail: project3,
    images: [
      { src: project3, caption: "Velocity streamlines over body" },
    ],
    specs: [
      { label: "Flow Regime", value: "Incompressible, turbulent (k-ω SST)" },
      { label: "Inlet Velocity", value: "30 m/s" },
      { label: "Reynolds Number", value: "~2.1 × 10⁶" },
      { label: "Mesh Cells", value: "~3.2 M polyhedral" },
      { label: "Cd Reduction", value: "12 % vs baseline" },
      { label: "Solver", value: "Pressure-based, SIMPLE" },
    ],
    overview:
      "An external aerodynamics study using CFD to quantify drag and optimise surface geometry for reduced air resistance. Includes mesh independence study, turbulence model validation, and parametric shape optimisation.",
    software: ["ANSYS Fluent", "SolidWorks Flow Simulation"],
  },
  {
    slug: "airfoil-cfd",
    title: "Airfoil CFD Analysis",
    category: "CFD Analysis",
    type: "analysis",
    industry: "Aerospace",
    description:
      "Static pressure and velocity field analysis around an airfoil using ANSYS Fluent.",
    thumbnail: airfoilPressure,
    images: [
      { src: airfoilPressure, caption: "Static pressure contour around airfoil" },
      { src: airfoilVelocity, caption: "Velocity magnitude field around airfoil" },
    ],
    specs: [
      { label: "Airfoil", value: "NACA series" },
      { label: "Flow Regime", value: "Incompressible, turbulent" },
      { label: "Analysis Type", value: "2D steady-state" },
      { label: "Solver", value: "Pressure-based" },
      { label: "Turbulence Model", value: "k-ω SST" },
    ],
    overview:
      "A 2D CFD study of flow around an airfoil section examining static pressure distribution and velocity fields. Used to evaluate lift and drag characteristics at varying angles of attack.",
    software: ["ANSYS Fluent 2024 R2"],
  },
  {
    slug: "mixing-tank-cfd",
    title: "Mixing Tank Thermal CFD",
    category: "CFD Analysis",
    type: "analysis",
    industry: "HVAC",
    description:
      "Thermal-fluid simulation of a mixing tank with temperature pathlines and contour analysis.",
    thumbnail: mixtankPathlines,
    images: [
      { src: mixtankPathlines, caption: "Temperature pathlines in mixing tank" },
      { src: mixtankTemp, caption: "Static temperature contour — cross-section" },
    ],
    specs: [
      { label: "Analysis Type", value: "Conjugate heat transfer" },
      { label: "Temperature Range", value: "288 – 358 K" },
      { label: "Flow Type", value: "Turbulent mixing" },
      { label: "Solver", value: "Pressure-based, coupled" },
      { label: "Visualisation", value: "Pathlines & contours" },
    ],
    overview:
      "A conjugate heat transfer simulation of a mixing tank analysing temperature distribution through pathlines and contour plots. The study evaluates thermal mixing efficiency and identifies hot/cold zones within the chamber.",
    software: ["ANSYS Fluent 2024 R2"],
  },
  {
    slug: "heatsink-cfd",
    title: "Pin-Fin Heat Sink CFD",
    category: "Thermal Analysis",
    type: "analysis",
    industry: "Electronics",
    description:
      "Thermal and flow analysis of a pin-fin heat sink with temperature and pressure distribution.",
    thumbnail: heatsinkTemp,
    images: [
      { src: heatsinkCad, caption: "3D CAD model of pin-fin heat sink" },
      { src: heatsink3d, caption: "Isometric view — transparent enclosure" },
      { src: heatsinkTemp, caption: "Static temperature contour — top plane" },
      { src: heatsinkPressure, caption: "Static pressure contour — top plane" },
    ],
    specs: [
      { label: "Fin Type", value: "Cylindrical pin-fin array" },
      { label: "Array", value: "5 × 5 staggered" },
      { label: "Temperature Range", value: "298 – 333 K" },
      { label: "Pressure Drop", value: "~64 Pa max" },
      { label: "Analysis Type", value: "Conjugate heat transfer + flow" },
      { label: "Solver", value: "ANSYS Fluent, pressure-based" },
    ],
    overview:
      "A comprehensive thermal-fluid analysis of a staggered pin-fin heat sink. The study covers temperature distribution, pressure drop across the fin array, and flow patterns to optimise cooling performance for electronics applications.",
    software: ["ANSYS Fluent 2025 R2", "ANSYS SpaceClaim"],
  },

  // ── Oil & Gas ──
  {
    slug: "pipeline-flow-cfd",
    title: "Pipeline Junction CFD",
    category: "Flow Simulation",
    type: "analysis" as const,
    industry: "Oil & Gas",
    description:
      "Multiphase CFD analysis of flow through a subsea pipeline junction with erosion prediction.",
    thumbnail: pipelineCfd,
    images: [
      { src: pipelineCfd, caption: "Velocity contour through pipeline junction" },
    ],
    specs: [
      { label: "Flow Regime", value: "Multiphase (oil-water-gas)" },
      { label: "Pipe Diameter", value: "12\" (DN300)" },
      { label: "Operating Pressure", value: "25 MPa" },
      { label: "Mesh Cells", value: "~4.8 M polyhedral" },
      { label: "Turbulence Model", value: "Realizable k-ε" },
      { label: "Erosion Model", value: "DNV-RP-O501" },
    ],
    overview:
      "A multiphase CFD study of flow through a subsea pipeline tee-junction, predicting velocity distribution, pressure drop, and erosion-prone zones. Results informed weld overlay placement and wall-thickness optimisation to extend service life.",
    software: ["ANSYS Fluent", "ANSYS Meshing"],
  },
  {
    slug: "subsea-manifold",
    title: "Subsea Manifold Assembly",
    category: "SolidWorks CAD",
    type: "cad" as const,
    industry: "Oil & Gas",
    description:
      "Detailed CAD model of a subsea production manifold with valve assemblies and piping.",
    thumbnail: subseaManifold,
    images: [
      { src: subseaManifold, caption: "Isometric render of subsea manifold" },
    ],
    specs: [
      { label: "Material", value: "Super duplex stainless steel" },
      { label: "Design Pressure", value: "690 bar" },
      { label: "Bore Sizes", value: "4\" – 10\"" },
      { label: "Valves", value: "6 × gate valves, 2 × choke" },
      { label: "Depth Rating", value: "3 000 m" },
      { label: "Standard", value: "API 17D / ISO 13628-4" },
    ],
    overview:
      "A fully detailed subsea manifold assembly modelled in SolidWorks for a deepwater production system. Includes gate valves, choke valves, hub connectors, and structural frame designed to API 17D requirements.",
    software: ["SolidWorks 2024", "DraftSight"],
  },

  // ── Aerospace ──
  {
    slug: "turbine-blade-fea",
    title: "Turbine Blade FEA",
    category: "Stress Analysis",
    type: "analysis" as const,
    industry: "Aerospace",
    description:
      "Thermo-structural FEA of a gas turbine blade under centrifugal and thermal loading.",
    thumbnail: turbineFea,
    images: [
      { src: turbineFea, caption: "Von Mises stress distribution on turbine casing" },
    ],
    specs: [
      { label: "Material", value: "Inconel 718 nickel alloy" },
      { label: "Rotational Speed", value: "12 000 RPM" },
      { label: "Gas Temperature", value: "1 150 °C" },
      { label: "Mesh Elements", value: "~620 000 hex-dominant" },
      { label: "Analysis Type", value: "Coupled thermo-structural" },
      { label: "Creep Model", value: "Norton power law" },
    ],
    overview:
      "A coupled thermo-structural finite element analysis of a first-stage gas turbine blade subjected to centrifugal loading, thermal gradients, and gas-path pressure. Creep life assessment was performed using the Larson-Miller parameter.",
    software: ["ANSYS Mechanical", "ANSYS Workbench"],
  },
  {
    slug: "wing-rib-design",
    title: "Aircraft Wing Rib Design",
    category: "SolidWorks CAD",
    type: "cad" as const,
    industry: "Aerospace",
    description:
      "Lightweight wing rib structure with lightening holes and stiffener optimisation.",
    thumbnail: wingRibCad,
    images: [
      { src: wingRibCad, caption: "Isometric view of machined wing rib" },
    ],
    specs: [
      { label: "Material", value: "7075-T6 aluminium alloy" },
      { label: "Chord Length", value: "1 200 mm" },
      { label: "Thickness", value: "3.2 mm (web), 6 mm (flanges)" },
      { label: "Weight Saving", value: "34 % vs solid plate" },
      { label: "Manufacturing", value: "5-axis CNC milling" },
      { label: "Standard", value: "EASA CS-25" },
    ],
    overview:
      "A lightweight wing rib designed for a commuter aircraft, featuring topology-optimised lightening holes and integral stiffeners. The design reduces mass by 34 % while meeting EASA CS-25 static strength and fatigue requirements.",
    software: ["SolidWorks 2024", "Altair Inspire"],
  },

  // ── HVAC ──
  {
    slug: "hvac-duct-cfd",
    title: "HVAC Duct Flow CFD",
    category: "CFD Analysis",
    type: "analysis" as const,
    industry: "HVAC",
    description:
      "Air distribution CFD study for a commercial building ductwork system with thermal comfort analysis.",
    thumbnail: hvacDuctCfd,
    images: [
      { src: hvacDuctCfd, caption: "Velocity pathlines through duct network" },
    ],
    specs: [
      { label: "System Type", value: "Variable Air Volume (VAV)" },
      { label: "Supply Air", value: "5 000 CFM" },
      { label: "Temperature Range", value: "12 – 24 °C" },
      { label: "Mesh Cells", value: "~2.4 M polyhedral" },
      { label: "Turbulence Model", value: "k-ε RNG" },
      { label: "Standard", value: "ASHRAE 55 / 62.1" },
    ],
    overview:
      "A CFD analysis of air distribution in a commercial HVAC duct system to evaluate flow uniformity, pressure losses, and thermal comfort. Results guided damper sizing and diffuser selection to meet ASHRAE 55 comfort criteria.",
    software: ["ANSYS Fluent 2024 R2", "AutoCAD MEP"],
  },
  {
    slug: "ahu-design",
    title: "Air Handling Unit Design",
    category: "SolidWorks CAD",
    type: "cad" as const,
    industry: "HVAC",
    description:
      "Complete AHU design with fan, coil, and filter sections for commercial ventilation.",
    thumbnail: ahuCad,
    images: [
      { src: ahuCad, caption: "Cutaway render of air handling unit" },
    ],
    specs: [
      { label: "Airflow", value: "10 000 CFM" },
      { label: "Fan Type", value: "Backward-curved centrifugal" },
      { label: "Coil Rows", value: "6-row chilled water" },
      { label: "Filter", value: "MERV 13 + HEPA" },
      { label: "Casing", value: "Double-skin insulated panels" },
      { label: "Standard", value: "ASHRAE 90.1 / EN 1886" },
    ],
    overview:
      "A fully parametric air handling unit designed in SolidWorks for a commercial building HVAC system. Includes centrifugal fan, chilled water coils, multi-stage filtration, and double-skin insulated casing with access panels.",
    software: ["SolidWorks 2024", "HAP (Carrier)"],
  },
];

export const cadProjects = projects.filter((p) => p.type === "cad");
export const analysisProjects = projects.filter((p) => p.type === "analysis");
export const industries = [...new Set(projects.map((p) => p.industry))].sort();

export default projects;
