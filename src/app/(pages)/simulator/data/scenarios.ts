/**
 * The scenarios for the simulator
 */
export const scenarios = [
  {
    id: "support",
    title: "Customer Support Call",
    description:
      "Handle a customer asking for a refund due to a defective product.",
  },
  {
    id: "sales",
    title: "Sales Discovery",
    description: "Qualify a lead for a B2B SaaS product and schedule a demo.",
  },
  {
    id: "collections",
    title: "Billing Collections",
    description: "Follow up on an overdue invoice while maintaining rapport.",
  },
] as const;
