<?php


namespace calderawp\caldera\Messaging;
use calderawp\caldera\Messaging\Contracts\RestControllerContract;
use calderawp\caldera\restApi\Controller;
use calderawp\interop\Contracts\HttpRequestContract as Request;


abstract class RestController extends Controller implements RestControllerContract
{



	public function authorizeRequest(Request $request): bool
	{
		return true;
		// TODO: Implement authorizeRequest() method.
	}


}
