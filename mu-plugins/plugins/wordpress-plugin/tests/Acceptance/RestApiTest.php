<?php

namespace calderawp\caldera\WordPressPlugin\Tests\Acceptance;

use calderawp\caldera\Http\Request;
use calderawp\caldera\WordPressPlugin\RestApi;

class RestApiTest extends AcceptanceTestCase
{

	public function testInitFormsApi()
	{

	}

	public function testInitAuth()
	{

	}

	public function testInitProApi()
	{
		$url = 'https://caldera.lndo.site/wp-json/caldera-api/v1/';
		$request = (new Request() )
			->setParams([]);
		$response = $this
			->core()
			->getHttp()
			->send($request,$url);
		$routes = $response->getData()[ 'routes' ];
		$this->assertArrayHasKey( '/caldera-api/v1/messages', $routes );
		$route = $response->getData()[ 'routes' ]['/caldera-api/v1/messages'];
		$this->assertCount(1, $route['methods'] );
	}

	public function testGetRestApiModule()
	{

	}

	public function testServeStyle()
	{

	}
}
