<?php


namespace calderawp\Tests;


use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\Recipients;
use calderawp\caldera\Messaging\Models\Message;

class MessageDbTest extends \WP_UnitTestCase
{

	public function testCreate(){
		$module = $this->getModule();
		$model = new Message();
		$model->setContent('Content' );
		$model->addRecipient('to', 'to@nom.com', 'to ');
		$model->addRecipient('cc', 'cc@nom.com', 'cc ');
		$model->addRecipient('reply', 'reply@nom.com', 'to ');
		$model->setSubject('subject' );
		$model->setEntryData(new EntryData());
		$id = $module->getMessageDataSource()->create($model->toArray() );
		$this->assertTrue( is_numeric($id));


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
}
