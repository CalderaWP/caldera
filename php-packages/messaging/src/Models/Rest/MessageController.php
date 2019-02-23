<?php


namespace calderawp\caldera\Messaging\Models\Rest;


use calderawp\caldera\Messaging\Contracts\MessageControllerContract;
use calderawp\caldera\Messaging\Message\Attributes;
use calderawp\caldera\Messaging\RestController;

class MessageController extends RestController implements MessageControllerContract
{



	public function getAttributes() : Attributes
	{
		return new Attributes();
	}

}
