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
	 * @return ModelContract
	 */
	public function fromRequest(Request $request): ModelContract;

	/**
	 * Create a request API response from current values of model
	 *
	 * @param ModelContract $model Message to transform
	 *
	 * @return Request
	 */
	public function toRequest(ModelContract $model): Request;

	/**
	 * Create a model from a REST API response
	 *
	 * @param Response $response
	 *
	 * @return ModelContract
	 */
	public function fromResponse(Response $response): ModelContract;

	/**
	 * Create a REST API route for the model, using its schema
	 *
	 * @param ModelContract $model
	 *
	 * @return Route
	 */
	public function createRoute(ModelContract $model): Route;
}
