<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;
use calderawp\caldera\Messaging\Models\Rest\Endpoint;
use calderawp\caldera\restApi\Route;
use calderawp\interop\Contracts\HttpRequestContract as Request;
use calderawp\interop\Contracts\HttpResponseContract as Response;
use calderawp\interop\Contracts\Rest\RestRequestContract;
use calderawp\interop\Contracts\Rest\RestResponseContract;
use calderawp\interop\Traits\Rest\ProvidesRestEndpoint;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\Messaging\Contracts\ModelTransformerContract;

abstract class Transformer implements ModelTransformerContract
{

	abstract protected function getUri(): string;

	abstract protected function factory(array $items = []): Model;

	abstract protected function getHttpType(): string;

	/**
	 * Get Controller class used to route request/responses
	 *
	 * @return Controller
	 */
	abstract public function getController(): Controller;

	/**
	 * Create a model from a REST API request
	 *
	 * @param Request $request Request to transform
	 *
	 * @return Model
	 */
	public function fromRequest(Request $request): Model
	{
		return $this->factory($request->getParams());


	}

	/**
	 * Create a request API response from current values of model
	 *
	 * @param Model $model Message to transform
	 *
	 * @return Request
	 */
	public function toRequest(Model $model): Request
	{
		$array = ['params' => $model->toArray()];
		if ('rest' === $this->getHttpType()) {
			return \calderawp\caldera\restApi\Request::fromArray($array);
		}
		return \calderawp\caldera\Http\Request::fromArray($array);

	}

	/**
	 * Create a model from a REST API response
	 *
	 * @param Response $response
	 *
	 * @return Model
	 */
	public function fromResponse(Response $response): Model
	{
		return $this->factory($response->getData());
	}

	/**
	 * Create a REST API route for the model, using its schema
	 *
	 * @param Model $model
	 *
	 * @return Route
	 */
	public function createRoute(Model $model): Route
	{

		$route = new class extends Route
		{
			private $endpoints;

			/**z
			 * @inheritDoc
			 */
			public function addEndpoint(Endpoint $endpoint): Route
			{
				$this->endpoints = $endpoint;
				return $this;
			}

			/**
			 * @inheritDoc
			 */
			public function getEndpoints(): array
			{
				return !empty($this->endpoints) ? $this->endpoints : [];
			}


		};
		foreach ([
					 'GET',
					 'POST',
					 'PUT',
					 'DELETE',
					 'LIST',
				 ] as $httpMethod) {

			$route->addEndpoint($this->endpointFactory($model, $this->getController(), $httpMethod));

		}

		return $route;
	}

	/**
	 * @param Model $model
	 * @param $controller
	 *
	 * @return Endpoint
	 */
	protected function endpointFactory(Model $model, $controller, string $httpMethod)
	{
		$endpoint = new class($model, $controller, $httpMethod) extends Endpoint
		{
			use ProvidesRestEndpoint;

			public function getHttpMethod(): string
			{
				if ('LIST' === $this->httpMethod) {
					return 'GET';
				}
				return $this->httpMethod;
			}



		};
		return $endpoint;
	}

}
