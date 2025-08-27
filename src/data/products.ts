import { Product, Category } from "@/types";

export const categories: Category[] = [
  "Panels",
  "Charge Controllers",
  "Batteries",
  "Inverters",
  "Mounting",
  "Monitoring",
  "Appliances",
];
export const products: Product[] = [
  {
    id: "p1",
    name: "300W Monocrystalline Solar Panel",
    description:
      "High-efficiency monocrystalline panel, ideal for residential rooftop installations.",
    price: 249.99,
    imageUrl: "/1.png",
    category: "Panels",
  },
  {
    id: "p2",
    name: "MPPT Charge Controller 40A",
    description:
      "Smart maximum power point tracking charge controller with LCD display.",
    price: 139.0,
    imageUrl: "/2.png",
    category: "Charge Controllers",
  },
  {
    id: "p3",
    name: "5kWh Lithium-Ion Solar Battery",
    description:
      "Long-lasting lithium battery with built-in BMS for off-grid and backup applications.",
    price: 2899.99,
    imageUrl: "/3.png",
    category: "Batteries",
  },
  {
    id: "p4",
    name: "1500W Pure Sine Wave Inverter",
    description:
      "Converts DC to clean AC power, suitable for sensitive electronics and appliances.",
    price: 499.0,
    imageUrl: "/4.png",
    category: "Inverters",
  },
  {
    id: "p5",
    name: "Adjustable Solar Panel Mount Kit",
    description:
      "Durable aluminum mounting system, adjustable tilt for optimal sun exposure.",
    price: 89.99,
    imageUrl: "/5.png",
    category: "Mounting",
  },
  {
    id: "p6",
    name: "200W Flexible Solar Panel",
    description:
      "Lightweight flexible panel for RVs, boats, and curved surfaces.",
    price: 199.99,
    imageUrl: "/6.png",
    category: "Panels",
  },
  {
    id: "p7",
    name: "Bluetooth Solar Monitoring Module",
    description:
      "Connects to your charge controller for live performance tracking on your phone.",
    price: 59.99,
    imageUrl: "/7.png",
    category: "Monitoring",
  },
  {
    id: "p8",
    name: "12V Deep Cycle AGM Battery 100Ah",
    description:
      "Sealed lead-acid battery, maintenance-free, ideal for backup power.",
    price: 249.0,
    imageUrl: "/8.png",
    category: "Batteries",
  },
  {
    id: "p14",
    name: "Off-Grid Solar Kit 1kW",
    description: "Complete kit with panels, controller, inverter, and battery.",
    price: 3499.0,
    imageUrl: "/6.png",
    category: "Appliances", // grouped kits under Appliances
  },
  {
    id: "p15",
    name: "Hybrid Inverter 3kW",
    description: "Grid-tie with battery backup and smart monitoring.",
    price: 1899.99,
    imageUrl: "/7.png",
    category: "Inverters",
  },
  {
    id: "p28",
    name: "Solar Refrigeration Unit 50L",
    description: "Off-grid fridge for cabins and remote areas.",
    price: 1249.0,
    imageUrl: "/4.png",
    category: "Appliances",
  },
  {
    id: "p29",
    name: "Solar Heated Outdoor Shower",
    description: "Uses solar energy to heat water for outdoor use.",
    price: 219.0,
    imageUrl: "/5.png",
    category: "Appliances",
  },
  {
    id: "p30",
    name: "Grid-Tie Inverter 5kW",
    description:
      "High-efficiency inverter for feeding solar power to the grid.",
    price: 2599.99,
    imageUrl: "/6.png",
    category: "Inverters",
  },
];