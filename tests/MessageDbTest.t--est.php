<?php


namespace calderawp\Tests;


use calderawp\caldera\DataSource\Exception;
use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\Recipients;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;

class MessageDbTest extends \WP_UnitTestCase
{


	public function tearDown(){
		global $wpdb;
		$module = $this->getModule();
		$table_name = $module->getMessageDataSource()->getMetaTable()->getTableName();
		$sql = "DROP TABLE IF EXISTS $table_name";
		$wpdb->query($sql);
		parent::tearDown();
	}
	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testCreate(){
		$module = $this->getModuleCreatingTableIfNeeded();
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
		$module = $this->getModuleCreatingTableIfNeeded();
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
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );

		$model->setSubject('s333' );
		$module->getMessageDataSource()->update($id, $model->toArray() );
		$data = $module->getMessageDataSource()->read($id);
		$this->assertTrue( is_array($data));
		$this->assertArrayHasKey('meta', $data );
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
		$module = $this->getModuleCreatingTableIfNeeded();
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
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$model->setSubject('food' );
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$model2 = new Message();
		$model2->setContent('Content');
		$model2->addRecipient('to', 't2o@nom.com', 'to ');
		$model2->addRecipient('cc', 'cc@nom.com', 'cc ');
		$model2->addRecipient('reply', 'reply@nom.com', 'to ');
		$model2->setSubject('subject-two');
		$model2->setEntryData(new EntryData());
		$id2 = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->findWhere( 'subject', 'subject-two' );
		$this->assertCount(1, $data );
		$this->assertEquals( 'subject-two', $data[0]['subject']);
		$this->assertArrayHasKey('meta', $data[0] );

	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findIn()
	 */
	public function testFindInPostColumn(){
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$id3 = $module->getMessageDataSource()->create($model->toArray() );
		$id2 = $module->getMessageDataSource()->create($model->toArray() );

		$data = $module->getMessageDataSource()->findIn( [$id2,$id3 ], 'ID' );
		$this->assertCount(2, $data );
		$this->assertSame( $id2,$data[0]['ID'] );
		$this->assertSame( $id3,$data[1]['ID'] );
		$this->assertArrayHasKey('meta', $data[0]);
		$this->assertArrayHasKey( 'meta',$data[1]);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findIn()
	 */
	public function testFindInMetaColumn(){
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$model->setSubject( 'search' );
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$model->setSubject( 'other');
		$id3 = $module->getMessageDataSource()->create($model->toArray() );
		$model->setSubject('not the same' );
		$id2 = $module->getMessageDataSource()->create($model->toArray() );

		$model1Data = $module->getMessageDataSource()->read($id);
		$this->assertEquals( 'search', $model1Data['meta']['subject']);

		$model3data = $module->getMessageDataSource()->read( $id3);
		$this->assertEquals( 'other', $model3data['meta']['subject']);
		$data = $module->getMessageDataSource()->findIn( ['search', 'other' ], 'subject' );
		$this->assertCount(2, $data );
		$this->assertSame( $id2,$data[0]['ID'] );
		$this->assertSame( $id3,$data[1]['ID'] );
		$this->assertArrayHasKey('meta', $data[0]);
		$this->assertArrayHasKey( 'meta',$data[1]);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findByMetaColumn()
	 */
	public function testFindByMetaColumn(){
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$model2 = new Message();
		$model2->setContent('no the same as the other model');
		$model2->addRecipient('to', 't2o@nom.com', 'to ');
		$model2->addRecipient('cc', 'cc@nom.com', 'cc ');
		$model2->addRecipient('reply', 'reply@nom.com', 'to ');
		$model2->setSubject('subject');
		$model2->setEntryData(new EntryData());



		$data = $module->getMessageDataSource()->findByMetaColumn('content', $model->getContent());
		$this->assertCount(1, $data);

		$data = $data[0];
		$this->assertArrayHasKey( 'meta', $data);
		$this->assertTrue( is_array($data));
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);

		$data = $module->getMessageDataSource()->findByMetaColumn('subject', $model->getSubject());
		$data = $data[0];
		$this->assertTrue( is_array($data));
		$this->assertArrayHasKey('meta', $data );
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::findById()
	 */
	public function testFindById(){
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->findById($id);
		$this->assertTrue( is_array($data));
		$post = get_post($id);
		$this->assertArrayHasKey('meta', $data );
		$this->assertTrue( is_array($data['meta']));
		$this->assertSame( $id, $data['ID']);
		$this->assertSame( $model->getContent(), $data['meta']['content']);
		$this->assertSame($post->post_title, $data['post_title' ]);

	}
	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::delete()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::create()
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable::read()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testDelete(){
		$module = $this->getModuleCreatingTableIfNeeded();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$module->getMessageDataSource()->delete($id );
		$this->expectException(Exception::class);
		$data = $module->getMessageDataSource()->read($id);

	}


	protected function getModuleCreatingTableIfNeeded(): \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin{
		$module = $this->getModule();
		$tables = new \calderawp\DB\Tables();
		$dataBase = new \calderawp\caldera\WordPressPlugin\Database(
			(new \calderawp\DB\Tables())
		);
		$dataBase->getTables()->createTable(
			$module->getMessageTableSchema()
		);

		return \caldera()->getModule(\calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::IDENTIFIER);
	}

	protected function getModule() :CalderaWordPressPlugin
	{
		global  $wpdb;
		$container = new \calderawp\CalderaContainers\Service\Container();
		$container->bind('\wpdb',$wpdb);
		$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin(\caldera(),$container);
		\caldera()->addModule($module);
		return $module;
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
