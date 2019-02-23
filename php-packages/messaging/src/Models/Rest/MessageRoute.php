<?php


namespace calderawp\caldera\Messaging\Models\Rest;


use calderawp\caldera\Messaging\Message\Attributes;
use calderawp\caldera\restApi\CalderaRestApi;
use calderawp\caldera\restApi\Route;
use calderawp\interop\Attribute;
use calderawp\interop\Traits\Rest\ProvidesRestEndpoint;

class MessageRoute extends Route
{
	protected $endpoints;

	/**
	 * @var MessageController
	 */
	protected $controller;

	protected $attributes;

	public function __construct(CalderaRestApi $module)
	{
		parent::__construct($module);
		$this->attributes = new Attributes();
	}

	public function addEndpoint(
		\calderawp\interop\Contracts\Rest\Endpoint $endpoint): \calderawp\interop\Contracts\Rest\Route
	{
		$this->endpoints[] = $endpoint;
		return $this;
	}


	public function setController( MessageController $controller){
		$this->controller = $controller;
		$this->addEndpointsFromController();
		return $this;
	}

	public function addEndpointsFromController()
	{

		foreach ($this->getEndpointsMap() as $callbackName => $_endpoint){
			$httpMethod = strtoupper($callbackName);
			$this->addEndpoint(  $this->endpointFactory($this->controller,$httpMethod,$_endpoint['uri']));
		}

	}



	protected function getEndpointsMap(): array
	{
		$uri = 'messages';
		$idUri = 'messages/(?P<id>[\d]+)';
		return [
			'get' => [
				'uri' => $idUri
			],
			'create' => [
				'uri' => $uri
			],
			'update' => [
				'uri' => $idUri
			],
			'list' => [
				'uri' => $uri
			],
			'delete' => [
				'uri' => $idUri
			],
			'anonymize' => [
				'uri' => $idUri. '/anonymize'
			],
			'search' => [
				'uri' => $uri. '/search'
			],
		];
	}
	/**
	 * @param $controller
	 *
	 * @return Endpoint
	 */
	protected function endpointFactory( $controller, string $httpMethod,string  $uri)
	{

		$endpoint = new class($controller, $httpMethod,$uri) extends Endpoint
		{
			use ProvidesRestEndpoint;

			public function getArgs(): array
			{

				switch ( $this->httpMethod ){
					case 'UPDATE':
					case 'CREATE':
						$args = $this->getController()->getAttributes()->toRestApiArgs();
						break;
					case 'SEARCH':
						$args = [
							'searchColumn' => [
								'required' => true,
								'name' => 'searchColumn',
								'type'=> 'string',
								'description' => 'Field to search in'
							],
							'searchValue' => [
								'required' => true,
								'name' => 'searchValue',
								'type'=> 'string',
								'description' => 'Value to search by'
							]

						];
						break;
					case 'ANONYMIZE':
						$args = [
							'column' => [
								'required' => true,
								'name' => 'column',
								'type'=> 'string',
								'description' => 'Field to anonymize'
							]

						];
						break;
					default:
						$args = [];
						break;
				}

				return $args;
			}

			public function getHttpMethod(): string
			{
				if ( in_array($this->httpMethod,[
					'LIST',
					'SEARCH',
				]) ) {
					return 'GET';
				}

				if( in_array( $this->httpMethod, ['CREATE'] )){
					return 'PUT';
				}
				if ( in_array($this->httpMethod,[
					'ANONYMIZE',
				]) ) {
					return 'POST';
				}
				return $this->httpMethod;
			}



		};
		return $endpoint;
	}

	/**
	 * @inheritDoc
	 */
	public function getEndpoints(): array
	{
		return !empty($this->endpoints) ? $this->endpoints : [];
	}
}
