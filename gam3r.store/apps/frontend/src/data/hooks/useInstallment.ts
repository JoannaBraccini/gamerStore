import { CalculateInstallment, MAX_COUNT_INSTALLMENT } from "@gstore/core";
export default function useInstallment(
  amount: number,
  quantity: number = MAX_COUNT_INSTALLMENT
) {
  return new CalculateInstallment().execute(amount, quantity);
}
