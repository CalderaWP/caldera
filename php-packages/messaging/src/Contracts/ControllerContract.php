<?php


namespace calderawp\caldera\Messaging\Contracts;


use calderawp\interop\Contracts\HttpRequestContract as Request;
use calderawp\interop\Contracts\HttpResponseContract as Response;

interface ControllerContract
{
	public function get(Request $request ): Response;
	public function create(Request$request ): Response;
	public function update(Request$request ): Response;
	public function delete(Request$request): Response;
	public function list(Request$request): Response;
	public function authorizeRequest(Request$request):bool ;
}
