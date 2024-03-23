import { registerUnbound } from "discourse-common/lib/helpers";

registerUnbound("sample", function() {
  console.log("test");
  return 'sample';
});
