<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;
use calderawp\interop\Contracts\HttpRequestContract as Request;
use calderawp\interop\Contracts\HttpResponseContract as Response;
use calderawp\interop\Contracts\Rest\Endpoint;
use calderawp\interop\Contracts\Rest\Route;
use calderawp\interop\Contracts\Rest\RestRequestContract;
use calderawp\interop\Contracts\Rest\RestResponseContract;
use calderawp\interop\Traits\Rest\ProvidesRestEndpoint;
use calderawp\caldera\Messaging\Contracts\ControllerContract as Controller;

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

	public function createRoute(Model $model): Endpoint
	{


		$route = new class implements Route
		{
			private $endpoints;

			/**
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
		$endpoint = new class($model, $controller, $httpMethod) implements Endpoint
		{
			use ProvidesRestEndpoint;

			/**
			 * @var Model
			 */
			private $model;
			/** @var Controller */
			private $controller;
			private $httpMethod;

			public function __construct(Model $model, Controller $controller, string $httpMethod)
			{
				$this->model = $model;
				$this->controller = $controller;
				$this->httpMethod = $httpMethod;
			}

			public function getHttpMethod(): string
			{
				if ('LIST' === $this->httpMethod) {
					return 'GET';
				}
				return $this->httpMethod;
			}

			public function getUri(): string
			{
				if( in_array( $this->httpMethod, [ 'GET', 'POST', 'DELETE'])){
					$uri = $this->uri;
					return "$uri/<(?P<id>\d+)>";
				}
				return $this->getUri();
			}

			public function getArgs(): array
			{
				return $this->model->getSchema();
			}


			public function handleRequest(RestRequestContract $request): RestResponseContract
			{
				switch ($this->httpMethod) {
					case 'LIST':
						$response = $this->controller->list($request);
						break;
					case 'GET':
						$response = $this->controller->get($request);
						break;
					case 'POST':
						$response = $this->controller->update($request);
						break;
					case 'PUT':
						$response = $this->controller->create($request);
						break;
					case 'DELETE':
						$response = $this->controller->delete($request);
						break;

					default:
						$response = new \calderawp\caldera\restApi\Response();
				}
				return $response;

			}

			public function authorizeRequest(RestRequestContract $request): bool
			{
				try {
					$this->controller->authorizeRequest($request);
				} catch (\Exception $e) {
					return (new \calderawp\caldera\restApi\Response())
						->setStatus($e->getCode())
						->setData(['message' => $e->getMessage()])
						->setHttpMethod($this->getHttpMethod());
				}
				return true;
			}

			public function getToken(RestRequestContract $request): string
			{
				return '';
			}

		};
		return $endpoint;
	}

}
