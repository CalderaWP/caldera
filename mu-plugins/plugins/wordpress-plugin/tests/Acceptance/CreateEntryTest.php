<?php


namespace calderawp\caldera\WordPressPlugin\Tests\Acceptance;


use calderawp\caldera\Http\Request;
use GuzzleHttp\Client as GuzzleClient;

class CreateEntryTest extends AcceptanceTestCase
{

	/**
	 * Test that we can create an entry via WordPress
	 */
	public function testCreateEntry(){
		$url = 'https://caldera.lndo.site/wp-json/caldera-api/v1/entries?formId=contact-form';
		$data = [
			'formId' => 'contact-form',
			'entryValues' => [
				'firstName' => 'Trover',
				'email' => 'Trover.DuChamps@gamil.com'
			]
		];
		$request = (new Request() )
			->setParams($data);

		$response = $this
			->core()
			->getHttp()
			->send($request,$url);
		$this->assertSame(200, $response->getStatus() );
		$this->assertArrayHasKey('Content-Type', $response->getHeaders() );
		$this->assertIsArray($response->getData());
	}
}
