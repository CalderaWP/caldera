<?php

namespace calderawp\caldera\Messaging\Entities\Contracts;

use calderawp\caldera\Messaging\Entities\Recipients;

interface RecipientsContracts
{
	/**
	 * Add recipient to collection
	 *
	 * @param RecipientContract $recipient
	 *
	 * @return Recipients
	 */
	public function addRecipient(RecipientContract $recipient): Recipients;
	public function empty() : bool;
}
