<?php

namespace calderawp\caldera\Messaging\Contracts;

use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\restApi\Route;
use calderawp\interop\Contracts\HttpRequestContract as Request;
use calderawp\interop\Contracts\HttpResponseContract as Response;

interface ModelTransformerContract
{
	/**
	 * Get Controller class used to route request/responses
	 *
	 * @return Controller
	 */
	public function getController(): Controller;

	/**
	 * Create a model from a REST API request
	 *
	 * @param Request $request Request to transform
	 *
	 * @return Model
	 */
	public function fromRequest(Request $request): Model;

	/**
	 * Create a request API response from current values of model
	 *
	 * @param Model $model Message to transform
	 *
	 * @return Request
	 */
	public function toRequest(Model $model): Request;

	/**
	 * Create a model from a REST API response
	 *
	 * @param Response $response
	 *
	 * @return Model
	 */
	public function fromResponse(Response $response): Model;

	/**
	 * Create a REST API route for the model, using its schema
	 *
	 * @param Model $model
	 *
	 * @return Route
	 */
	public function createRoute(Model $model): Route;
}
