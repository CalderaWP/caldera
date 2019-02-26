<?php


namespace calderawp\Tests;


use calderawp\caldera\DataSource\Exception;
use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\Recipients;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;

class MessageDbTest extends \WP_UnitTestCase
{

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testCreate(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$this->assertTrue( is_numeric($id));
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::read()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testRead(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->read($id);
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::update()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::read()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testUpdate(){
		$this->markTestSkipped( ':(');
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );

		$model->setSubject('s333' );
		$module->getMessageDataSource()->update($id, $model->toArray() );
		$data = $module->getMessageDataSource()->read($id);
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
		$this->assertSame( 's333', $data['meta']['subject']);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::anonymize()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::read()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testAnnonymize(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$module->getMessageDataSource()->anonymize($id, 'content' );
		$data = $module->getMessageDataSource()->read($id);
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( 'XXXXXXXXXXXXXX', $data['meta']['content']);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findWhere()
	 */
	public function testFindWhere(){

	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findIn()
	 */
	public function testFindIn(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$id3 = $module->getMessageDataSource()->create($model->toArray() );
		$id2 = $module->getMessageDataSource()->create($model->toArray() );

		$data = $module->getMessageDataSource()->findIn( [$id2,$id3 ] );
		$this->assertCount(2, $data );
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findByMetaColumn()
	 */
	public function testFindByMetaColumn(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->findByMetaColumn('content', $model->getContent());
		$data = $data[0];
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);

		$data = $module->getMessageDataSource()->findByMetaColumn('subject', $model->getSubject());
		$data = $data[0];
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findById()
	 */
	public function testFindById(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->findById($id);
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
	}
	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::delete()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::read()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testDelete(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$module->getMessageDataSource()->delete($id );
		$this->expectException(Exception::class);
		$data = $module->getMessageDataSource()->read($id);

	}


	protected function getModule(): \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin{
		global  $wpdb;
		$container = new \calderawp\CalderaContainers\Service\Container();
		$container->bind('\wpdb',$wpdb);
		$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin(\caldera(),$container);
		\caldera()->addModule($module);
		$tables = new \calderawp\DB\Tables();
		$dataBase = new \calderawp\caldera\WordPressPlugin\Database(
			(new \calderawp\DB\Tables())
		);
		$dataBase->getTables()->createTable(
			$module->getMessageTableSchema()
		);

		return \caldera()->getModule(\calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::IDENTIFIER);
	}

	/**
	 * @return Message
	 */
	private function getMessageModel(): Message
	{
		$model = new Message();
		$model->setContent('Content');
		$model->addRecipient('to', 'to@nom.com', 'to ');
		$model->addRecipient('cc', 'cc@nom.com', 'cc ');
		$model->addRecipient('reply', 'reply@nom.com', 'to ');
		$model->setSubject('subject');
		$model->setEntryData(new EntryData());
		return $model;
	}
}
