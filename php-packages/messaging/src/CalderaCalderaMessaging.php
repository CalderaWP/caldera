<?php


namespace calderawp\caldera\Messaging;
use calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Module;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;
use calderawp\caldera\Messaging\Contracts\MessageTransformerContract;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\DataSource\Contracts\SourceContract as DataSource;
class CalderaCalderaMessaging extends Module implements CalderaMessagingContract
{
	const IDENTIFIER  = 'Messaging';
	/**
	 * @inheritDoc
	 */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	public function registerServices(ServiceContainer $container): CalderaModule
	{

		$dataSource = new PostTypeWithCustomMetaTable('cf-pro-message');
		//@TODO register post type and test PostTypeWithCustomMetaTable

		$handleAuth = function (){};//@todo figure out auth next
		$transformer = new \calderawp\caldera\Messaging\Models\Transformers\Message();
		$transformer->setController(new class($dataSource,$handleAuth) extends RestController{});
		$route = $transformer->createRoute( new Message(),$this );
		$this->getCore()->getRestApi()->addRoute($route );
		return $this;
	}




}
