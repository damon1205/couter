import { Cl } from "@stacks/transactions";

import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/clarinet/feature-guides/test-contract-with-clarinet-sdk
*/

describe("Counter Test", () => {
  it("get-count", () => {
    const get_count_response = simnet.callReadOnlyFn(
      "counter",
      "get-count",
      [Cl.principal(address1)],
      address1
    );
    console.log(Cl.prettyPrint(get_count_response.result));
    expect(get_count_response.result).toBeUint(0);
  });

  it("count-up", () => {
    const get_count_response = simnet.callPublicFn(
      "counter",
      "count-up",
      [],
      address1
    );

    console.log(Cl.prettyPrint(get_count_response.result));

    expect(get_count_response.result).toBeOk(Cl.bool(true));
  });

  // it("shows an example", () => {
  //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
  //   expect(result).toBeUint(0);
  // });
});
