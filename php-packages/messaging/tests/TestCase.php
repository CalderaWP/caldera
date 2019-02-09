<?php


namespace calderawp\caldera\Messaging\Tests;

use PHPUnit\Framework\TestCase as _TestCase;

abstract class TestCase extends \Mockery\Adapter\Phpunit\MockeryTestCase
{

	protected function entryData(): array
	{
		return [
			'id' => '15',
			'form_id' => 'CF5c1c10374f7e2',
			'user_id' => '1',
			'datestamp' => '2019-01-18 17:22:59',
			'status' => 'active',
			'fields' =>
				[
					'fld_8768091' =>
						[
							'id' => '65',
							'entry_id' => '15',
							'field_id' => 'fld_8768091',
							'slug' => 'first_name',
							'value' => 'Josh',
						],
					'fld_9970286' =>
						[
							'id' => '66',
							'entry_id' => '15',
							'field_id' => 'fld_9970286',
							'slug' => 'last_name',
							'value' => 'Pollock',
						],
					'fld_6009157' =>
						[
							'id' => '67',
							'entry_id' => '15',
							'field_id' => 'fld_6009157',
							'slug' => 'email_address',
							'value' => 'josh@calderawp.com',
						],
					'fld_7683514' =>
						[
							'id' => '68',
							'entry_id' => '15',
							'field_id' => 'fld_7683514',
							'slug' => 'comments_questions',
							'value' => 'f',
						],
					'fld_7908577' =>
						[
							'id' => '69',
							'entry_id' => '15',
							'field_id' => 'fld_7908577',
							'slug' => 'submit',
							'value' => 'click',
						],
				],
		];
	}
}
