import { registerRawHelper } from "discourse-common/lib/helpers";

registerRawHelper("includes", function(a, s) {
  console.log(a);
  return a.includes(s);
});
