import { MAX_COUNT_INSTALLMENT, MONTHLY_INTEREST_RATE } from "../constants";
import Installment from "./Installment";

export default class CalculateInstallment {
  execute(
    amount: number,
    installmentCount: number = MAX_COUNT_INSTALLMENT,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (installmentCount < 2 || installmentCount > MAX_COUNT_INSTALLMENT) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_COUNT_INSTALLMENT}`
      );
    }

    const totalWithInterest = this.calculateCoumpoundInterest(
      amount,
      interestRate,
      installmentCount
    );

    return {
      installmentAmount: this.withTwoDecimalPoints(
        totalWithInterest / installmentCount
      ),
      totalAmount: this.withTwoDecimalPoints(totalWithInterest),
      installmentCount,
      interestRate,
    };
  }

  private calculateCoumpoundInterest(
    totalAmount: number,
    monthlyRate: number,
    installmentCount: number
  ) {
    return totalAmount * Math.pow(1 + monthlyRate, installmentCount);
  }

  private withTwoDecimalPoints(amount: number): number {
    return Math.round(amount * 100) / 100;
  }
}
