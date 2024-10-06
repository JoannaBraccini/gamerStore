export default class Currency {
  static format(
    amount: number,
    location: string = "pt-BR",
    currency: string = "BRL"
  ): string {
    return (amount ?? 0).toLocaleString(location, {
      style: "currency",
      currency: currency,
    });
  }
}
