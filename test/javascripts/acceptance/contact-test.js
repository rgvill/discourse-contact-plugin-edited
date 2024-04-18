import { currentURL,visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Contact form", function (needs) {
  needs.settings({ contact_form_enabled: true });

  test("Contact form works", async function (assert) {
    await visit("/t/contact-evans-mechanical-services-inc/10");
    assert.notStrictEqual(currentURL(), "/");
  });
});
