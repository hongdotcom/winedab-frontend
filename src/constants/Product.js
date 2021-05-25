export function getPrice(planName) {
  if (planName.line_items[0].name.includes("Everyday Exceptional")) {
    return "119.98";
  }
  if (planName.line_items[0].name.includes("Bargain Bottles")) {
    return "96.44";
  }
  if (planName.line_items[0].name.includes("Exquisite Entertaining")) {
    return "156.44";
  }
  if (planName.line_items[0].name.includes("Stellar Selection")) {
    return "288.44";
  }
}

export function getProduct(planName) {
  if (planName.line_items[0].name.includes("Everyday Exceptional")) {
    return "15836";
  }
  if (planName.line_items[0].name.includes("Bargain Bottles")) {
    return "15868";
  }
  if (planName.line_items[0].name.includes("Exquisite Entertaining")) {
    return "15869";
  }
  if (planName.line_items[0].name.includes("Stellar Selection")) {
    return "15870";
  }
}
