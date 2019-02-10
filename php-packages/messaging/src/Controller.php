<?php


namespace calderawp\caldera\Messaging;
use calderawp\caldera\Messaging\Contracts\ControllerContract;
use calderawp\interop\Contracts\HttpRequestContract as Request;


abstract class Controller implements ControllerContract
{


	public function authorizeRequest(Request $request): bool
	{
		// TODO: Implement authorizeRequest() method.
	}


}
