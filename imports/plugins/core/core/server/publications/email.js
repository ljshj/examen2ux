import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";
import { Counts } from "meteor/tmeasday:publish-counts";
import Reaction from "/imports/plugins/core/core/server/Reaction";
import { Jobs } from "/imports/utils/jobs";


/**
 * Email Job Logs
 * @type {Object}
 * @param query
 * @param options - standard publication options object
 */
Meteor.publish("Emails", function (query, options) {
  check(query, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if (Reaction.hasPermission(["owner", "admin", "reaction-email"], this.userId)) {
    Counts.publish(this, "emails-count", Jobs.find({ type: "sendEmail" }));
    return Jobs.find({ type: "sendEmail" });
  }

  return this.ready();
});
