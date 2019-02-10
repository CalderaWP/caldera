<?php


namespace calderawp\caldera\Messaging;
use calderawp\caldera\Messaging\Contracts\RestControllerContract;
use calderawp\interop\Contracts\HttpRequestContract as Request;


abstract class RestController implements RestControllerContract
{


	public function authorizeRequest(Request $request): bool
	{
		// TODO: Implement authorizeRequest() method.
	}


}
