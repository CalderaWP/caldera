<?php


namespace calderawp\caldera\Messaging\Contracts;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\caldera\Messaging\Models\Rest\MessageRoute;


interface CalderaMessagingContract extends CalderaModule
{
	public function getMessageRoute(): MessageRoute;
}
