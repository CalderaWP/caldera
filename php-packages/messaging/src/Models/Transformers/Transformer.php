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

abstract class Transformer
{

	abstract protected function getUri(): string;

	abstract protected function factory(array $items = []): Model;

	abstract protected function getHttpType(): string;

	abstract protected function getController(): Controller;

	public function fromRequest(Request $request): Model
	{
		return $this->factory($request->getParams());


	}

	public function toRequest(Model $model): Request
	{
		$array = ['params' => $model->toArray()];
		if ('rest' === $this->getHttpType()) {
			return \calderawp\caldera\restApi\Request::fromArray($array);
		}
		return \calderawp\caldera\Http\Request::fromArray($array);

	}

	public function fromResponse(Response $response): Model
	{
		return $this->factory($response->getData());
	}

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
