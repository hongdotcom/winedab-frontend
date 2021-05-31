export default function getSKU(planName) {
  if (planName.includes("Everyday Exceptional")) {
    return "15836";
  }
  if (planName.includes("Bargain Bottles")) {
    return "15868";
  }
  if (planName.includes("Exquisite Entertaining")) {
    return "15869";
  }
  if (planName.includes("Stellar Selection")) {
    return "15870";
  }
  return "xxxxx";
}
