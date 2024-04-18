import { acceptance, exists } from "discourse/tests/helpers/qunit-helpers";
import { click, visit, currentURL, fillIn } from "@ember/test-helpers";
import { test } from "qunit";

acceptance("Contact form", function (needs) {
  needs.settings({ contact_form_enabled: true });

  test("Contact form works", async function (assert) {
    await visit("/t/contact-evans-mechanical-services-inc/10");
    assert.notStrictEqual(currentURL(), "/");
  });
});
