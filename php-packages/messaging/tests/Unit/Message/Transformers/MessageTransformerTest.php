<?php

namespace calderawp\caldera\Messaging\Tests\Unit\Message\Transformers;

use calderawp\caldera\Http\Request;
use calderawp\caldera\Http\Response;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Transformers\Message as MessageTransformer;
use calderawp\caldera\Messaging\Tests\Unit\UnitTestCase;

class MessageTransformerTest extends UnitTestCase
{

	public function testFromResponse()
	{
		$response = \Mockery::mock(Response::class);
		$data = $this->getData();
		$response->shouldReceive('getData')->andReturn($data);
		$transformer = new MessageTransformer();
		$this->assertSame($this->getExpect(), $transformer->fromResponse($response)->toArray());
	}


	public function testFromRequest()
	{
		$transformer = new MessageTransformer();
		$request = \Mockery::mock(Request::class);
		$data = $this->getData();
		$request->shouldReceive('getParams')->andReturn($data);
		$this->assertSame($this->getExpect(), $transformer->fromRequest($request)->toArray());


	}

	public function testToRequest()
	{
		$transformer = new MessageTransformer();
		$data = $this->getData();
		$model = \Mockery::mock(Model::class);
		$model->shouldReceive('toArray')->andReturn($data);
		$this->assertSame([
			'id' => 7,
			'layout' => 8,
			'pdf' => false,
		], $transformer->toRequest($model)->getParams());

	}

	/**
	 * @return array
	 */
	protected function getData(): array
	{
		$data = ['id' => 7, 'layout' => 8, 'pdf' => false];
		return $data;
	}

	/**
	 * @return array
	 */
	protected function getExpect(): array
	{
		return [
			'id' => 7,
			'createdAt' => null,
			'updatedAt' => null,
			'account' => null,
			'layout' => 8,
			'content' => null,
			'pdf' => false,
			'pdfLayout' => null,
			'to' => null,
			'reply' => null,
			'cc' => null,
			'bcc' => null,
			'subject' => null,
			'spammed' => null,
			'entryData' => null,
			'attachments' => null,
		];
	}
}
