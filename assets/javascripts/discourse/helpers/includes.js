import { registerRawHelper } from "discourse-common/lib/helpers";

registerRawHelper("includes", function (a, s) {
   return a.includes(s);
});
