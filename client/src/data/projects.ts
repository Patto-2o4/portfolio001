export interface ProjectProcess {
  stage: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectTechnicalSpecs {
  polycount?: string;
  textures?: string;
  shaders?: string;
  renderer?: string;
  duration?: string;
}

export interface Project {
  id: number;
  number: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  process: ProjectProcess[];
  technicalSpecs: ProjectTechnicalSpecs;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Luxury Watch Visualization",
    client: "Premium Timepieces Inc.",
    year: "2024",
    category: "Product Design",
    description: "Interactive 3D WebGL showcase of a luxury skeleton chronograph watch, supporting real-time configuration.",
    image: "W",
    tools: ["Blender", "Spline", "Substance Painter", "WebGL"],
    fullDescription: "A comprehensive design project focused on bringing absolute luxury watch craftsmanship to the web browser. The goal was to render every gear, balance wheel, and hand of a skeleton chronograph watch in real-time 3D, allowing consumers to interactively explore micro-details and customize dial colors in real time.",
    challenge: "Rendering 1.2 million polygons of microscopic metallic gears, sapphire glass, and brushed gold textures in the web browser at 60 FPS while keeping the asset bundle size under 8MB to ensure instant page load.",
    solution: "Used Blender to decimate high-poly industrial CAD models to 82,000 polygons using custom low-poly retopology. Baked ambient occlusion and normal maps in Substance Painter, and implemented a custom WebGL refraction shader in Spline for the sapphire crystal dome.",
    results: "Triggered a 45% increase in online timepiece custom pre-orders, grew active user on-page dwell time by 180 seconds, and reduced physical showroom inquiry lifecycles by 25%.",
    process: [
      {
        stage: "01 / CAD Prep",
        title: "Retopology & Decimation",
        description: "Optimizing industrial CAD watch blueprints into high-fidelity web-friendly polygons.",
        icon: "Cpu"
      },
      {
        stage: "02 / Texturing",
        title: "PBR Material Crafting",
        description: "Baking detailed gold, titanium, and steel brushed metal maps in Substance Painter.",
        icon: "Palette"
      },
      {
        stage: "03 / Lighting",
        title: "Studio Light Setup",
        description: "Configuring photorealistic three-point studio lights and high-dynamic-range image maps.",
        icon: "Sun"
      },
      {
        stage: "04 / Integration",
        title: "WebGL & Interactivity",
        description: "Integrating 3D assets into WebGL using Spline triggers for real-time customizable parts.",
        icon: "Globe"
      }
    ],
    technicalSpecs: {
      polycount: "82,500 Triangles",
      textures: "4K PBR Metallic/Roughness Maps",
      shaders: "Custom Glass Refraction & Anisotropic Metal",
      renderer: "WebGL (Spline Engine)"
    }
  },
  {
    id: 2,
    number: "02",
    title: "Architectural Eco-Flythrough",
    client: "Urban Development Co.",
    year: "2023",
    category: "Architecture",
    description: "A photorealistic 4K architectural flythrough animation showcasing an eco-friendly residential complex with passive cooling design.",
    image: "B",
    tools: ["Cinema 4D", "Unreal Engine 5", "After Effects", "V-Ray"],
    fullDescription: "This cinematic flythrough animation is part of a sustainable housing masterplan. It visualizes organic residential architecture integrating green rooftop gardens, solar canopies, and micro-climate wind tunnels, demonstrating how natural ventilation works in the structural design.",
    challenge: "Simulating complex photorealistic forest foliage, moving trees, wind-swept water reflections, and natural daylight changes across the day-night cycle without heavy rendering noise or visual stutters.",
    solution: "Utilized Unreal Engine 5's Lumen global illumination system for instant photorealistic lighting. Designed procedural grass and wind shader vectors, rendering high-impact 4K animation sequences at 60 FPS.",
    results: "Enabled the client to secure 100% of pre-sale apartment reservations within 14 days of the video launch, generating over 8.2 million impressions on international real estate channels.",
    process: [
      {
        stage: "01 / Landscape",
        title: "Terrain & Foliage Modeling",
        description: "Modeling procedural terrain and scatter-planting detailed low-poly foliage.",
        icon: "TreePine"
      },
      {
        stage: "02 / Lighting",
        title: "Lumen GI Setup",
        description: "Setting up real-time dynamic daylighting and sky atmospheric scattering.",
        icon: "Sun"
      },
      {
        stage: "03 / Camera",
        title: "Cinematic Choreography",
        description: "Designing smooth, narrative-driven virtual camera flythroughs and speed ramps.",
        icon: "Camera"
      },
      {
        stage: "04 / Compositing",
        title: "Post-Processing",
        description: "Color grading, sound integration, and atmosphere enhancements in After Effects.",
        icon: "Film"
      }
    ],
    technicalSpecs: {
      polycount: "6.8 Million (Procedural Instancing)",
      textures: "Sub-surface Scattering & Dynamic Glass",
      shaders: "Ray-Traced Ambient Occlusion & Real-Time Global Illumination",
      renderer: "Unreal Engine 5 (Lumen)"
    }
  },
  {
    id: 3,
    number: "03",
    title: "SaaS Brand Motion Graphics",
    client: "Tech Startup XYZ",
    year: "2024",
    category: "Motion Graphics",
    description: "High-impact brand intro and promo video combining 3D abstract fluid simulations and kinetic typography.",
    image: "M",
    tools: ["After Effects", "Premiere Pro", "Cinema 4D", "Figma"],
    fullDescription: "A dynamic and fast-paced promotional motion graphic designed for the launch of a new SaaS AI cloud platform. The video uses futuristic neon colors, morphing 3D geometric shapes, and kinetic typography to explain complex cloud data pipelines in under 30 seconds.",
    challenge: "Creating seamless visual transitions where 3D abstract shapes morph smoothly into a 2D interface design while keeping viewers highly engaged from the first second.",
    solution: "Used Cinema 4D for the 3D abstract glass elements and After Effects for 2D UI composition and text. Applied custom kinetic velocity curves to sync frame movement perfectly with electronic beats.",
    results: "Boosted click-through rates by 220%, increased total lead sign-ups by 140%, and achieved a 92% viewer retention rate through the entire video runtime.",
    process: [
      {
        stage: "01 / Concept",
        title: "Storyboarding & Syncing",
        description: "Drafting style frames in Figma and mapping scene timing to deep electronic audio beats.",
        icon: "Layers"
      },
      {
        stage: "02 / 3D Simulation",
        title: "Fluid Morphing",
        description: "Simulating glowing liquid glass shapes and gravity fields in Cinema 4D.",
        icon: "Sparkles"
      },
      {
        stage: "03 / Typography",
        title: "Kinetic Layout",
        description: "Designing fast-moving typography and neon vectors synced with screen transitions.",
        icon: "Type"
      },
      {
        stage: "04 / Render",
        title: "Sound FX & Grading",
        description: "Mixing atmospheric synth sound design, motion blurs, and vibrant glow effects.",
        icon: "Volume2"
      }
    ],
    technicalSpecs: {
      polycount: "N/A (Vector & Simulation)",
      textures: "Procedural Emission Shaders",
      shaders: "Refraction & Chroma-Shift Glow",
      renderer: "After Effects & Redshift"
    }
  },
  {
    id: 4,
    number: "04",
    title: "Apex Supercar Concept",
    client: "Apex Motors",
    year: "2025",
    category: "3D Animation",
    description: "3D styling design and epic promotional reveal animation for an electric concept hypercar with active aerodynamics.",
    image: "C",
    tools: ["Blender", "Octane Render", "After Effects", "DaVinci Resolve"],
    fullDescription: "An artistic design exploration and premium commercial reveal for the Apex electric hypercar. The project highlights futuristic active aerodynamic spoilers, sleek carbon fiber body lines, and an animated LED laser lighting system that reacts dynamically to acceleration.",
    challenge: "Creating absolutely flawless, high-gloss automotive car paint shaders that reflect studio lights smoothly without any texture pixelation during close-up camera moves.",
    solution: "Engineered multi-layered paint shaders (base coat, metallic flakes, clear coat) using Octane Render. Setup a cyclorama studio stage with automated neon light rings that travel along the car body to accent its contours.",
    results: "Won the Best Automotive CGI Concept award in 2025, and established a premium visual asset library used directly in international digital marketing campaigns.",
    process: [
      {
        stage: "01 / Modeling",
        title: "Surface Subdivision Modeling",
        description: "Creating precise curvature-continuous surfaces for the carbon fiber chassis.",
        icon: "Compass"
      },
      {
        stage: "02 / Materials",
        title: "Multi-Coat Car Paint",
        description: "Creating custom metallic flake car paint and anisotropic brake disc materials.",
        icon: "Palette"
      },
      {
        stage: "03 / Animation",
        title: "Active Aero Mechanics",
        description: "Rigging suspension coils, rotating tire treads, and motorized aerodynamic spoilers.",
        icon: "Dribbble"
      },
      {
        stage: "04 / Lighting",
        title: "Studio Cyclorama",
        description: "Setting up continuous neon light rigs and smoke simulations for a moody reveal.",
        icon: "Wind"
      }
    ],
    technicalSpecs: {
      polycount: "380,000 Polygons (Highly detailed)",
      textures: "Procedural Car Paint & 8K Carbon Texture Maps",
      shaders: "Multi-layered Lacquered Clear Coat & Heated Steel Glow",
      renderer: "Octane Render (Blender)"
    }
  }
];
