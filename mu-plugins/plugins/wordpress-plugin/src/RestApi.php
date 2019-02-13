<?php


namespace calderawp\caldera\WordPressPlugin;

use calderawp\caldera\restApi\Contracts\RouteContract as Route;
use calderawp\caldera\restApi\Endpoints\Form\GetForms;
use calderawp\caldera\restApi\Request;
use calderawp\caldera\restApi\Routes\EntryRoute;
use calderawp\caldera\restApi\Routes\FormRoute;
use calderawp\caldera\restApi\Traits\CreatesWordPressEndpoints;
use calderawp\interop\Contracts\Rest\Endpoint;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;


/**
 * Class RestApi
 *
 * Registers Caldera REST API routes with WordPress
 */
class RestApi
{
	use
		//Most of the Caldera -> WordPress logic is in this trait
		CreatesWordPressEndpoints;
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
	public function initFormsApi() : RestApi
	{
		$route = $this
			->getRestApiModule()
			->getRoute(FormRoute::class);
		$this->registerRoute($route);
		$route = $this
			->getRestApiModule()
			->getRoute(EntryRoute::class);
		$this->registerRoute($route);

		//Please Use the correct abstraction!!!
		register_rest_route($this->namespace, '/wordpress/style', [
			'args' => [
				'handle' => [
					'type' => 'string'
				]
			],
			'callback' => [$this,'serveStyle']
		]);


		return $this;
	}

	public function initProApi() : RestApi
	{
		$route =$this->getRestApiModule()->getRoute(\calderawp\caldera\Messaging\Models\Rest\MessageRoute::class);
		$this->registerRouteWithWordPress($route);
	}

	public function initAuth(string $siteUrl = '' ) : RestApi
	{
		$auth = $this->getRestApiModule()->getWpRestApiAuth();
		if( filter_var($siteUrl,FILTER_VALIDATE_URL)){
			$auth->setSiteUrl($siteUrl);
		}
		$auth->initTokenRoutes();
		return $this;
	}


	/**
	 * Respond to a request for a WordPress style
	 *
	 * @todo abstract this out and black box REST API/WP Styles
	 *
	 * @return \WP_REST_Response
	 */
	public function serveStyle( \WP_REST_Request $request ): \WP_REST_Response{
		$wpStyles = wp_styles();
		if( $wpStyles->query($request['handle'])  ){
			return rest_ensure_response($this->prepareStyle($request['handle'],$wpStyles));
		}

		return new \WP_REST_Response( 'not found', 404 );


	}

	/**
	 * @param $handle
	 * @param \WP_Styles $wpStyles
	 *
	 * @return array
	 */
	protected function prepareStyle(string $handle, \WP_Styles $wpStyles) : array {
		if( $wpStyles->query($handle)  ){
			$style = $wpStyles->query($handle);
			$dependencies = $style->deps;
			if( ! empty( $dependencies)){
				$_dependencies = [];
				foreach ( $dependencies as $dependency ){
					$_dependencies[$dependency] = $this->prepareStyle($dependency,$wpStyles);
				}
				$dependencies = $_dependencies;
			}
			ob_start();
			$wpStyles->do_item($handle);
			$tag = ob_get_clean();
			return  [
				'tag' => $tag,
				'dependencies' => $dependencies
			];
		};

	}

	/**
	 * @return  CalderaRestApiContract
	 */
	public function getRestApiModule(): CalderaRestApiContract
	{
		return $this
			->module
			->getRestApiModule();
}


}
