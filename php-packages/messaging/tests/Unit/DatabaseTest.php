<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Database;
use calderawp\DB\Tables;
use WpDbTools\Type\TableSchema;

class DatabaseTest extends UnitTestCase
{


	/**
	 * @covers \calderawp\caldera\Messaging\Database::createTable()
	 */
	public function testCreateTable(){
		$tables = \Mockery::mock(Tables::class);
		$tables->shouldReceive('createTable')->andReturn(true);
		$database = new \calderawp\caldera\Messaging\Database($tables);
		$schema = \Mockery::mock(TableSchema::class);
		$database->createTable($schema);
	}
}
