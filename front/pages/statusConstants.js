/**
 * Enum for possible statuses.
 * @module StatusConstants
 */

/** ** Non-error statuses */
/** The transaction was just created. No paypal request has been done yet. */
exports.CREATED = 'created';
/** A request to Paypal has been done, but either there's been no response, or Paypal hasn't
*   approved or failed the withdrawal request. */
exports.PAYPAL_PENDING = 'paypal_pending';
/** A request to PayPal has been done and the withdrawal operation was approved. The money isn't in the target account yet. */
exports.PAYPAL_APPROVED = 'paypal_approved';

/** The withdrawal transaction was in the paypal settlement file and the amount was correct */
exports.PAYPAL_SETTLEMENT_SUCCEEDED = 'paypal_settlement_succeeded';

/** The withdrawal transaction has been internally and externally reconciled, but no operator has approved it yet */
exports.APPROVED_FOR_DISTRIBUTION = 'approved_for_distribution';

/** A nubi operator has approved the withdrawal transaction for distribution but the money hasn't been sent yet*/
exports.APPROVED_BY_OPERATOR = 'approved_by_operator';

/** The withdrawal transaction was approved and the sat file containing it was uploaded */
exports.SAT_FILE_UPLOADED = 'sat_file_uploaded';

/** The withdrawn money is in the target account. */
exports.DISTRIBUTED = 'distributed';

/** The top up transaction is awaiting a bank response to the user payment */
exports.TOPUP_AWAITING_BANK_RESPONSE = 'top_up_awaiting_bank_response';

/** The top up transaction has been confirmed by the banking system **/
exports.TOPUP_BANK_CONFIRMED = 'top_up_bank_confirmed';

/** The top up transaction has been matched manually by a operator */
exports.TOPUP_BANK_MANUALLY_MATCHED = 'top_up_manually_matched';

/** The top up transaction has had its relevant PayPal transaction created, and is awaiting a response. */
exports.TOPUP_PAYPAL_PENDING = 'top_up_paypal_pending';

/** The top up transaction has had its relevant PayPal transaction approved */
exports.TOPUP_PAYPAL_APPROVED = 'top_up_paypal_approved';

/** The top up transaction was in the PayPal settlement file and the amount was correct */
exports.TOPUP_PAYPAL_SETTLEMENT_SUCCEEDED = 'top_up_paypal_settlement_succeeded';

/** The top up transaction was failed but an operator resolved the problem */
exports.TOPUP_MANUALLY_RESOLVED = 'top_up_manually_resolved';

/** The top up transaction was manually rejected */
exports.TOPUP_MANUALLY_REJECTED = 'top_up_manually_rejected';

/** ** Error statuses */
/** The withdraw transaction couldn't be correctly created */
exports.FAILED = 'failed';

/** ** Error statuses */
/** The withdraw transaction was rejected */
exports.REJECTED = 'rejected';

/** A request to Paypal has been done and the withdrawal operation was rejected. */
exports.PAYPAL_FAILED = 'paypal_failed';

/** There were differences between the paypal settlement report and the withdrawal transaction */
exports.PAYPAL_SETTLEMENT_FAILED = 'paypal_settlement_failed';

/** Nubi couldn't finish the withdrawal operation in time */
exports.EXPIRED_PAYPAL = 'expired_paypal';
exports.EXPIRED_COMEX = 'expired_comex';
exports.EXPIRED_DISTRIBUTION = 'expired_distribution';
exports.EXPIRED_SAT = 'expired_sat';

/** The withdrawal transaction was in Paypal's rejected transactions file  */
exports.PAYPAL_REJECTED = 'paypal_rejected';

/** The Nubi operator rejected the withdrawal operation before uploading the SAT file */
exports.REJECTED_ACCOUNT = 'rejected_account';
exports.REJECTED_VALIDATION = 'rejected_validation';

/** The PayPal transaction request has failed, and the top up operation was rejected */
exports.TOPUP_PAYPAL_FAILED = 'top_up_paypal_failed';

/** The top up transaction was in the PayPal settlement file and the amount was not correct */
exports.TOPUP_PAYPAL_SETTLEMENT_FAILED = 'top_up_paypal_settlement_failed';

/** The top up transaction will now be available to match to a failed amount */
exports.TOPUP_PRE_EXPIRED = 'top_up_pre_expired';

/** The top up transaction wasn't matched in the allowed time */
exports.TOPUP_EXPIRED = 'top_up_expired';

exports.FAILED_WITHDRAW_STATUSES = [exports.PAYPAL_FAILED,
  exports.PAYPAL_SETTLEMENT_FAILED, exports.EXPIRED_PAYPAL, exports.EXPIRED_COMEX, exports.EXPIRED_DISTRIBUTION,
  exports.EXPIRED_SAT, exports.PAYPAL_REJECTED, exports.REJECTED_ACCOUNT, exports.REJECTED_VALIDATION];

exports.FAILED_TOPUP_STATUSES = [exports.TOPUP_PAYPAL_FAILED, exports.TOPUP_MANUALLY_REJECTED];

// For use in the 'failed top ups' endpoint. Basically statuses that can be handled outside of the system
exports.RESOLVABLE_TOPUP_STATUSES = [
  exports.TOPUP_PAYPAL_FAILED, exports.TOPUP_EXPIRED, exports.TOPUP_AWAITING_BANK_RESPONSE, exports.TOPUP_PRE_EXPIRED
];

exports.TERMINATED_WITHDRAW_STATUSES = exports.FAILED_WITHDRAW_STATUSES.concat(exports.DISTRIBUTED);

exports.BLOCK_TOPUP_AMOUNTS = [exports.CREATED, exports.TOPUP_AWAITING_BANK_RESPONSE,
  exports.TOPUP_PRE_EXPIRED, exports.TOPUP_BANK_CONFIRMED, exports.TOPUP_BANK_MANUALLY_MATCHED, exports.TOPUP_PAYPAL_PENDING,
  exports.TOPUP_PAYPAL_APPROVED, exports.TOPUP_PAYPAL_SETTLEMENT_SUCCEEDED, exports.TOPUP_PAYPAL_FAILED];

exports.TERMINATED_TOPUP_STATUSES = [exports.TOPUP_PAYPAL_SETTLEMENT_SUCCEEDED, exports.TOPUP_PAYPAL_APPROVED,
  exports.TOPUP_PAYPAL_SETTLEMENT_FAILED, exports.TOPUP_MANUALLY_RESOLVED, exports.TOPUP_MANUALLY_REJECTED,
  exports.TOPUP_PAYPAL_FAILED, exports.TOPUP_EXPIRED
];

exports.TERMINATED_STATUSES = exports.TERMINATED_WITHDRAW_STATUSES.concat(exports.TERMINATED_TOPUP_STATUSES);

exports.UNBILLABLE_STATUS = [exports.CREATED, exports.PAYPAL_FAILED, exports.PAYPAL_PENDING, exports.FAILED,
  exports.TOPUP_AWAITING_BANK_RESPONSE, exports.TOPUP_PAYPAL_PENDING, exports.TOPUP_PRE_EXPIRED,
  exports.TOPUP_EXPIRED, exports.TOPUP_PAYPAL_FAILED, exports.TOPUP_MANUALLY_REJECTED
];
