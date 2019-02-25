<?php


namespace calderawp\Tests;


use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\Recipients;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;

class MessageDbTest extends \WP_UnitTestCase
{

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeFactory::postTypeWithMeta()
	 * @covers alderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testCreate(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$this->assertTrue( is_numeric($id));
	}

	/**
	 * @covers \calderawp\caldera\DataSource\WordPressData\PostTypeFactory::postTypeWithMeta()
	 * @covers alderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessageDataSource()
	 */
	public function testRead(){
		$module = $this->getModule();
		$model = $this->getMessageModel();
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$data = $module->getMessageDataSource()->read($id);
		$this->assertTrue( is_array($data));
		var_dump($id);exit;
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
