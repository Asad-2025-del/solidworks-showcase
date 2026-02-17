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

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: { src: string; caption: string }[];
  specs: { label: string; value: string }[];
  overview: string;
  software: string[];
}

const projects: Project[] = [
  {
    slug: "gearbox-assembly",
    title: "Gearbox Assembly Design",
    category: "SolidWorks CAD",
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
  {
    slug: "pressure-vessel-fea",
    title: "Pressure Vessel FEA",
    category: "Stress Analysis",
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
];

export default projects;
