<?php


namespace calderawp\Tests;


use calderawp\DB\Tables;
use WpDbTools\Action\MySqlTableCreator;
use WpDbTools\Action\MySqlTableLookup;
use WpDbTools\Db\WpDbAdapter;
use WpDbTools\Factory\TableSchemaFactory;

class TablesTest extends \WP_UnitTestCase
{


	/**
	 * @covers \calderawp\DB\Tables::getDatabaseAdapter()
	 */
	public function testGetDatabaseAdapter()
	{
		$tables = new Tables();
		$this->assertInstanceOf(WpDbAdapter::class, $tables->getDatabaseAdapter());
	}

	/**
	 * @covers \calderawp\DB\Tables::getTableCreator()
	 */
	public function testGetTableCreator()
	{
		$tables = new Tables();
		$this->assertInstanceOf(MySqlTableCreator::class, $tables->getTableCreator());
	}

	/**
	 * @covers \calderawp\DB\Tables::getSchemaFactory()
	 */
	public function testGetSchemaFactory()
	{
		$tables = new Tables();
		$this->assertInstanceOf(TableSchemaFactory::class, $tables->getSchemaFactory());
	}

	/**
	 * Test forms table was created
	 *
	 * @covers \calderawp\DB\Tables::createTable()
	 */
	public function testCreated()
	{
		$tables = new Tables();
		$table = $this->formsTableFactory();
		$lookup = new MySqlTableLookup($tables->getDatabaseAdapter());
		$this->assertTrue($lookup->table_exists($table->getSchema()));
	}

	/**
	 * @covers \calderawp\DB\Tables::addTableSchema()
	 * @covers \calderawp\DB\Tables::getTableSchema()
	 */
	public function testAddSchema()
	{
		$tables = new Tables();
		$table = $this->formsTableFactory();
		$tables->addTableSchema('forms', $table->getSchema());
		$this->assertEquals($table->getTableName(), $tables->getTableSchema('forms')->name());
	}

	/**
	 * @return \calderawp\DB\Table
	 */
	protected function formsTableFactory()
	{
		$tables = new \calderawp\DB\Tables();
		$tables->addTableSchema('forms', \calderawp\DB\CalderaForms\Loader::formsSchemaYamlString());
		$tables->createTable($tables->getTableSchema('forms'));

		$table = new \calderawp\DB\Table(
			$tables->getDatabaseAdapter(),
			$tables->getTableSchema('forms')
		);
		return $table;
	}

}
