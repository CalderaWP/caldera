<?php


namespace calderawp\caldera\WordPressPlugin;

use calderawp\caldera\restApi\Contracts\RouteContract as Route;
use calderawp\caldera\restApi\Endpoints\Form\GetForms;
use calderawp\caldera\restApi\Request;
use calderawp\caldera\restApi\Routes\EntryRoute;
use calderawp\caldera\restApi\Routes\FormRoute;
use calderawp\interop\Contracts\Rest\Endpoint;

/**
 * Class RestApi
 *
 * Registers Caldera REST API routes with WordPress
 */
class RestApi
{

	/**
	 * @var CalderaWordPressPlugin
	 */
	protected $module;
	protected $namespace = 'caldera-api/v1';
	protected $registerFunction;

	/**
	 * RestApi constructor.
	 *
	 * @param CalderaWordPressPlugin $module
	 * @param callable $registerFunction Function to register endpoint. Should be `register_rest_route()`
	 */
	public function __construct(CalderaWordPressPlugin $module, callable $registerFunction )
	{
		$this->registerFunction = $registerFunction;
		$this->module = $module;

	}

	/**
	 * Serve the forms/form entry API via wp-json
	 */
	public function initFormsApi()
	{
		$route = $this
			->module
			->getCore()
			->getRestApi()
			->getRoute(FormRoute::class);
		$this->registerRoute($route);
		$route = $this
			->module
			->getCore()
			->getRestApi()
			->getRoute(EntryRoute::class);
		$this->registerRoute($route);
	}


	/**
	 * Register an endpoint with WordPress
	 *
	 * @param Endpoint $endpoint
	 */
	public function registerRouteWithWordPress(Endpoint $endpoint)
	{
		call_user_func($this->registerFunction,$this->namespace, $endpoint->getUri(), $this->wpArgs($endpoint ) );
	}

	/**
	 * Create arguments for register_rest_route()
	 *
	 * @param Endpoint $endpoint
	 *
	 * @return array
	 */
	public function wpArgs(Endpoint $endpoint){
		$callback = function(\WP_REST_Request $_request) use ($endpoint){
			$request = $this->requestFromWp($_request);
			$response = $endpoint->handleRequest($request);
			return new \WP_REST_Response(
				$response->getData(),
				$response->getStatus(),
				$response->getHeaders()
			);

		};

		$permissionsCallback = function ($_request) use ($endpoint) {
			$request = $this->requestFromWp($_request);
			return $endpoint->authorizeRequest($request);
		};
		return [
			'args' => $endpoint->getArgs(),
			'methods' => $endpoint->getHttpMethod(),
			'callback' => $callback,
			'permission_callback' => $permissionsCallback
		];
	}


	/**
	 * @param \WP_REST_Request $_request
	 *
	 * @return Request
	 */
	protected  function requestFromWp(\WP_REST_Request $_request): Request
	{
		$request = new Request();
		$request->setParams($_request->get_params());
		foreach ($_request->get_headers() as $heder => $headerValue) {
			$request->setHeader($heder, $headerValue);
		}
		return $request;
	}

	/**
	 * @param Route $route
	 */
	protected function registerRoute(Route $route)
	{
		foreach ($route->getEndpoints() as $endpoint ){
			$this->registerRouteWithWordPress($endpoint);
		}
	}


}
