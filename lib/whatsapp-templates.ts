export interface WATemplate {
  id: string;
  name: string;
  message: string;
}

export const defaultTemplates: WATemplate[] = [
  {
    id: "soft-follow-up",
    name: "Soft Follow-up",
    message: "Hi {{name}}, you showed interest in this product:\n{{product}}\n\nHere's the link:\n{{link}}\n\nLet me know if you have any questions 🙂",
  },
  {
    id: "urgency-offer",
    name: "Urgency Offer",
    message: "Hey {{name}}! This product is getting a lot of orders:\n{{product}}\n\nGrab it here:\n{{link}}\n\nI can also help you with a special discount today.",
  },
  {
    id: "cod-confirmation",
    name: "COD Confirmation",
    message: "Hi {{name}}, just confirming your interest in:\n{{product}}\n\nLink:\n{{link}}\n\nReply YES and we'll reserve it for you.",
  },
];

export const formatWhatsAppNumber = (phone: string): string => {
  if (!phone) return "";
  let digits = phone.replace(/[^0-9]/g, "");
  if (digits.length === 10) {
    digits = "91" + digits; // Assume India +91 if 10 digits
  }
  return digits;
};

export const generateWhatsAppLink = (lead: any, template: WATemplate): string => {
  const phone = formatWhatsAppNumber(lead.phone);
  if (!phone) return "";

  const name = lead.name || "there";
  const product = lead.product_name || lead.detected_product || "our product";
  const link = lead.product_url || "#";

  const text = template.message
    .replace(/{{name}}/g, name)
    .replace(/{{product}}/g, product)
    .replace(/{{link}}/g, link);

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
