export module Billing {
  export function compute(storage: number) {
    // 10 notes = $4/month, 100 notes = $2/month, 1000 notes = $1/month
    const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
    return rate * storage * 100;
  }
}
