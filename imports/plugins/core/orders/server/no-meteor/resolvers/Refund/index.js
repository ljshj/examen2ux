import { encodePaymentOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/payment";
import { encodeRefundOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/refund";
import amount from "./amount";
import createdAt from "./createdAt";

export default {
  _id: (node) => encodeRefundOpaqueId(node._id),
  amount,
  createdAt,
  paymentId: (node) => encodePaymentOpaqueId(node.paymentId)
};
