# **Discourse Contact Form** Plugin

**Plugin Summary**

Places a contact form at the top of any topic tagged `contact`. Data submitted via the form is put into a category or group configured to receive mail from `contact form email`. That setting defaults to "contact@example.com" but can be configured to accept real emails.

In order to use this plugin, you must [configure incoming email to create new topics or group messages](https://meta.discourse.org/t/configure-incoming-email-to-create-new-topics-or-group-messages/62977). It isn't required to [set up reply by email](https://meta.discourse.org/t/troubleshoot-reply-by-email/42026) since the plugin doesn't actually send email. It hijacks the API to simulate incoming mail. (That said, reply by email is a useful feature!)

In particular, this plugin requires:

* `email_in` and
* `enable_staged_users`

to be enabled.

## Send to a group

Since people will use this form to submit their personal information, sending the results to a group is the safest option.

1. Create a new group for the people who will be handling contacts. (I using call it "Contact" for simplicity, but it could be anything including an existing group.)
2. Add members who will be receiving contact information.
3. **Do not** check any of the access options. This should be a closed group.
4. Change the visibility of the group as reasonable for your organization.
5. Set the "Custom incoming email address" to be the same as the `contact form email` setting. (By default, this is "contact@example.com".)

## Send to a category

Sending to a category is also possible using the "Custom incoming email address" category setting. Be sure to enable "Accept emails from anonymous users with no accounts" as well.

**Sending to a category is not recommended for contact information, however!** 

## TODO

* I will be adding a review form. I think this will be easiest as an extra option in this plugin.

For more information, please see: **url to meta topic**


Resources that helped me:

* [How to create a Discourse plugin](https://kleinfreund.de/how-to-create-a-discourse-plugin/)
* [Get server-side controller method to be called via plugin route](https://meta.discourse.org/t/get-server-side-controller-method-to-be-called-via-plugin-route/92186/2?u=jericson)
