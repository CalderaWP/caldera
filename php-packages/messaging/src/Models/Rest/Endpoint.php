<?php


namespace calderawp\caldera\Messaging\Models\Rest;


use calderawp\caldera\Messaging\Contracts\ModelContract;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\RestController;
use calderawp\interop\Contracts\Rest\RestRequestContract as Request;
use calderawp\interop\Contracts\Rest\RestResponseContract as Response;
use calderawp\interop\Traits\Rest\ProvidesRestEndpoint;

abstract class Endpoint implements \calderawp\interop\Contracts\Rest\Endpoint
{
	use ProvidesRestEndpoint;

	/**
	 * @var ModelContract
	 */
	private $model;
	/** @var RestController */
	private $controller;

	public function __construct(ModelContract $model, RestController $controller, string $httpMethod)
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


	public function handleRequest(Request $request): Response
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
			case 'ANONYMIZE':
				$response = $this->controller->anonymize($request);
				break;

			default:
				$response = new \calderawp\caldera\restApi\Response();
		}
		return $response;

	}

	public function authorizeRequest(Request $request): bool
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

	public function getToken(Request $request): string
	{
		return '';
	}

}
